import React from "react";
import { useParams } from "react-router-dom";
import NavbarModule from '../commonsModule/navbarModule';
import HelpModule from '../commonsModule/helpModule';
import DialogsModule from '../commonsModule/dialogsModule';
import ButtonsModule from '../commonsModule/buttonsModule';
import LoadingModule from '../commonsModule/loadingModule';
import UploadFile from '../commonsModule/uploadFile';
import DocumentalRelation from "../commonsModule/docuRelationModule";
import line from '../../img/vertical-line.svg';

// import css
import { makeStyles, withStyles } from "@material-ui/core/styles";

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
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';

// services
import BaseService from '../services/baseService';
import CloseChangeService from "../services/closeChangeService";
import UtilsService from "../services/utilsService";

// start css
const useStyles = makeStyles((theme) => ({

  root: { flexGrow: 1, borderRadius: 0 },
  line: { width: 6, paddingRight: 15, height: 16 },
  divider: { marginTop: 10, marginBottom: 10 },
  paddingLine: { padding: '0 16px', marginBottom: 5 },
  spaceText: { paddingLeft: theme.spacing(2) },
  gutterBottom: { marginBottom: 0 },
  formControl: { width: '95%' },
  formControl2: { margin: theme.spacing(1), minWidth: 120 },
  selectEmpty: { marginTop: theme.spacing(2) },

}));

