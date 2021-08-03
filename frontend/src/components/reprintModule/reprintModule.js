import React from "react";
import { useParams } from "react-router-dom";
import NavbarModule from '../commonsModule/navbarModule';
import HelpModule from '../commonsModule/helpModule';
import ButtonsModule from '../commonsModule/buttonsModule';
import LoadingModule from '../commonsModule/loadingModule';
import SnackbarModule from '../commonsModule/snackbarModule';
import DialogsModule from '../commonsModule/dialogsModule';
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
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// services
import BaseService from '../services/baseService';
import UtilsService from "../services/utilsService";
import ReprintService from '../services/reprintService';

// start css
const useStyles = makeStyles((theme) => ({

  root: { flexGrow: 1, borderRadius: 0 },
  line: { width: 6, paddingRight: 15, height: 16 },
  divider: { marginTop: 10, marginBottom: 10 },
  formControl: { width: '95%' },
  paddingLine: { padding: '0 16px', marginBottom: 5 },
  fontSmall: { fontSize: '0.6rem', margin: 0, fontWeight: 'bold' },
  paddingLeft: { paddingLeft: 10, marginLeft: 10, borderLeft: '1px solid lightgrey' },
  flex: { display: 'flex', alignItems: 'center' },
  spaceText: { paddingLeft: theme.spacing(2) },
  gutterBottom: { marginBottom: 0 }

}));

const Accordion = withStyles({
  root: {
    boxShadow: "none",
    "&:not(:last-child)": { borderBottom: 0 },
    "&:before": { display: "none" },
    "&$expanded": { margin: "auto" },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    marginBottom: -1, minHeight: 40,
    "&$expanded": { minHeight: 40 },
  },
  content: {
    margin: 0,
    "&$expanded": { margin: 0 },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: { paddingTop: theme.spacing(0), paddingLeft: theme.spacing(2) },
}))(MuiAccordionDetails);
// end css

