import React from "react";
import { useParams } from "react-router-dom";

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

// services
import AbmService from '../services/abmService';

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

export default function TableWithoutData({ row, deleteItem, index, setLoading }) {

    // Entry params
    let { operationId, productNumber } = useParams();

    // State variables
    const [selectedEnte, setSelectedEnte] = React.useState('');
    const [selectedCuil, setSelectedCuil] = React.useState('');
    const [showImport, setShowImport] = React.useState(false);
    const [disabledSelect, setDisabledSelect] = React.useState(true);
    const [disabledLimit, setDisabledLimit] = React.useState(true);
    const [disabledReference, setDisabledReference] = React.useState(true);
    const [limitChecked, setLimitChecked] = React.useState(false);
    const [enteSubentes, setEnteSubentes] = React.useState([]);
    const [maxLongReference, setMaxLongReference] = React.useState(0);

    // Style variables
    const classes = useStyles();

    const handleChange = (e) => {
        console.log(e.target.value);
        setDisabledLimit(false);
        setDisabledReference(false);
        if (!e.target.value) {
            setDisabledLimit(true);
            setDisabledReference(true);
        }
        setSelectedEnte(e.target.value);
        enteSubentes.forEach(ente => {
            if (ente.authority === e.target.value) {
                setMaxLongReference(ente.longReferenceN);
            }
        });
    };

    const handleLimitChange = (e) => {
        setLimitChecked(e.target.checked);
        setShowImport(e.target.checked);
    }

    const deleteDelete = () => {
        deleteItem(index);
    }

    const handleOnBlur = (e) => {
        setLoading(true);
        getEntesSubentes(e.target.value);
        setSelectedCuil(e.target.value);
    };

    // Funcion hook para consultar ente/subente
    const getEntesSubentes = (cuit) => {
        AbmService.getEntesSubentes(operationId, cuit)
            .then(data => {
                setEnteSubentes(data.authorities);
                setLoading(false);
                setDisabledSelect(false);
            })
    }

    return (
        <StyledTableRow key={row.cuitCuil}>
            <StyledTableCell>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="cuit-cuil" size="small" helperText="*Ingresar" variant="outlined" onBlur={handleOnBlur} />
                </form>
            </StyledTableCell>
            <StyledTableCell>
                <FormControl variant="outlined" className={classes.formControl} size="small">
                    <Select onChange={handleChange} disabled={disabledSelect}>
                        {enteSubentes.map((enteSubente) =>
                            <MenuItem value={enteSubente.authority} label={enteSubente.authority + ' - ' + enteSubente.description + ' - ' + enteSubente.presentation}>
                                {enteSubente.authority + ' - ' + enteSubente.description + ' - ' + enteSubente.presentation}
                            </MenuItem>)
                        }
                    </Select>
                    <FormHelperText>*Seleccionar</FormHelperText>
                </FormControl>
            </StyledTableCell>
            <StyledTableCell>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="referencia" size="small" helperText="*Ingresar" inputProps={{ maxLength: maxLongReference }} disabled={disabledReference} variant="outlined" />
                </form>
            </StyledTableCell>
            <StyledTableCell>{productNumber}</StyledTableCell>
            <StyledTableCell>
                <Checkbox onChange={e => handleLimitChange(e)} color="primary" disabled={disabledLimit}
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
