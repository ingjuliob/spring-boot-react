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
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

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
import Button from '@material-ui/core/Button';

// services
import BaseService from '../services/baseService';
import AbmService from '../services/abmService';

// start css
const useStyles = makeStyles((theme) => ({

  root: { flexGrow: 1, borderRadius: 0 },
  paddingLine: { padding: '0 16px', marginBottom: 5 },
  spaceText: { paddingLeft: theme.spacing(2) },
  gutterBottom: { marginBottom: 0 },
  line: { width: 6, paddingRight: 15, height: 16 },
  divider: { marginTop: 10, marginBottom: 10 },
  formControl: { width: '95%' },
  table: { minWidth: 700 },
  button: {
    color: 'black', textTransform: 'capitalize', fontWeight: '600', cursor: 'default',
    '&:hover': { backgroundColor: '#ededed', color: 'black' }
  },
  add: { padding: '3%', fontSize: '14px', textTransform: 'uppercase' }

}));

const StyledTableCell = withStyles((theme) => ({

  head: { backgroundColor: '#ededed', color: theme.palette.common.black, fontWeight: 'bold', paddingBottom: 6, paddingTop: 6 },
  body: { fontSize: 14, paddingBottom: 5, paddingTop: 5 }

}))(TableCell);
// end css

function createData(cuitCuil, enteSubente, account, limit) {
  return {
    cuitCuil: cuitCuil, enteSubente: enteSubente, account: account,
    limit: limit, importe: 0, limitEnable: false, referencia: ''
  };
}

export default function BasicTable() {

  // Entry params
  let { operationId, option, documentType, documentNumber, businessName, contactModeCode, productCode, causeCode,
    reasonCode, companyCode, responsibleSector, registerSector, user, origin,
    initContact, closeContact, productNumber, cuit } = useParams();

  // State variables
  const [disable, setDisable] = React.useState(false);
  const [firstOpen, setFirstOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);
  const [resultRequest, setResultRequest] = React.useState("");
  const [resultStatus, setResultStatus] = React.useState("");
  const [resultMsg, setResultMsg] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [debitos, setDebitos] = React.useState([]);

  // Style variables
  const classes = useStyles();

  // Funcion para guardar la registracion generada
  const saveData = () => {

    rows.forEach(row => {
      console.log(row)
    })

    debitos.forEach(debito => {
      console.log(debito)
    })


    /* setFirstOpen(false);
    setDisable(true);
    setLoading(true);

    AbmService.saveAbm(operationId, productCode, causeCode, companyCode, documentType, documentNumber, productNumber, origin,
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
      }); */
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
    var oldRows = [...rows];
    oldRows.splice(index, 1);
    setRows(oldRows);
  }

  // funci??n nueva fila
  const addRow = () => {
    let data = [];
    data.push(createData('', '', productNumber, '$999,999.999'));
    setRows([...rows, ...data])
  }

  // Funcion hook para consultar 
  React.useEffect(() => {
    async function callAPI() {
      AbmService.getConsulta(operationId, documentType, documentNumber)
        .then(data => {
          setDebitos(data.debitosCta.creditCardAdhesions);
        })
    }
    callAPI();
  }, [operationId, documentType, documentNumber]);

  return (
    <div className={classes.root}>
      {/* Start Navbar Module */}
      <NavbarModule />
      {/* End Navbar Module */}

      <Container maxWidth="lg">
        <Grid container>
          <Grid item lg={12} style={{ width: '100%' }}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h6" component="h2" className={classes.paddingLine}>
                  <img src={line} className={classes.line} alt="logo" />
                  Cliente
                </Typography>

                <Grid container spacing={6} className={classes.spaceText}>
                  <Grid item lg={4}>
                    <Typography variant="caption" display="block" gutterBottom className={classes.gutterBottom}>
                      Apellido y Nombre
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {businessName}
                    </Typography>
                  </Grid>

                  <Grid item lg={4}>
                    <Typography variant="caption" display="block" gutterBottom className={classes.gutterBottom}>
                      Tipo y N?? de Documento
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {documentType} - {documentNumber}
                    </Typography>
                  </Grid>

                  <Grid item lg={4}>
                    <Typography variant="caption" display="block" gutterBottom className={classes.gutterBottom}>
                      N?? de Cliente
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      97274
                    </Typography>
                  </Grid>
                </Grid>

                <Divider variant="middle" className={classes.divider} />

                <Typography variant="h6" component="h2" className={classes.paddingLine}>
                  <img src={line} className={classes.line} alt="logo" />
                  Lista de d??bitos existentes - Cuenta: {productNumber}
                </Typography>

                {/* start table data */}
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell style={{ paddingTop: '1px', paddingBottom: '1px' }}>CUIT/CUIL</StyledTableCell>
                        <StyledTableCell style={{ paddingTop: '1px', paddingBottom: '1px' }}>Ente/Subente</StyledTableCell>
                        <StyledTableCell style={{ paddingTop: '1px', paddingBottom: '1px' }}>Referencia</StyledTableCell>
                        <StyledTableCell style={{ paddingTop: '1px', paddingBottom: '1px' }}>Cuenta</StyledTableCell>
                        <StyledTableCell style={{ paddingTop: '1px', paddingBottom: '1px' }}>L??mite</StyledTableCell>
                        <StyledTableCell style={{ paddingTop: '1px', paddingBottom: '1px' }}>Importe</StyledTableCell>
                        <StyledTableCell style={{ paddingTop: '1px', paddingBottom: '1px' }}>
                          <Button className={classes.button} startIcon={<EditIcon />}>Modificar</Button>
                        </StyledTableCell>
                        <StyledTableCell style={{ paddingTop: '1px', paddingBottom: '1px' }}>
                          <Button className={classes.button} startIcon={<DeleteIcon />}>Eliminar</Button>
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {debitos && debitos.map((debito) => (
                        <TableData debito={debito}></TableData>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                {/* end table data */}

                <br></br>

                <Divider variant="middle" className={classes.divider} />

                <Typography variant="h6" component="h2" className={classes.paddingLine}>
                  <img src={line} className={classes.line} alt="logo" />
                  Lista de nuevos d??bitos a asociar
                </Typography>

                {/* start table without data */}
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>CUIT/CUIL</StyledTableCell>
                        <StyledTableCell>Ente/Subente</StyledTableCell>
                        <StyledTableCell>Referencia</StyledTableCell>
                        <StyledTableCell>Cuenta</StyledTableCell>
                        <StyledTableCell>L??mite</StyledTableCell>
                        <StyledTableCell>Importe</StyledTableCell>
                        <StyledTableCell>Eliminar</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    {rows.length > 0 ?
                      <TableBody>
                        {rows.map((row, index) => (
                          <TableWithoutData row={row} deleteItem={deleteItem} index={index} setLoading={setLoading}></TableWithoutData>
                        ))}
                      </TableBody>
                      : <Typography className={classes.add} color="textSecondary">
                        Para agregar nuevos d??bitos presione el bot??n +
                      </Typography>}
                  </Table>
                </TableContainer>

                <br></br>

                <Tooltip title="click para agregar fila" aria-label="add">
                  <Fab color="secondary" className={classes.absolute} onClick={addRow}>
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
        <ButtonsModule disable={disable} getConfirmation={getConfirmation} valueButton={"Procesar"}></ButtonsModule>
        {/* End Buttons Module */}
      </Container>
    </div>
  );
}