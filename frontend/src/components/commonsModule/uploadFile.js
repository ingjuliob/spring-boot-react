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

// icons
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';


// import css
import { makeStyles } from "@material-ui/core/styles";

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
    h6: { fontSize: '1rem' }

}));
// end css

export default function UploadFile({ clientRelations, productRelations }) {

    // Style variables
    const classes = useStyles();

    return (

        <div className={classes.app}>

            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item lg={12}>
                            <Typography variant="h6" component="h6" className={classes.h6}>
                                Documentos de Cliente (ingresados desde la solapa <b>"Datos del Cliente"</b>)
                            </Typography>

                            <br></br>
                            {(clientRelations.length > 1) ?

                                clientRelations.map(relation => (
                                    <>
                                        <Grid container spacing={3} className={classes.alignItems}>
                                            <Grid item lg={4}>
                                                <Typography color="textSecondary" variant="h6" component="h6" className={relation.existeEnSAC ? classes.fontBlue : classes.fontRed}>
                                                    <FiberManualRecordIcon className={classes.arrow} />
                                                    {relation.tipoDocumental}
                                                </Typography>
                                            </Grid>
                                            {relation.existeEnSAC ?
                                                <Grid item lg={8}>
                                                    <Tooltip title="El archivo ya ha sido cargado.">
                                                        <IconButton aria-label="delete" size="small">
                                                            <CheckIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Grid>
                                                :
                                                <Grid item lg={8}>
                                                    <Tooltip title="El archivo aún no se ha cargado.">
                                                        <IconButton aria-label="delete" size="small">
                                                            <CloseIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Grid>}
                                        </Grid>
                                        <Divider variant="middle" className={classes.divider} />
                                    </>

                                ))

                                :
                                <Typography>
                                    Esta solicitud no requiere adjuntar documentos de cliente.
                                </Typography>
                            }
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <br></br>

            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item lg={12}>
                            <Typography className={classes.h6} variant="h6" component="h6">
                                Documentos de Producto
                            </Typography>

                            <br></br>

                            {(productRelations.length > 1) ?
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
    )
}
