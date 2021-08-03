import React from "react";
import DataUpload from './dataUpload';

// material
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

// icons
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AttachFileIcon from '@material-ui/icons/AttachFile';


// import css
import { makeStyles, withStyles } from "@material-ui/core/styles";

// start css
const useStyles = makeStyles((theme) => ({

    root: { flexGrow: 1, borderRadius: 0 },
    flex: { display: 'flex', alignItems: 'center' },
    arrow: { paddingRight: 15, paddingLeft: 15, width: 10, verticalAlign: 'bottom' },
    alignItems: { alignItems: 'center' },
    divider: { marginTop: 5, marginBottom: 5 },
    app: { width: '100%' },
    fontBlue: { fontSize: '0.75rem', color: 'blue' },
    fontRed: { fontSize: '0.75rem', color: 'red' },
    h6: { fontSize: '1rem' },
    heading: { flexBasis: '33.33%', flexShrink: 0 },
    attach: { paddingRight: 15, verticalAlign: 'middle' },
    secondaryHeading: { fontSize: theme.typography.pxToRem(15), color: theme.palette.text.secondary, alignSelf: 'center' }

}));

const Accordion = withStyles({
    root: {
        boxShadow: "none",
        "&:not(:last-child)": { borderBottom: 0 },
        "&:before": { display: "none" },
        "&$expanded": { margin: "auto" },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        marginBottom: -1, minHeight: 56,
        "&$expanded": { minHeight: 56 },
    },
    content: {
        "&$expanded": { margin: "12px 0" },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: { padding: theme.spacing(2) },
}))(MuiAccordionDetails);
// end css

export default function UploadFile({ clientRelations, productRelations }) {

    // Style variables
    const classes = useStyles();

    return (

        <Accordion style={{ backgroundColor: '#f5f5f5' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                <Typography className={classes.heading} variant="h6" component="h2">
                    <AttachFileIcon size="large" color="secondary" className={classes.attach} />
                    Adjuntar Archivos
                </Typography>
                <Typography className={classes.secondaryHeading}>Expanda acá para gestionar adjuntos</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div className={classes.app}>
                    {(clientRelations.length > 0) ?
                        <>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Grid container spacing={3}>
                                        <Grid item lg={12} style={{ width: '100%' }}>
                                            <Typography variant="h6" component="h6" className={classes.h6}>
                                                Documentos de Cliente (ingresados desde la solapa <b>"Datos del Cliente"</b>)
                                            </Typography>

                                            {clientRelations.map(relation => (
                                                <>
                                                    <Grid container spacing={3} className={classes.alignItems}>
                                                        <Grid item xs={4}>
                                                            <Typography color="textSecondary" variant="h6" component="h6" className={relation.existeEnSAC ? classes.fontBlue : classes.fontRed}>
                                                                <FiberManualRecordIcon className={classes.arrow} />
                                                                {relation.tipoDocumental}
                                                            </Typography>
                                                        </Grid>
                                                        {relation.existeEnSAC ?
                                                            <Grid item xs={8}>
                                                                <Tooltip title="El archivo ya ha sido cargado.">
                                                                    <IconButton aria-label="delete" size="small">
                                                                        <CheckIcon />
                                                                    </IconButton>
                                                                </Tooltip>
                                                            </Grid>
                                                            :
                                                            <Grid item xs={8}>
                                                                <Tooltip title="El archivo aún no se ha cargado.">
                                                                    <IconButton aria-label="delete" size="small">
                                                                        <CloseIcon />
                                                                    </IconButton>
                                                                </Tooltip>
                                                            </Grid>}
                                                    </Grid>
                                                    <Divider variant="middle" className={classes.divider} />
                                                </>
                                            ))}
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                            <br></br>
                        </>
                        : null}

                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item lg={12} style={{ width: '100%' }}>
                                    <Typography className={classes.h6} variant="h6" component="h6">
                                        Documentos de Producto
                                    </Typography>

                                    {(productRelations.length > 0) ?
                                        productRelations.map(relation => (
                                            <>
                                                <DataUpload relation={relation}></DataUpload>
                                                <Divider variant="middle" className={classes.divider} />
                                            </>
                                        ))
                                        :
                                        <Typography>
                                            Esta solicitud no requiere adjuntar documentos de producto.
                                        </Typography>
                                    }
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </div >
            </AccordionDetails>
        </Accordion>
    )
}
