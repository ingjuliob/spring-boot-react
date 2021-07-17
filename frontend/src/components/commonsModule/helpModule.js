import React from "react";
import { useParams } from "react-router-dom";

// import css
import { makeStyles } from "@material-ui/core/styles";

// material
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from "@material-ui/core/Typography";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

// services
import BaseService from '../services/baseService';

// start css
const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1, borderRadius: 0 },
  icon: { color: '#00b7ff' },
  title: { marginLeft: '1%', verticalAlign: '5px', color: '#24557d', fontSize: 'large' },
  textarea: { width: '99%', backgroundColor: 'aliceblue', border: 'none', fontFamily: 'inherit', color: '#24557d' }
}))
// end css

export default function CenteredGrid() {

  // Entry params
  let { operationId, productCode, causeCode, reasonCode, companyCode } = useParams();

  // State variables
  const [helpText, setHelpText] = React.useState('');

  // Style variables
  const classes = useStyles();

  // Funcion hook para consultar la ayuda al operador
  React.useEffect(() => {
    async function callAPI() {
      BaseService.getHelp(operationId, productCode, causeCode, reasonCode, companyCode)
        .then(dataHelp => {
          setHelpText(dataHelp.message);
        })
    }
    callAPI();
  }, [operationId, productCode, causeCode, reasonCode, companyCode]);

  return (
    <div className={classes.root} style={{ backgroundColor: 'aliceblue', padding: '2%' }}>

      <Typography variant="h6" component="h2">
        <ErrorOutlineIcon className={classes.icon} />
        <strong className={classes.title}>Tener en cuenta</strong>
        <br></br>
      </Typography>
      <TextareaAutosize aria-label="minimum height" minRows={3} disabled className={classes.textarea} value={helpText}>
      </TextareaAutosize>
    </div>
  );
}
