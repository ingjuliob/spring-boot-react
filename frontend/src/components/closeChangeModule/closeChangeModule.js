import React from "react";
import { useParams } from "react-router-dom";
import NavbarModule from '../commonsModule/navbarModule';
import HelpModule from '../commonsModule/helpModule';
import DialogsModule from '../commonsModule/dialogsModule';
import ButtonsModule from '../commonsModule/buttonsModule';
import LoadingModule from '../commonsModule/loadingModule';
import UploadFile from '../commonsModule/uploadFile';
import DocumentalRelation from "../commonsModule/docuRelationModule";

// import css
import { makeStyles } from "@material-ui/core/styles";

// material
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


// services
import BaseService from '../services/baseService';
import CloseChangeService from "../services/closeChangeService";
import UtilsService from "../services/utilsService";

// start css
const useStyles = makeStyles((theme) => ({

  root: { flexGrow: 1, borderRadius: 0 },
  pos: { marginBottom: 12, },
  divider: { marginTop: 25, marginBottom: 25 },
  formControl: { width: '95%' },
  formControl2: { margin: theme.spacing(1), minWidth: 120 },
  selectEmpty: { marginTop: theme.spacing(2) },

}));
const tabla = makeStyles(() => ({
  table: {
    minWidth: 650,
  },
}));
// end css