const StyledTableCell = withStyles((theme) => ({

  head: { backgroundColor: '#ededed', color: theme.palette.common.black, fontWeight: 'bold', paddingBottom: 6, paddingTop: 6 },
  body: { fontSize: 14, paddingBottom: 5, paddingTop: 5 }

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({

  root: {
    '&:nth-of-type(odd)': {
      // backgroundColor: theme.palette.action.hover,
    },
  },

}))(TableRow);
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
  const [productDescription, setProductDescription] = React.useState("");
  // Inicio Add Files (Agregar en todas las funcionalidades)
  const [isAddFiles, setIsAddFiles] = React.useState(false);
  const [clientRelations, setClientRelations] = React.useState([]);
  const [productRelations, setProductRelations] = React.useState([]);
  // Fin Add Files (Agregar en todas las funcionalidades)
  const [carteraA, setCarteraA] = React.useState("");
  const [carteraB, setCarteraB] = React.useState("");
  const [carteraC, setCarteraC] = React.useState("");
  const [carteraD, setCarteraD] = React.useState("");


  // Style variables
  const classes = useStyles();

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
      if (productCode === '7') {
        setCarteraA("11");
        setCarteraB("12");
        setCarteraC("13");
        setCarteraD("14");
      } else {
        setCarteraA("01");
        setCarteraB("02");
        setCarteraC("03");
        setCarteraD("04");
      }
      console.log('[' + productCode + ']')
      if (productCode === '6') {
        setProductDescription('TC - Visa');
      } else if (productCode === 'V') {
        setProductDescription('TC - Visa HEX');
      } else if (productCode === '7') {
        setProductDescription('TC - Mastercard');
      } else if (productCode === 'E') {
        setProductDescription('TC - American Express');
      } else if (productCode === 'M') {
        setProductDescription('TC - Mastercard HEX');
      } else if (productCode === '9') {
        setProductDescription('TC - ArgenCard');
      } else if (productCode === 'L') {
        setProductDescription('TC - Lider');
      }
      CloseChangeService.getTarjetas(operationId, documentType, documentNumber, productCode, productNumber)
        .then(data => {
          setRows(data.cards);
          setLoading(false);
        })
    }
    callAPI();
  }, [operationId, documentType, documentNumber, productCode, productNumber]);

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
    closeChangeParams.entityAdm = _getEntAdm();
    closeChangeParams.codeAdm = _getAdmCode();
    return closeChangeParams;
  }

  const _getAdmCode = () => {
    if (productCode === '6') {
      return "150";
    } else if (productCode === 'V') {
      return "265";
    } else if (productCode === '7') {
      return "031";
    } else if (productCode === 'E') {
      return "650";
    } else if (productCode === 'M') {
      return "650";
    } else {
      return "0";
    }
  }

  const _getEntAdm = () => {
    if (productCode === '6') {
      return "VISA";
    } else if (productCode === 'V') {
      return "VISA HEX";
    } else if (productCode === '7') {
      return "MASTER";
    } else if (productCode === 'E') {
      return "AMEX";
    } else if (productCode === 'M') {
      return "MASTER";
    } else {
      return "";
    }
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
                <Typography variant="h6" component="h2" className={classes.paddingLine}>
                  <img src={line} className={classes.line} alt="logo" />
                  Cliente
                </Typography>

                <Grid container spacing={6} className={classes.spaceText}>
                  <Grid item lg={4}>
                    <Typography variant="caption" display="block" gutterBottom className={classes.gutterBottom}>
                      Titular
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {businessName}
                    </Typography>
                  </Grid>

                  <Grid item lg={4}>
                    <Typography variant="caption" display="block" gutterBottom className={classes.gutterBottom}>
                      Tipo y Nº de Documento
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {documentType} - {documentNumber}
                    </Typography>
                  </Grid>
                </Grid>

                <Divider variant="middle" className={classes.divider} />

                <Typography variant="h6" component="h2" className={classes.paddingLine}>
                  <img src={line} className={classes.line} alt="logo" />
                  Lista de tarjetas - Producto: {productDescription}: {productNumber}
                </Typography>

                {rows && rows.length > 0 ?
                  <>
                    {/* start table data */}
                    <TableContainer component={Paper}>
                      <Table aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>Tipo</StyledTableCell>
                            <StyledTableCell>Tipo Doc.</StyledTableCell>
                            <StyledTableCell>Nº Doc.</StyledTableCell>
                            <StyledTableCell>Apellido y Nombre</StyledTableCell>
                            <StyledTableCell>Número de Tarjeta</StyledTableCell>
                            <StyledTableCell>Estado</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) =>
                            <StyledTableRow key={row.numero}>
                              <StyledTableCell>{row.tipo}</StyledTableCell>
                              <StyledTableCell>{row.tipoDocumento}</StyledTableCell>
                              <StyledTableCell>{row.numeroDocumento}</StyledTableCell>
                              <StyledTableCell>{row.nombres}</StyledTableCell>
                              <StyledTableCell>{row.numero}</StyledTableCell>
                              <StyledTableCell>{row.estado}</StyledTableCell>
                            </StyledTableRow>
                          )}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    {/* end table data */}

                    <div className={classes.spaceText}>
                      <FormControl className={classes.formControl} >
                        <InputLabel id="demo-simple-select-label">Seleccione Cartera</InputLabel>
                        <Select style={{ maxWidth: '200px', minWidth: '120px' }} value={cartera} onChange={handleChange}>
                          <MenuItem value={carteraA}>Cartera {carteraA}</MenuItem>
                          <MenuItem value={carteraB}>Cartera {carteraB}</MenuItem>
                          <MenuItem value={carteraC}>Cartera {carteraC}</MenuItem>
                          <MenuItem value={carteraD}>Cartera {carteraD}</MenuItem>
                        </Select>
                        <br></br>
                      </FormControl>
                    </div>
                  </>
                  : <div><b>No se encontraron tarjetas operativas para el producto.</b></div>}
                {/* Inicio Add Files (Agregar en todas las funcionalidades) */}
                <DocumentalRelation isAddFiles={isAddFiles} setIsAddFiles={setIsAddFiles} setClientRelations={setClientRelations} setProductRelations={setProductRelations} />
                {isAddFiles ?
                  <UploadFile clientRelations={clientRelations} productRelations={productRelations}></UploadFile>
                  : <div></div>}
                {/* Fin Add Files (Agregar en todas las funcionalidades) */}
                <br></br>
                <HelpModule />
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