import React from "react";

// import css
import { makeStyles } from "@material-ui/core/styles";

// material
import Button from '@material-ui/core/Button';

// icons
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';

// start css
const useStyles = makeStyles(() => ({

  root: { flexGrow: 1, borderRadius: 0 },
  button: {
    margin: 10, marginTop: 25, marginBottom: 30, textTransform: 'capitalize', backgroundColor: '#DB0011',
    borderRadius: '0'
  },
  buttonOutlined: {
    margin: 10, marginTop: 25, marginBottom: 30, textTransform: 'capitalize', color: '#DB0011',
    borderRadius: '0'
  },
  alignItems: { textAlign: 'right' }

}));
// end css

export default function CenteredGrid({ getConfirmation, disable, valueButton }) {

  // Style variables
  const classes = useStyles();

  const closeWindow = () => {
    window.close();
  }

  return (
    <div className={classes.root}><div className={classes.alignItems}>
      <Button variant="contained" color="secondary" size="large" className={classes.button} disabled={disable}
        startIcon={<SaveIcon />} onClick={getConfirmation}>{valueButton}</Button>

      <Button variant="contained" color="secondary" size="large" className={classes.button}
        onClick={closeWindow} startIcon={<CloseIcon />}>Salir</Button>
    </div>
    </div>
  );
}