export default function CloseChangeFunc() {

  // Entry params
  let { operationId, option, documentType, documentNumber, businessName, contactModeCode, productCode, causeCode,
    reasonCode, companyCode, responsibleSector, registerSector, user, origin,
    initContact, closeContact, productNumber } = useParams();

  // State variables
  const [disable, setDisable] = React.useState(true);
  const [firstOpen, setFirstOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);
  const [resultRequest, setResultRequest] = React.useState("");
  const [resultStatus, setResultStatus] = React.useState("");
  const [resultMsg, setResultMsg] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [cartera, setCartera] = React.useState("");
  const [rows, setRows] = React.useState([]);
  // Inicio Add Files (Agregar en todas las funcionalidades)
  const [isAddFiles, setIsAddFiles] = React.useState(false);
  const [clientRelations, setClientRelations] = React.useState([]);
  const [productRelations, setProductRelations] = React.useState([]);
  // Fin Add Files (Agregar en todas las funcionalidades)

  // Style variables
  const classes = useStyles();
  const classTable = tabla();

  // Funcion para guardar la registracion generada
  const saveData = async (retry) => {
    setFirstOpen(false);
    setDisable(true);
    setLoading(true);

    let commonParams = UtilsService.getCommonParams(operationId, productCode, causeCode, companyCode, documentType, documentNumber, businessName, productNumber, origin,
      user, option, contactModeCode, reasonCode, responsibleSector, registerSector, initContact, closeContact, retry ? resultRequest : null);

    let closeChangeParams = _getCloseChangeParams(rows[0]);

    let transactionalRequest = {}
    // Inicio Add Files (Agregar en todas las funcionalidades)
    if (isAddFiles) {
      commonParams.relTipoDocumentalCliente = clientRelations;
      commonParams.relTipoDocumentalProducto = productRelations;
      let productFiles = productRelations.filter(relation => relation.esAddFiles === true);
      commonParams.adjuntarArchivos = productFiles.length > 0;
    }
    // Fin Add Files (Agregar en todas las funcionalidades)
    transactionalRequest.commonParams = commonParams;
    transactionalRequest.closeChangeParams = closeChangeParams;

    // Inicio Add Files (Agregar en todas las funcionalidades)
    if (isAddFiles) {
      let data = await BaseService.saveDataWithFiles(transactionalRequest);
      let pedido = data.registration.requestNumber;
      let mensaje = data.registration.message;
      let estado = data.registration.status;
      setSecondOpen(true);
      setResultRequest(pedido);
      setResultStatus(estado);
      setResultMsg(mensaje);
      setLoading(false);
    } else {
      BaseService.saveData(transactionalRequest)
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
    // Fin Add Files (Agregar en todas las funcionalidades)
  }

  const getConfirmation = () => {
    setFirstOpen(true);
  }

  React.useEffect(() => {
    async function callAPI() {
      CloseChangeService.getTarjetas(operationId, documentType, documentNumber, productCode, productNumber)
        .then(data => {
          setRows(data.cardAccArr);
          setLoading(false);
        })
    }
    callAPI();
  }, [operationId, documentType, documentNumber]);

  const printData = () => {
    setLoading(true);

    let commonParams = UtilsService.getCommonParams(operationId, productCode, causeCode, companyCode, documentType, documentNumber, businessName, productNumber, origin,
      user, option, contactModeCode, reasonCode, responsibleSector, registerSector, initContact, closeContact, resultRequest);

    let closeChangeParams = _getCloseChangeParams(rows[0]);

    let transactionalRequest = {}
    transactionalRequest.commonParams = commonParams;
    transactionalRequest.closeChangeParams = closeChangeParams;

    BaseService.printData(transactionalRequest)
      .then(data => {
        setLoading(false);
      });
  };

  const _getCloseChangeParams = (row) => {
    let closeChangeParams = {};
    closeChangeParams.tipoCliente = row.tipo;
    closeChangeParams.apellidoNombre = row.nombres;
    closeChangeParams.nroTarjeta = row.numero;
    closeChangeParams.estado = row.estado;
    closeChangeParams.cartera = cartera;
    closeChangeParams.entityAdm = row.bancoOrigen;
    closeChangeParams.codeAdm = row.codigoAdmin;
    return closeChangeParams;
  }

  const handleChange = (event, data) => {
    if (rows.length > 0) {
      setDisable(false);
    }
    setCartera(data.props.value);
  };

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
                <Typography variant="h5" component="h2">
                  Cliente
                </Typography>
                <br></br>
                <Grid container spacing={6}>
                  <Grid item lg={4}>
                    <Typography variant="caption" display="block" gutterBottom>
                      Titular
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
                </Grid>

                <Divider variant="middle" className={classes.divider} />

                { rows.length > 0 ?
                <>
                <Grid container spacing={5}>
                  <TableContainer>
                    <Table className={classTable.table} size="small" aria-label="customized tablee">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left"><strong>Tipo</strong></TableCell>
                          <TableCell align="left"><strong>Documento</strong></TableCell>
                          <TableCell align="left"><strong>Apellido y Nombre</strong></TableCell>
                          <TableCell align="left"><strong>Número de Tarjeta</strong></TableCell>
                          <TableCell align="left"><strong>Estado</strong></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) =>
                          <TableRow key={row.numero}>
                            <TableCell component="th" scope="row">{row.tipo}</TableCell>
                            <TableCell align="left">{row.tipoDocumento} {row.numeroDocumento}</TableCell>
                            <TableCell align="left">{row.nombres}</TableCell>
                            <TableCell align="left">{row.numero}</TableCell>
                            <TableCell align="left">{row.estado}</TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>

                <Divider variant="middle" className={classes.divider} />

                <Grid container spacing={6}>
                  <Grid item lg={2} xs={6}>
                    <Typography variant="caption" display="block" gutterBottom>
                      <strong>Seleccione Cartera</strong>
                    </Typography>
                    <FormControl className={classes.formControl}>
                      <Select onChange={handleChange} value={cartera}>
                        <MenuItem value={"01"}>Cartera 1</MenuItem>
                        <MenuItem value={"02"}>Cartera 2</MenuItem>
                        <MenuItem value={"03"}>Cartera 3</MenuItem>
                        <MenuItem value={"04"}>Cartera 4</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                </>
                : <div><b>No se encontraron tarjetas operativas para el producto.</b></div> }
                <br></br>
                <br></br>
                <HelpModule />
                <br></br>
                {/* Inicio Add Files (Agregar en todas las funcionalidades) */}
                <DocumentalRelation isAddFiles={isAddFiles} setIsAddFiles={setIsAddFiles} setClientRelations={setClientRelations} setProductRelations={setProductRelations} />
                {isAddFiles ?
                  <UploadFile clientRelations={clientRelations} productRelations={productRelations}></UploadFile>
                  : <div></div>}
                {/* Fin Add Files (Agregar en todas las funcionalidades) */}
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