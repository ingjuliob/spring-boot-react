import React from "react";

// import css
import { makeStyles } from "@material-ui/core/styles";

// material
import { red } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';

// start css
const useStyles = makeStyles((theme) => ({

  root: { flexGrow: 1, borderRadius: 0 },
  backdrop: { zIndex: theme.zIndex.drawer + 1, color: '#fff' },
  buttonProgress: {
    color: red[500], position: 'absolute', top: '50%', left: '50%', margin: theme.spacing(1),
    display: 'flex', alignItems: 'center'
  }

}));
// end css

function Loading({loading}) {

  // Style variables
  const classes = useStyles();

  return (
    <div className={classes.root}>
        {loading && <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress size={40} className={classes.buttonProgress} />
          </Backdrop>
        }
    </div>
  );
}

export default Loading