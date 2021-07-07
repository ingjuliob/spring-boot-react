import React from "react";
import { useParams } from "react-router-dom";
import logo from '../../img/logo.svg';

// import css
import { makeStyles } from "@material-ui/core/styles";

// material
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// start css
const useStyles = makeStyles((theme) => ({

  root: { flexGrow: 1, borderRadius: 0 },
  appbar: { background: 'white', paddingTop: 10, paddingBottom: 10, marginBottom: 25, color: 'black' },
  navbarTitle: { flexGrow: 1, textAlign: 'right', fontStyle: 'uppercase' }

}));
// end css

export default function CenteredGrid() {

  // Entry params
  let { option } = useParams();

  // State variables
  const [tipo, setTipo] = React.useState("");

  // Style variables
  const classes = useStyles();

  // Funcion hook para configurar el nombre de la transaccional de 
  // acuerdo al valor del parametro option recibido
  React.useEffect(() => {
    if (option === 'ReimprimirDiferida') {
      setTipo("Reimpresión Diferida de Tarjeta Banelco");
    } else if (option === 'ReimprimirTarjeta') {
      setTipo("Reimpresión Común de Tarjeta Banelco");
    } else if (option === 'BajaBanelco') {
      setTipo("Baja de Tarjeta Banelco");
    } else if (option === 'BlanqueoPin') {
      setTipo("Blanqueo de PIN");
    } else if (option === 'CambioCierre' || option === 'CambioCierreTC' || option === 'CbioCierreCartera') {
      setTipo("Cambio de Cierre TC");
    }
  }, [option]);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Container maxWidth="lg">
          <Toolbar>
            <img src={logo} className="App-logo" alt="logo" />
            <Typography variant="h6" className={classes.navbarTitle}>
              {tipo}
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
