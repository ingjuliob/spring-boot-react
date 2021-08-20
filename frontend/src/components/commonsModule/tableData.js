import React from "react";
import { useParams } from "react-router-dom";

// import css
import { makeStyles, withStyles } from "@material-ui/core/styles";

// material
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

// start css
const useStyles = makeStyles((theme) => ({

    root: { flexGrow: 1, borderRadius: 0 },
    pos: { marginBottom: 12, },
    divider: { marginTop: 25, marginBottom: 25 },
    formControl: { width: '95%' },
    table: { minWidth: 700 },
    button: {
        color: 'black', textTransform: 'capitalize', fontWeight: '600', cursor: 'default',
        '&:hover': { backgroundColor: '#ededed', color: 'black' }
    },

}));

const StyledTableCell = withStyles((theme) => ({

    head: { backgroundColor: '#ededed', color: theme.palette.common.black, fontWeight: 'bold', paddingBottom: 6, paddingTop: 6 },
    body: { fontSize: 14, paddingBottom: 0, paddingTop: 0 }

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({

    root: {
        '&:nth-of-type(odd)': {
            // backgroundColor: theme.palette.action.hover,
        },
    },

}))(TableRow);
// end css

export default function BasicTable({ debito }) {

    // Entry params
    let { productNumber } = useParams();

    // State variables
    const [showImport, setShowImport] = React.useState(false);
    const [modifyChecked, setModifyChecked] = React.useState(false);
    const [limitChecked, setLimitChecked] = React.useState(false);
    const [disabledLimitCheck, setDisabledLimitCheck] = React.useState(true);
    const [disabledModifyCheck, setDisabledModifyCheck] = React.useState(false);
    const [disabledAll, setDisabledAll] = React.useState(false);

    // Style variables
    const classes = useStyles();

    const handleModifyChange = (e) => {
        setModifyChecked(e.target.checked);
        debito.modifyEnable = e.target.checked;
        setDisabledLimitCheck(!e.target.checked);
        if (!e.target.checked) {
            setLimitChecked(false);
            setShowImport(false);
        } else {
            debito.deleteEnable = false;
        }
    };

    const handleLimitChange = (e) => {
        debito.limitEnable = e.target.checked;
        setLimitChecked(e.target.checked);
        setShowImport(e.target.checked);
    }

    const handleDeleteChange = (e) => {
        debito.deleteEnable = e.target.checked;
        debito.modifyEnable = false;
        debito.limitEnable = false;
        setShowImport(false);
        setModifyChecked(false);
        setLimitChecked(false);
        setDisabledLimitCheck(true);
        setDisabledModifyCheck(e.target.checked);
        setDisabledAll(e.target.checked)
    };

    const handleImporteChange = (e) => {
        debito.importe = e.target.value;
    }

    return (
        <StyledTableRow key={debito.authority.cuitNumber}>
            <StyledTableCell style={{ color: disabledAll ? '#00000042' : 'black' }}>
                {debito.authority.cuitNumber}
            </StyledTableCell>
            <StyledTableCell style={{ color: disabledAll ? '#00000042' : 'black' }}>
                {debito.entityNumber}-{debito.subentityNumber}
            </StyledTableCell>
            <StyledTableCell style={{ color: disabledAll ? '#00000042' : 'black' }}>
                {debito.referenceNumber}
            </StyledTableCell>
            <StyledTableCell style={{ color: disabledAll ? '#00000042' : 'black' }}>
                {productNumber}
            </StyledTableCell>
            <StyledTableCell style={{ color: disabledAll ? '#00000042' : '#DB0011' }}>
                <Checkbox onChange={e => handleLimitChange(e)} color="primary" disabled={disabledLimitCheck}
                    inputProps={{ 'aria-label': 'disbaled checked checkbox' }} checked={limitChecked} />
            </StyledTableCell>
            <StyledTableCell style={{ color: disabledAll ? '#00000042' : 'black' }}>
                <div style={{ display: showImport ? 'none' : 'inherit' }}>
                    {debito.limitToControl}
                </div>
                <form className={classes.root} noValidate autoComplete="off"
                    style={{ display: showImport ? 'inherit' : 'none' }}>
                    <TextField type="number" size="small" variant="outlined" onChange={e => handleImporteChange(e)} />
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
    );
}