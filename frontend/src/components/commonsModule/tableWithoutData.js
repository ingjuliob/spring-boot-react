import React from "react";

// import css
import { makeStyles, withStyles } from "@material-ui/core/styles";

// material
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';

// icons
import DeleteIcon from '@material-ui/icons/Delete';

// start css
const useStyles = makeStyles((theme) => ({

    formControl: { width: '95%' },
    table: { minWidth: 700 },
    button: {
        color: 'black', textTransform: 'capitalize', fontWeight: '600', cursor: 'default',
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

export default function TableWithoutData({row, deleteItem, index}) {
    // State variables
    const [entes, setEntes] = React.useState('');
    const [showImport, setShowImport] = React.useState(false);
    const [limitChecked, setLimitChecked] = React.useState(false);

    // Style variables
    const classes = useStyles();

    const handleChange = (e) => {
        setEntes(e.target.value);
    };

    const handleLimitChange = (e) => {
        setLimitChecked(e.target.checked);
        setShowImport(e.target.checked);
    }

    const deleteDelete = () => {
        deleteItem(index);
    } 

    return (
        <StyledTableRow key={row.cuitCuil}>
            <StyledTableCell>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="cuit-cuil" size="small" helperText="*Ingresar" variant="outlined" />
                </form>
            </StyledTableCell>
            <StyledTableCell>
                <FormControl variant="outlined" className={classes.formControl} size="small">
                    <Select labelId="demo-simple-select-outlined-label" id="ente-subente"
                        value={entes} onChange={handleChange} helperText="*Ingresar">
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>298479248298 - SANTIAGO VAQUIE - CUOTAS</MenuItem>
                        <MenuItem value={20}>298479248298 - SANTIAGO VAQUIE - VENTLIBROS</MenuItem>
                    </Select>
                    <FormHelperText>*Seleccionar</FormHelperText>
                </FormControl>
            </StyledTableCell>
            <StyledTableCell>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="referencia" size="small" helperText="*Ingresar" variant="outlined" />
                </form>
            </StyledTableCell>
            <StyledTableCell>{row.account}</StyledTableCell>
            <StyledTableCell>
                <Checkbox onChange={e => handleLimitChange(e)} color="primary"
                    inputProps={{ 'aria-label': 'disbaled checked checkbox' }} checked={limitChecked} />
            </StyledTableCell>
            <StyledTableCell>
                <div style={{ display: showImport ? 'none' : 'inherit' }}>
                    {row.limit}
                </div>
                <form className={classes.root} noValidate autoComplete="off"
                    style={{ display: showImport ? 'inherit' : 'none' }}>
                    <TextField id="importe" size="small" variant="outlined" />
                </form>
            </StyledTableCell>
            <StyledTableCell>
                <Tooltip title="click para eliminar fila">
                    <IconButton aria-label="delete" className={classes.margin} color="secondary"
                                onClick={deleteDelete}>
                        <DeleteIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
            </StyledTableCell>
        </StyledTableRow>
    );
}
