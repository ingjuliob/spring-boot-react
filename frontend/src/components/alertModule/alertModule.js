import React from "react";
import { useParams } from "react-router-dom";

// import css
import { makeStyles } from "@material-ui/core/styles";

// material
import { Alert, AlertTitle } from '@material-ui/lab';

// services
import BaseService from '../services/baseService';

// start css
const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1, borderRadius: 0 }
}))
// end css

export default function CenteredGrid() {

  // Entry params
  let { operationId, productCode, causeCode, reasonCode, companyCode } = useParams();

  // State variables
  const [alert, setAlert] = React.useState('');

  // Style variables
  const classes = useStyles();

  // Funcion hook para consultar la ayuda al operador
  React.useEffect(() => {
    async function callAPI() {
      BaseService.getAlert(operationId, productCode, causeCode, reasonCode, companyCode)
        .then(dataAlert => {
          setAlert(dataAlert.message);
        })
    }
    callAPI();
  }, [operationId, productCode, causeCode, reasonCode, companyCode]);

  return (
    <div className={classes.root}>
        <Alert severity="info">
            <AlertTitle><strong>Tener en cuenta</strong></AlertTitle>
            {alert}
        </Alert>
    </div>
  );
}
