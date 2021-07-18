import React from "react";
import { useParams } from "react-router-dom";

// import css
import { makeStyles, useTheme } from "@material-ui/core/styles";

// material
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// icons
import PrintIcon from '@material-ui/icons/Print';
import CloseIcon from '@material-ui/icons/Close';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CheckIcon from '@material-ui/icons/Check';

// start css
const useStyles = makeStyles((theme) => ({

    root: { flexGrow: 1, borderRadius: 0 },
    button: {
        margin: 10, marginTop: 25, marginBottom: 25, textTransform: 'capitalize', backgroundColor: '#DB0011',
        borderRadius: '0'
    },
    buttonOutlined: {
        margin: 10, marginTop: 25, marginBottom: 30, textTransform: 'capitalize', color: '#DB0011',
        borderRadius: '0'
    },

}));
// end css

export default function CenteredGrid({ saveData, resultRequest, resultStatus, resultMsg, firstOpen, setFirstOpen, secondOpen, setSecondOpen, printScreen }) {

    // Entry params
    let { option, origin } = useParams();

    // State variables
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    // Funcion para configurar el mensaje de confirmación de 
    // acuerdo al valor del parametro option recibido
    function Confirmation() {
        if (option === 'ReimprimirDiferida') {
            return <Typography gutterBottom>
                ¿Está seguro que desea hacer una <strong variant="h5" component="h2">REIMPRESIÓN DIFERIDA</strong> de tarjeta de débito?
            </Typography>;
        } else if (option === 'ReimprimirTarjeta') {
            return <Typography gutterBottom>
                ¿Está seguro que desea hacer una <strong variant="h5" component="h2">REIMPRESIÓN</strong> de tarjeta de débito?
            </Typography>;
        } else if (option === 'BajaBanelco' || option === 'BajaDeTarjeta') {
            return <Typography gutterBottom>
                ¿Está seguro que desea <strong variant="h5" component="h2">DAR DE BAJA</strong> la tarjeta de débito?
            </Typography>;
        } else if (option === 'BlanqueoPin') {
            return <Typography gutterBottom>
                ¿Está seguro que desea <strong variant="h5" component="h2">BLANQUEAR EL PIN</strong> de la tarjeta de débito?
            </Typography>;
        } else if (option === 'CambioCierre' || option === 'CambioCierreTC' || option === 'CbioCierreCartera') {
            return <Typography gutterBottom>
                ¿Está seguro que desea <strong variant="h5" component="h2">CAMBIAR EL CIERRE</strong> de la tarjeta de crédito?
            </Typography>;
        }
    }

    const handleCloseFirst = () => {
        setFirstOpen(false);
    };

    const handleCloseSecond = () => {
        setSecondOpen(false);
        window.close();
    };

    const retrySaveData = () => {
        saveData(true);
    };

    // Style variables
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* start dialog confirmation */}
            <Dialog fullScreen={fullScreen} open={firstOpen} onClose={handleCloseFirst} aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">{"Confirmación"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Confirmation />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="secondary" size="large" className={classes.button}
                        startIcon={<CheckIcon />} onClick={saveData}>Aceptar</Button>
                    <Button onClick={handleCloseFirst} variant="contained" color="secondary" size="large" className={classes.button}
                        startIcon={<CloseIcon />}>Cancelar</Button>
                </DialogActions>
            </Dialog>

            {/* start dialog result */}
            <Dialog disableEscapeKeyDown disableBackdropClick fullScreen={fullScreen} open={secondOpen} onClose={handleCloseSecond} aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">{"Registración"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography gutterBottom>
                            Se ha generado el pedido: <strong>{resultRequest}</strong> con estado <u><strong>{resultStatus}</strong></u>
                        </Typography>
                        <Typography gutterBottom>
                            {resultMsg}
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="secondary" size="large" className={classes.button}
                        startIcon={<PrintIcon />} onClick={printScreen}>Imprimir</Button>
                    {/* <Button onClick={retrySaveData} variant="outlined" color="secondary" size="large" className={classes.buttonOutlined}
                        startIcon={<AutorenewIcon />} style={{ display: (origin === 'BANCA' && resultStatus !== 'Resuelto') ? 'inherit' : 'none' }}>Reintentar</Button> */}
                    <Button onClick={handleCloseSecond} variant="contained" color="secondary" size="large" className={classes.button}
                        startIcon={<CloseIcon />}>Salir</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
