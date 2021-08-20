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
        setDisabledLimit(false);
        setDisabledReference(false);
        if (!e.target.value) {
            setDisabledLimit(true);
            setDisabledReference(true);
        }
        setSelectedEnte(e.target.value);
        row.enteSubente = e.target.value;
        enteSubentes.forEach(ente => {
            if (ente.authority === e.target.value) {
                setMaxLongReference(ente.longReferenceN);
            }
        });
    };

    const handleLimitChange = (e) => {
        row.limitEnable = e.target.checked;
        setLimitChecked(e.target.checked);
        setShowImport(e.target.checked);
        if (!e.target.checked) {
            row.importe = 0;
        }
    }

    const deleteDelete = () => {
        deleteItem(index);
    }

    const handleOnBlur = (e) => {
        setLoading(true);
        getEntesSubentes(e.target.value);
        setSelectedCuil(e.target.value);
        row.cuitCuil = e.target.value;
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

    const handleImporteChange = (e) => {
        row.importe = e.target.value;
    }

    const handleReferenciaChange = (e) => {
        row.referencia = e.target.value;
    }

    return (
        <StyledTableRow>
            <StyledTableCell>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField size="small" variant="outlined" onBlur={handleOnBlur} />
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
                </FormControl>
            </StyledTableCell>
            <StyledTableCell>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField size="small" inputProps={{ maxLength: maxLongReference }}
                        disabled={disabledReference} variant="outlined" onChange={e => handleReferenciaChange(e)} />
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
                    <TextField size="small" variant="outlined" onChange={e => handleImporteChange(e)} />
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