export default function ReprintFunc() {

  // Entry params
  let { operationId, option, documentType, documentNumber, businessName, contactModeCode, productCode, causeCode,
    reasonCode, companyCode, responsibleSector, registerSector, user, origin,
    initContact, closeContact, productNumber } = useParams();

  // State variables
  const [embozos, setEmbozos] = React.useState([]);
  const [sucursales, setSucursales] = React.useState([]);
  const [disable, setDisable] = React.useState(true);
  const [value, setValue] = React.useState("");
  const [expanded, setExpanded] = React.useState("");
  const [selectedDestino, setSelectedDestino] = React.useState('');
  const [selectedSucursal, setSelectedSucursal] = React.useState('');
  const [firstOpen, setFirstOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);
  const [openUploadFiles, setOpenUploadFiles] = React.useState(false);
  const [resultRequest, setResultRequest] = React.useState("");
  const [resultStatus, setResultStatus] = React.useState("");
  const [resultMsg, setResultMsg] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [showDomicilio, setShowDomicilio] = React.useState(false);
  const [showSucursal, setShowSucursal] = React.useState(false);
  const [showExterior, setShowExterior] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [severity, setSeverity] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [nombreEmbozo, setNombreEmbozo] = React.useState('');
  const [codigoEmbozo, setCodigoEmbozo] = React.useState('');
  // Inicio Add Files (Agregar en todas las funcionalidades)
  const [isAddFiles, setIsAddFiles] = React.useState(false);
  const [clientRelations, setClientRelations] = React.useState([]);
  const [productRelations, setProductRelations] = React.useState([]);
  // Fin Add Files (Agregar en todas las funcionalidades)

  // Ref variables
  let domicilioEmbozo = React.useRef(null);
  let domicilioCategoria = React.useRef(null);
  let sucursalEmbozo = React.useRef(null);
  let sucursalCategoria = React.useRef(null);
  let exteriorEmbozo = React.useRef(null);
  let exteriorCategoria = React.useRef(null);

  // Style variables
  const classes = useStyles();

  // Get branches info
  const updateBranches = () => {
    ReprintService.getBranchDetails(operationId)
      .then(dataSucursales => {
        setSucursales(dataSucursales.branches);
        setLoading(false);
      })
  }

  // Handle onchange event (Sucursal)
  const updateSelectedSucursal = (event, data) => {
    setSelectedSucursal(data.props.label + " (" + data.props.value + ")");
  }

  // Handle onchange event (Paneles)
  const handleChange = (panel) => (event, newExpanded) => {
    if (panel === 'panelSucursal') { // Panel de Sucursal
      setLoading(true);
      updateBranches();
      setSelectedDestino('SUCURSAL');
      setDisable(true);
    } else { // Panel de Domicilio
      setSelectedSucursal("-");
      setSelectedDestino(panel === 'panelDomicilio' ? 'DOMICILIO' : 'EXTERIOR');
    }
    setExpanded(newExpanded ? panel : false);
    setValue(event.target.value);
  };

  // Funcion para guardar la registracion generada
  const saveData = async (retry) => {

    setFirstOpen(false);

    let embozo = selectedDestino === 'DOMICILIO' ? domicilioEmbozo.current.outerText : sucursalEmbozo.current.outerText;
    let category = selectedDestino === 'DOMICILIO' ? domicilioCategoria.current.outerText : sucursalCategoria.current.outerText;

    if (embozo === 'SIN DATOS') {
      setSeverity("error")
      setMessage("EMBOZO SIN VALOR")
      setOpenSnackbar(true)
      return
    }

    if (category === 'SIN DATOS') {
      setSeverity("error")
      setMessage("CATEGORÍA SIN VALOR")
      setOpenSnackbar(true)
      return
    }

    setDisable(true);
    setLoading(true);

    let commonParams = UtilsService.getCommonParams(operationId, productCode, causeCode, companyCode, documentType, documentNumber, businessName, productNumber, origin,
      user, option, contactModeCode, reasonCode, responsibleSector, registerSector, initContact, closeContact, retry ? resultRequest : null);

    // Inicio Add Files (Agregar en todas las funcionalidades)
    if (isAddFiles) {
      commonParams.relTipoDocumentalCliente = clientRelations;
      commonParams.relTipoDocumentalProducto = productRelations;
      let productFiles = productRelations.filter(relation => relation.esAddFiles === true);
      commonParams.adjuntarArchivos = productFiles.length > 0;
    }
    // Fin Add Files (Agregar en todas las funcionalidades)

    let reprintTdParams = _getReprintTdParams(embozo, category, "-", selectedSucursal);

    let transactionalRequest = {}
    transactionalRequest.commonParams = commonParams;
    transactionalRequest.reprintTdParams = reprintTdParams;

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

  // Funcion hook para consultar los detalles de la tarjeta y los embozos
  React.useEffect(() => {
    async function callAPI() {
      ReprintService.getCardDetails(operationId, productNumber)
        .then(data => {
          ReprintService.getEmbozos(operationId, data.detalleTarjeta.reprint)
            .then(dataEmbozos => {
              setEmbozos(dataEmbozos.embozos);
              setLoading(false);
              dataEmbozos.embozos.map(embozo => {
                if (embozo.destino === 'Domicilio') {
                  setShowDomicilio(true);
                }
                if (embozo.destino === 'Sucursal') {
                  setShowSucursal(true);
                }
                if (embozo.destino === 'Exterior') {
                  setShowExterior(true);
                }
              })
            });
          setCodigoEmbozo(data.detalleTarjeta.reprint);
          setNombreEmbozo(data.message);
        })
    }
    callAPI();
  }, [operationId, productNumber, setShowDomicilio, setShowSucursal, setShowExterior]);

  const printScreen = () => {
    let embozo = selectedDestino === 'DOMICILIO' ? domicilioEmbozo.current.outerText : sucursalEmbozo.current.outerText;
    let category = selectedDestino === 'DOMICILIO' ? domicilioCategoria.current.outerText : sucursalCategoria.current.outerText;

    setLoading(true);

    let commonParams = UtilsService.getCommonParams(operationId, productCode, causeCode, companyCode, documentType, documentNumber, businessName, productNumber, origin,
      user, option, contactModeCode, reasonCode, responsibleSector, registerSector, initContact, closeContact, resultRequest);

    let reprintTdParams = _getReprintTdParams(embozo, category, "-", selectedSucursal);

    let transactionalRequest = {}
    transactionalRequest.commonParams = commonParams;
    transactionalRequest.reprintTdParams = reprintTdParams;

    BaseService.printData(transactionalRequest)
      .then(data => {
        setLoading(false);
      });
  };

  const _getReprintTdParams = (embozo, category, domicilio, sucursal) => {

    let reprintTdParams = {};
    reprintTdParams.embozo = embozo;
    reprintTdParams.category = category;
    reprintTdParams.domicilio = domicilio;
    reprintTdParams.sucursal = sucursal;
    return reprintTdParams;

  };

  return (
    <div className={classes.root}>
      {/* start navbar */}
      <NavbarModule></NavbarModule>
      {/* end navbar */}

      {/* start snackbar */}
      <SnackbarModule openSnackbar={openSnackbar} severity={severity} message={message} setOpenSnackbar={setOpenSnackbar}></SnackbarModule>
      {/* end snackbar */}

      <Container maxWidth="lg">
        <Grid container>
          <Grid item lg={12} style={{ width: '100%' }}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h6" component="h2" className={classes.paddingLine}>
                  <img src={line} className={classes.line} alt="logo" />
                  Cliente
                </Typography>

                <Grid container spacing={3} className={classes.spaceText}>
                  <Grid item lg={4}>
                    <Typography variant="caption" display="block" gutterBottom className={classes.gutterBottom}>
                      Apellido y Nombre
                    </Typography>
                    <Typography color="textSecondary">
                      {businessName}
                    </Typography>
                  </Grid>

                  <Grid item lg={2}>
                    <Typography variant="caption" display="block" gutterBottom className={classes.gutterBottom}>
                      Tipo y Nº de Documento
                    </Typography>
                    <Typography color="textSecondary">
                      {documentType} - {documentNumber}
                    </Typography>
                  </Grid>
                  <Grid item lg={2}>
                    <Typography variant="caption" display="block" gutterBottom className={classes.gutterBottom}>
                      Nº Banelco
                    </Typography>
                    <Typography color="textSecondary">
                      {productNumber}
                    </Typography>
                  </Grid>
                  <Grid item lg={4}>
                    <Typography variant="caption" display="block" gutterBottom className={classes.gutterBottom}>
                      Tipo Tarjeta
                    </Typography>
                    <Typography color="textSecondary" className={classes.flex}>
                      P.TIT.ELECTRON
                      <div className={classes.paddingLeft}>
                        <Typography className={classes.fontSmall}>{codigoEmbozo}</Typography>
                        <Typography className={classes.fontSmall}>{nombreEmbozo}</Typography>
                      </div>
                    </Typography>
                  </Grid>
                </Grid>

                <Divider variant="middle" className={classes.divider} />

                <Typography variant="h6" component="h2" className={classes.paddingLine}>
                  <img src={line} className={classes.line} alt="logo" />
                  Destino
                </Typography>

                <div>
                  <Accordion square expanded={expanded === "panelDomicilio"} key='acc-domicilio' style={{ display: showDomicilio ? 'inherit' : 'none' }}>
                    <AccordionSummary aria-controls="panelDomiciliod-content" id="panelDomiciliod-header">
                      <FormControl component="fieldset">
                        <RadioGroup aria-label="destino" name="domicilio" value={value} onChange={handleChange("panelDomicilio")}
                          onClick={() => setDisable(false)}>
                          <FormControlLabel value="panelDomicilio" control={<Radio />} label="Domicilio" />
                        </RadioGroup>
                      </FormControl>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={3}>
                        <Grid item lg={2}>
                          <Typography variant="caption" display="block" gutterBottom className={classes.gutterBottom}>
                            Domicilio
                          </Typography>
                          <Typography color="textSecondary">

                          </Typography>
                        </Grid>
                        <Grid item lg={2}>
                          <Typography variant="caption" display="block" gutterBottom className={classes.gutterBottom}>
                            Embozo
                          </Typography>
                          {
                            embozos.filter(embozo => embozo.destino === 'Domicilio').map(fEmbozo => (
                              <Typography key="domicilioEmbozo" ref={domicilioEmbozo} color="textSecondary">
                                {fEmbozo.embozo}
                              </Typography>))
                          }
                        </Grid>
                        <Grid item lg={2}>
                          <Typography variant="caption" display="block" gutterBottom className={classes.gutterBottom}>
                            Categoría
                          </Typography>
                          {
                            embozos.filter(embozo => embozo.destino === 'Domicilio').map(fEmbozo => (
                              <Typography key="domicilioCategoria" ref={domicilioCategoria} color="textSecondary">{fEmbozo.categoria}</Typography>))
                          }
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion square expanded={expanded === "panelSucursal"} key='acc-sucursal' style={{ display: showSucursal ? 'inherit' : 'none' }}>
                    <AccordionSummary aria-controls="panelSucursald-content" id="panelSucursald-header">
                      <FormControl component="fieldset">
                        <RadioGroup aria-label="destino" name="sucursal" value={value} onChange={handleChange("panelSucursal")}>
                          <FormControlLabel value="panelSucursal" control={<Radio />} label="Sucursal" />
                        </RadioGroup>
                      </FormControl>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={3}>
                        <Grid item lg={3}>
                          <Typography variant="caption" display="block" gutterBottom className={classes.gutterBottom}>
                            Sucursal
                          </Typography>
                          <FormControl className={classes.formControl}>
                            <Select onChange={updateSelectedSucursal} style={{ maxWidth: '250px', minWidth: '150px' }} >
                              {sucursales.map((sucursal) =>
                                <MenuItem onClick={() => setDisable(false)} value={sucursal.numBranch} label={sucursal.branch}>{sucursal.branch}</MenuItem>)}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item lg={2}>
                          <Typography variant="caption" display="block" gutterBottom className={classes.gutterBottom}>
                            Embozo
                          </Typography>
                          {
                            embozos.filter(embozo => embozo.destino === 'Sucursal').map(fEmbozo => (
                              <Typography key="sucursalEmbozo" ref={sucursalEmbozo} color="textSecondary">{fEmbozo.embozo}</Typography>))
                          }
                        </Grid>
                        <Grid item lg={2}>
                          <Typography variant="caption" display="block" gutterBottom className={classes.gutterBottom}>
                            Categoría
                          </Typography>
                          {
                            embozos.filter(embozo => embozo.destino === 'Sucursal').map(fEmbozo => (
                              <Typography key="sucursalCategoria" ref={sucursalCategoria} color="textSecondary">{fEmbozo.categoria}</Typography>))
                          }
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion square expanded={expanded === "panelExterior"} key='acc-exterior' style={{ display: showExterior ? 'inherit' : 'none' }}>
                    <AccordionSummary aria-controls="panelExteriord-content" id="panelExteriord-header">
                      <FormControl component="fieldset">
                        <RadioGroup aria-label="destino" name="exterior" value={value} onChange={handleChange("panelExterior")}
                          onClick={() => setDisable(false)}>
                          <FormControlLabel value="panelExterior" control={<Radio />} label="Exterior" />
                        </RadioGroup>
                      </FormControl>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container spacing={3}>
                        <Grid item lg={2}>
                          <Typography variant="caption" display="block" gutterBottom className={classes.gutterBottom}>
                            Exterior
                          </Typography>
                          <Typography color="textSecondary">

                          </Typography>
                        </Grid>
                        <Grid item lg={2}>
                          <Typography variant="caption" display="block" gutterBottom className={classes.gutterBottom}>
                            Embozo
                          </Typography>
                          {
                            embozos.filter(embozo => embozo.destino === 'Exterior').map(fEmbozo => (
                              <Typography key="exteriorEmbozo" ref={exteriorEmbozo} color="textSecondary">{fEmbozo.embozo}</Typography>))
                          }
                        </Grid>
                        <Grid item lg={2}>
                          <Typography variant="caption" display="block" gutterBottom className={classes.gutterBottom}>
                            Categoría
                          </Typography>
                          {
                            embozos.filter(embozo => embozo.destino === 'Exterior').map(fEmbozo => (
                              <Typography key="exteriorCategoria" ref={exteriorCategoria} color="textSecondary">{fEmbozo.categoria}</Typography>))
                          }
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <br></br>
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
          resultMsg={resultMsg} firstOpen={firstOpen} setFirstOpen={setFirstOpen} printScreen={printScreen}
          secondOpen={secondOpen} setSecondOpen={setSecondOpen} openUploadFiles={openUploadFiles}
          setOpenUploadFiles={setOpenUploadFiles}></DialogsModule>
        {/* End Dialog */}

        {/* Start Buttons Module */}
        <ButtonsModule disable={disable} getConfirmation={getConfirmation} valueButton={"Procesar"}></ButtonsModule>
        {/* End Buttons Module */}

      </Container>
    </div>
  );
}