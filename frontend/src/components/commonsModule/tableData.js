import React from "react";

// import css
import { makeStyles, withStyles } from "@material-ui/core/styles";

// material
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

// icons
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

// services
import BaseService from '../services/baseService';
import AbmService from '../services/abmService';

// start css
const useStyles = makeStyles((theme) => ({

    root: { flexGrow: 1, borderRadius: 0 },
    pos: { marginBottom: 12, },
    divider: { marginTop: 25, marginBottom: 25 },
    formControl: { width: '95%' },
    table: { minWidth: 700 },
    button: { color: 'black', textTransform: 'capitalize', fontWeight: '600', cursor: 'default',
              '&:hover': { backgroundColor: '#ededed', color: 'black' }
    },

}));

const StyledTableCell = withStyles((theme) => ({

    head: { backgroundColor: '#ededed', color: theme.palette.common.black, fontWeight: 'bold' },
    body: { fontSize: 14 }

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({

    root: {
        '&:nth-of-type(odd)': {
            // backgroundColor: theme.palette.action.hover,
        },
    },

}))(TableRow);
// end css

function createData(cuitCuil, enteSubente, referencia, account, limit, price) {
    return { cuitCuil, enteSubente, referencia, account, limit, price };
}

const rows = [
    createData('27-35507558/9', 262, '298479248298 - SANTIAGO VAQUIE - CUOTAS', 2446788, '$999,999.999'),
];

export default function BasicTable() {

    // State variables
    const [showImport, setShowImport] = React.useState(false);
    const [modifyChecked, setModifyChecked] = React.useState(false);
    const [deleteChecked, setDeleteChecked] = React.useState(false);
    const [limitChecked, setLimitChecked] = React.useState(false);
    const [disabledLimitCheck, setDisabledLimitCheck] = React.useState(true);
    const [disabledModifyCheck, setDisabledModifyCheck] = React.useState(false);
    const [disabledAll, setDisabledAll] = React.useState(false);

    // Style variables
    const classes = useStyles();

    const handleModifyChange = (e) => {
        setModifyChecked(e.target.checked);
        setDisabledLimitCheck(!e.target.checked);
    };

    const handleLimitChange = (e) => {
        setLimitChecked(e.target.checked);
        setShowImport(e.target.checked);
    }

    const handleDeleteChange = (e) => {
        setDeleteChecked(e.target.checked);
        setShowImport(false);
        setModifyChecked(false);
        setLimitChecked(false);
        setDisabledLimitCheck(true);
        setDisabledModifyCheck(e.target.checked);
        setDisabledAll(e.target.checked)
    };

    return (
        <div className={classes.root}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>CUIT/CUIL</StyledTableCell>
                            <StyledTableCell>Ente/Subente</StyledTableCell>
                            <StyledTableCell>Referencia</StyledTableCell>
                            <StyledTableCell>Cuenta</StyledTableCell>
                            <StyledTableCell>Límite</StyledTableCell>
                            <StyledTableCell>Importe</StyledTableCell>
                            <StyledTableCell>
                                <Button className={classes.button} startIcon={<EditIcon />}>
                                    Modificar
                          </Button>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Button className={classes.button} startIcon={<DeleteIcon />}>
                                    Eliminar
                          </Button>
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.cuitCuil}>
                                <StyledTableCell style={{ color: disabledAll ? '#00000042' : 'black' }}>{row.cuitCuil}</StyledTableCell>
                                <StyledTableCell style={{ color: disabledAll ? '#00000042' : 'black' }}>{row.enteSubente}</StyledTableCell>
                                <StyledTableCell style={{ color: disabledAll ? '#00000042' : 'black' }}>{row.referencia}</StyledTableCell>
                                <StyledTableCell style={{ color: disabledAll ? '#00000042' : 'black' }}>{row.account}</StyledTableCell>
                                <StyledTableCell style={{ color: disabledAll ? '#00000042' : '#DB0011' }}>
                                    <Checkbox onChange={e => handleLimitChange(e)} color="primary" disabled={disabledLimitCheck}
                                        inputProps={{ 'aria-label': 'disbaled checked checkbox' }} checked={limitChecked} />
                                </StyledTableCell>
                                <StyledTableCell style={{ color: disabledAll ? '#00000042' : 'black' }}>
                                    <div style={{ display: showImport ? 'none' : 'inherit' }}>
                                        {row.limit}
                                    </div>
                                    <form className={classes.root} noValidate autoComplete="off"
                                        style={{ display: showImport ? 'inherit' : 'none' }}>
                                        <TextField id="importe" size="small" variant="outlined" />
                                    </form>
                                </StyledTableCell>
                                <StyledTableCell style={{ color: disabledAll ? '#00000042' : '#DB0011' }} align="center">
                                    <Checkbox onChange={e => handleModifyChange(e)} color="primary" checked={modifyChecked}
                                        inputProps={{ 'aria-label': 'secondary checkbox' }} disabled={disabledModifyCheck} />
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <Checkbox onChange={e => handleDeleteChange(e)} color="primary"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }} />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}