import React from "react";
import { useParams } from "react-router-dom";
import NavbarModule from '../commonsModule/navbarModule';
import HelpModule from '../commonsModule/helpModule';
import ButtonsModule from '../commonsModule/buttonsModule';
import LoadingModule from '../commonsModule/loadingModule';
import SnackbarModule from '../commonsModule/snackbarModule';
import DialogsModule from '../commonsModule/dialogsModule';

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
const useStyles = makeStyles(() => ({

  root: { flexGrow: 1, borderRadius: 0 },
  pos: { marginBottom: 12, },
  divider: { marginTop: 25, marginBottom: 25 },
  formControl: { width: '95%' },

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
    marginBottom: -1, minHeight: 56,
    "&$expanded": { minHeight: 56 },
  },
  content: {
    "&$expanded": { margin: "12px 0" },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: { padding: theme.spacing(2) },
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
  const saveData = (retry) => {
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

    let commonParams = UtilsService.getCommonParams(operationId, productCode, causeCode, companyCode, documentType, documentNumber, productNumber, origin,
      user, option, contactModeCode, reasonCode, responsibleSector, registerSector, initContact, closeContact, retry ? resultRequest : null);

    let reprintTdParams = _getReprintTdParams(embozo, category, "-", selectedSucursal);

    let transactionalRequest = {}
    transactionalRequest.commonParams = commonParams;
    transactionalRequest.reprintTdParams = reprintTdParams;

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
        })
    }
    callAPI();
  }, [operationId, productNumber, setShowDomicilio, setShowSucursal, setShowExterior]);

  const printScreen = () => {
    let embozo = selectedDestino === 'DOMICILIO' ? domicilioEmbozo.current.outerText : sucursalEmbozo.current.outerText;
    let category = selectedDestino === 'DOMICILIO' ? domicilioCategoria.current.outerText : sucursalCategoria.current.outerText;

    setLoading(true);

    let commonParams = UtilsService.getCommonParams(operationId, productCode, causeCode, companyCode, documentType, documentNumber, productNumber, origin,
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
        <Grid container spacing={3}>
          <Grid item lg={12}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Cliente
                </Typography>
                <br></br>
                <Grid container spacing={3}>
                  <Grid item lg={5}>
                    <Typography variant="caption" display="block" gutterBottom>
                      Apellido y Nombre
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {businessName}
                    </Typography>
                  </Grid>

                  <Grid item lg={2}>
                    <Typography variant="caption" display="block" gutterBottom>
                      Tipo y Nº de Documento
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {documentType} - {documentNumber}
                    </Typography>
                  </Grid>
                  <Grid item lg={2}>
                    <Typography variant="caption" display="block" gutterBottom>
                      Nº Banelco
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {productNumber}
                    </Typography>
                  </Grid>
                  <Grid item lg={2}>
                    <Typography variant="caption" display="block" gutterBottom>
                      Tipo Tarjeta
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      P.TIT.ELECTRON
                    </Typography>
                  </Grid>
                </Grid>

                <Divider variant="middle" className={classes.divider} />

                <Typography variant="h5" component="h2">
                  Destino
                </Typography>
                <br></br>
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
                          <Typography variant="caption" display="block" gutterBottom>
                            Domicilio
                          </Typography>
                          <Typography className={classes.pos} color="textSecondary">

                          </Typography>
                        </Grid>
                        <Grid item lg={2}>
                          <Typography variant="caption" display="block" gutterBottom>
                            Embozo
                          </Typography>
                          {
                            embozos.filter(embozo => embozo.destino === 'Domicilio').map(fEmbozo => (
                              <Typography key="domicilioEmbozo" ref={domicilioEmbozo} className={classes.pos} color="textSecondary">
                                {fEmbozo.embozo}
                              </Typography>))
                          }
                        </Grid>
                        <Grid item lg={2}>
                          <Typography variant="caption" display="block" gutterBottom>
                            Categoría
                          </Typography>
                          {
                            embozos.filter(embozo => embozo.destino === 'Domicilio').map(fEmbozo => (
                              <Typography key="domicilioCategoria" ref={domicilioCategoria} className={classes.pos} color="textSecondary">{fEmbozo.categoria}</Typography>))
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
                        <Grid item lg={2} xs={6}>
                          <Typography variant="caption" display="block" gutterBottom>
                            Sucursal
                          </Typography>
                          <FormControl className={classes.formControl}>
                            <Select onChange={updateSelectedSucursal}>
                              {sucursales.map((sucursal) =>
                                <MenuItem onClick={() => setDisable(false)} value={sucursal.numBranch} label={sucursal.branch}>{sucursal.branch}</MenuItem>)}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item lg={2}>
                          <Typography variant="caption" display="block" gutterBottom>
                            Embozo
                          </Typography>
                          {
                            embozos.filter(embozo => embozo.destino === 'Sucursal').map(fEmbozo => (
                              <Typography key="sucursalEmbozo" ref={sucursalEmbozo} className={classes.pos} color="textSecondary">{fEmbozo.embozo}</Typography>))
                          }
                        </Grid>
                        <Grid item lg={2}>
                          <Typography variant="caption" display="block" gutterBottom>
                            Categoría
                          </Typography>
                          {
                            embozos.filter(embozo => embozo.destino === 'Sucursal').map(fEmbozo => (
                              <Typography key="sucursalCategoria" ref={sucursalCategoria} className={classes.pos} color="textSecondary">{fEmbozo.categoria}</Typography>))
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
                          <Typography variant="caption" display="block" gutterBottom>
                            Exterior
                          </Typography>
                          <Typography className={classes.pos} color="textSecondary">

                          </Typography>
                        </Grid>
                        <Grid item lg={2}>
                          <Typography variant="caption" display="block" gutterBottom>
                            Embozo
                          </Typography>
                          {
                            embozos.filter(embozo => embozo.destino === 'Exterior').map(fEmbozo => (
                              <Typography key="exteriorEmbozo" ref={exteriorEmbozo} className={classes.pos} color="textSecondary">{fEmbozo.embozo}</Typography>))
                          }
                        </Grid>
                        <Grid item lg={2}>
                          <Typography variant="caption" display="block" gutterBottom>
                            Categoría
                          </Typography>
                          {
                            embozos.filter(embozo => embozo.destino === 'Exterior').map(fEmbozo => (
                              <Typography key="exteriorCategoria" ref={exteriorCategoria} className={classes.pos} color="textSecondary">{fEmbozo.categoria}</Typography>))
                          }
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                </div>
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
          secondOpen={secondOpen} setSecondOpen={setSecondOpen}></DialogsModule>
        {/* End Dialog */}

       {/* Start Buttons Module */}
        <ButtonsModule disable={disable} getConfirmation={getConfirmation} valueButton={"Guardar"}></ButtonsModule>
        {/* End Buttons Module */}

      </Container>
    </div>
  );
}