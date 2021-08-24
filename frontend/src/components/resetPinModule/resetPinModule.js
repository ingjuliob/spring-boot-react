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
import { makeStyles } from "@material-ui/core/styles";

// material
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

// services
import BaseService from '../services/baseService';
import UtilsService from "../services/utilsService";

// start css
const useStyles = makeStyles((theme) => ({

  root: { flexGrow: 1, borderRadius: 0 },
  line: { width: 6, paddingRight: 15, height: 16 },
  divider: { marginTop: 10, marginBottom: 10 },
  formControl: { width: '95%' },
  paddingLine: { padding: '0 16px', marginBottom: 5 },
  spaceText: { paddingLeft: theme.spacing(2) },
  gutterBottom: { marginBottom: 0 }

}));
// end css

export default function DischargeFunc() {

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
  const [resultAddFiles, setResultAddFiles] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  // Inicio Add Files (Agregar en todas las funcionalidades)
  const [isAddFiles, setIsAddFiles] = React.useState(false);
  const [clientRelations, setClientRelations] = React.useState([]);
  const [productRelations, setProductRelations] = React.useState([]);
  // Fin Add Files (Agregar en todas las funcionalidades)

  // Style variables
  const classes = useStyles();

  // Funcion para guardar la registracion generada
  const saveData = async (retry) => {
    setFirstOpen(false);
    setDisable(true);
    setLoading(true);

    let commonParams = UtilsService.getCommonParams(operationId, productCode, causeCode, companyCode, documentType, documentNumber, businessName, productNumber, origin,
      user, option, contactModeCode, reasonCode, responsibleSector, registerSector, initContact, closeContact, retry ? resultRequest : null);

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

    // Inicio Add Files (Agregar en todas las funcionalidades)
    if (isAddFiles) {
      let data = await BaseService.saveDataWithFiles(transactionalRequest);
      let pedido = data.registration.requestNumber;
      let mensaje = data.registration.message;
      let mensajeAddFiles = data.registration.messageAddFiles;
      let estado = data.registration.status;
      setSecondOpen(true);
      setResultRequest(pedido);
      setResultStatus(estado);
      setResultMsg(mensaje);
      setResultAddFiles(mensajeAddFiles);
      setLoading(false);
    } else {
      BaseService.saveData(transactionalRequest)
        .then(data => {
          let pedido = data.registration.requestNumber;
          let mensaje = data.registration.message;
          let mensajeAddFiles = data.registration.messageAddFiles;
          let estado = data.registration.status;
          setSecondOpen(true);
          setResultRequest(pedido);
          setResultStatus(estado);
          setResultMsg(mensaje);
          setResultAddFiles(mensajeAddFiles);
          setLoading(false);
        });
    }
    // Fin Add Files (Agregar en todas las funcionalidades)
  }

  const getConfirmation = () => {
    setFirstOpen(true);
  }

  const printData = () => {
    setLoading(true);

    let commonParams = UtilsService.getCommonParams(operationId, productCode, causeCode, companyCode, documentType, documentNumber, businessName, productNumber, origin,
      user, option, contactModeCode, reasonCode, responsibleSector, registerSector, initContact, closeContact, resultRequest);

    let transactionalRequest = {}
    transactionalRequest.commonParams = commonParams;

    BaseService.printData(transactionalRequest)
      .then(data => {
        console.log(data);
        setLoading(false);
      });
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
                      Apellido y Nombre
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

                <Grid container spacing={6} className={classes.spaceText}>
                  <Grid item lg={4}>
                    <Typography variant="caption" display="block" gutterBottom className={classes.gutterBottom}>
                      Nº Banelco
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {productNumber}
                    </Typography>
                  </Grid>
                  <Grid item lg={4}>
                    <Typography variant="caption" display="block" gutterBottom className={classes.gutterBottom}>
                      Tipo Tarjeta
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      P.TIT.ELECTRON
                    </Typography>
                  </Grid>
                </Grid>
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
          resultMsg={resultMsg} resultAddFiles={resultAddFiles} firstOpen={firstOpen} setFirstOpen={setFirstOpen} printScreen={printData}
          secondOpen={secondOpen} setSecondOpen={setSecondOpen}></DialogsModule>
        {/* End Dialog */}

        {/* Start Buttons Module */}
        <ButtonsModule disable={disable} getConfirmation={getConfirmation} valueButton={"Blanquear PIN"}></ButtonsModule>
        {/* End Buttons Module */}
      </Container>
    </div>
  );
}