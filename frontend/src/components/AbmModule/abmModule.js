import React from "react";
import { useParams } from "react-router-dom";
import NavbarModule from '../commonsModule/navbarModule';
import DialogsModule from '../commonsModule/dialogsModule';
import ButtonsModule from '../commonsModule/buttonsModule';
import LoadingModule from '../commonsModule/loadingModule';
import HelpModule from '../commonsModule/helpModule';
import TableData from '../commonsModule/tableData';
import TableWithoutData from '../commonsModule/tableWithoutData';
import line from '../../img/vertical-line.svg';

// import css
import { makeStyles, withStyles } from "@material-ui/core/styles";

// icons
import AddIcon from '@material-ui/icons/Add';

// material
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';

// services
import BaseService from '../services/baseService';
import AbmService from '../services/abmService';

// start css
const useStyles = makeStyles(() => ({

  root: { flexGrow: 1, borderRadius: 0 },
  pos: { marginBottom: 12, },
  line: { width: 6, paddingRight: 15, height: 16 },
  divider: { marginTop: 25, marginBottom: 25 },
  formControl: { width: '95%' },
  table: { minWidth: 700 },
  button: { color: 'black', textTransform: 'capitalize', fontWeight: '600', cursor: 'default',
            '&:hover': { backgroundColor: '#ededed', color: 'black' }
  },

}));

const StyledTableCell = withStyles((theme) => ({

  head: { backgroundColor: '#ededed', color: theme.palette.common.black, fontWeight: 'bold' },
  body: { fontSize: 14 }

}))(TableCell);
// end css

function createData(cuitCuil, enteSubente, referencia, account, limit, price) {
  return { cuitCuil, enteSubente, referencia, account, limit, price };
}

export default function BasicTable() {

  // Entry params
  let { operationId, option, documentType, documentNumber, businessName, contactModeCode, productCode, causeCode,
    reasonCode, companyCode, responsibleSector, registerSector, user, origin,
    initContact, closeContact, productNumber } = useParams();

  // State variables
  const [disable, setDisable] = React.useState(false);
  const [firstOpen, setFirstOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);
  const [resultRequest, setResultRequest] = React.useState("");
  const [resultStatus, setResultStatus] = React.useState("");
  const [resultMsg, setResultMsg] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [rows, setRows] = React.useState([ ]);

  // Style variables
  const classes = useStyles();

  // Funcion para guardar la registracion generada
  const saveData = () => {
    setFirstOpen(false);
    setDisable(true);
    setLoading(true);

    BaseService.saveData(operationId, productCode, causeCode, companyCode, documentType, documentNumber, productNumber, origin,
      user, option, contactModeCode, reasonCode, responsibleSector, registerSector, initContact, closeContact, "", "")
      .then(data => {
        let pedido = data.registration.requestNumber;
        let mensaje = data.registration.message;
        let estado = data.registration.status;
        setSecondOpen(true);
        setResultRequest(pedido);
        setResultStatus(estado);
        setResultMsg(mensaje);
        setLoading(false);
      });
  }

  const getConfirmation = () => {
    setFirstOpen(true);
  }

  const printData = () => {
    setLoading(true);

    BaseService.printData(operationId, productCode, causeCode, companyCode, documentType, documentNumber, productNumber, origin,
      user, option, contactModeCode, reasonCode, responsibleSector, registerSector, initContact, closeContact, "",
      "", "", "", resultRequest)
      .then(data => {
        setLoading(false);
      });
  };

  // Funcion para eliminar fila
  const deleteItem = (index) => {
    console.log("index", index)
    var oldRows = [...rows];
    oldRows.splice(index, 1);
    setRows(oldRows);
  }

  // Funcion hook para consultar los detalles de la tarjeta y los embozos
  React.useEffect(() => {
    async function callAPI() {
      let data = [];

      for (var i = 0; i < 4; i++) {
        data.push(createData('27-35507558/9', 262, '298479248298 - SANTIAGO VAQUIE - CUOTAS', 2446788+i, '$999,999.999'))
      }

      setRows(data);
    }
    callAPI();
  }, [ ]);

  return (
    <div className={classes.root}>
      {/* Start Navbar Module */}
      <NavbarModule />
      {/* End Navbar Module */}

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={12}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  <img src={line} className={classes.line} alt="logo" />
                  Cliente
                </Typography>
                <br></br>
                <Grid container spacing={6}>
                  <Grid item lg={4}>
                    <Typography variant="caption" display="block" gutterBottom>
                      Apellido y Nombre
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {businessName}
                    </Typography>
                  </Grid>

                  <Grid item lg={4}>
                    <Typography variant="caption" display="block" gutterBottom>
                      Tipo y Nº de Documento
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {documentType} - {documentNumber}
                    </Typography>
                  </Grid>

                  <Grid item lg={4}>
                    <Typography variant="caption" display="block" gutterBottom>
                      Nº de Cliente
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      97274
                    </Typography>
                  </Grid>
                </Grid>

                <Divider variant="middle" className={classes.divider} />

                <Typography variant="h5" component="h2">
                  <img src={line} className={classes.line} alt="logo" />
                  Lista de débitos existentes - Cuenta: 9727435346
                </Typography>

                <br></br>

                {/* start table data */}
                <TableData></TableData>
                {/* end table data */}

                <br></br>

                <Divider variant="middle" className={classes.divider} />

                <Typography variant="h5" component="h2">
                  <img src={line} className={classes.line} alt="logo" />
                  Lista de nuevos débitos a asociar
                </Typography>

                <br></br>

                {/* start table without data */}
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>CUIT/CUIL</StyledTableCell>
                        <StyledTableCell>Ente/Subente</StyledTableCell>
                        <StyledTableCell>Referencia</StyledTableCell>
                        <StyledTableCell>Cuenta</StyledTableCell>
                        <StyledTableCell>Límite</StyledTableCell>
                        <StyledTableCell>Importe</StyledTableCell>
                        <StyledTableCell>Eliminar</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row, index) => (

                        <TableWithoutData row={row} deleteItem={deleteItem} index={index}></TableWithoutData>

                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <br></br>

                <Tooltip title="click para agregar fila" aria-label="add">
                  <Fab color="secondary" className={classes.absolute}>
                    <AddIcon fontSize="large" />
                  </Fab>
                </Tooltip>
                {/* end table without data */}

                <br></br><br></br>

                {/* start help */}
                <HelpModule />
                {/* end help */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Start Loading Module */}
        <LoadingModule loading={loading}></LoadingModule>
        {/* End Loading Module */}

        {/* Start Dialog */}
        <DialogsModule saveData={saveData} resultRequest={resultRequest} resultStatus={resultStatus}
          resultMsg={resultMsg} firstOpen={firstOpen} setFirstOpen={setFirstOpen} printScreen={printData}
          secondOpen={secondOpen} setSecondOpen={setSecondOpen}></DialogsModule>
        {/* End Dialog */}

        {/* Start Buttons Module */}
        <ButtonsModule disable={disable} getConfirmation={getConfirmation}></ButtonsModule>
        {/* End Buttons Module */}
      </Container>
    </div>
  );
}