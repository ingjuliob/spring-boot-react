import UtilsService from "./utilsService";

const BaseService = {

    getHelp(operationId, productCode, causeCode, reasonCode, companyCode) {
        return UtilsService._call_get(UtilsService.URL() + '/transaccional/parametros/ayuda?operationId=' + operationId + '&productCode=' + productCode + '&causeCode=' + causeCode + '&reasonCode=' + reasonCode + '&companyCode=' + companyCode);
    },

    getDocumentalRelations(operationId, causeCode, reasonCode, documentType, documentNumber) {
        return UtilsService._call_get(UtilsService.URL() + '/transaccional/parametros/relacionesTipoDocumental?operationId=' + operationId + '&causeCode=' + causeCode + '&reasonCode=' + reasonCode + '&documentType=' + documentType + '&documentNumber=' + documentNumber);
    },

    saveData(transactionalRequest) {
        return UtilsService._call_post(UtilsService.URL() + '/transaccional/grabar', transactionalRequest);
    },

    async saveDataWithFiles(transactionalRequest) {
        var relaciones = transactionalRequest.commonParams.relTipoDocumentalProducto;
        transactionalRequest.commonParams.observation = '';
        if (transactionalRequest.commonParams.adjuntarArchivos) {
            console.log("Pido numero de registracion")
            let registationResp = await this.generateRegistrationNumber(transactionalRequest.commonParams.operationId,
                transactionalRequest.commonParams.companyCode, transactionalRequest.commonParams.causeCode);
            transactionalRequest.commonParams.requestNumber = registationResp.message;
            console.log("Listo numero de registracion: " + registationResp.message)
            console.log(registationResp);
            var resumen = '\n\n------------------------------------------------------------\n\nDocumentos adjuntos en la carga de SAC:\n\n';
            for (const relacion of relaciones) {
                if (relacion.files) {
                    let response = await this.uploadFile(transactionalRequest, relacion);
                    resumen = resumen + response;
                }
                console.log("Observaciones:")
                console.log(resumen);
            }
            transactionalRequest.commonParams.observation = resumen;
        }
        return UtilsService._call_post(UtilsService.URL() + '/transaccional/grabar', transactionalRequest);
    },

    async printData(transactionalRequest) {
        let response = await UtilsService._call_get(UtilsService.URL() + '/transaccional/imprimir?operationId=' + transactionalRequest.commonParams.operationId
            + '&requestNumber=' + transactionalRequest.commonParams.requestNumber + '&opcion=' + transactionalRequest.commonParams.option
            + '&name=' + transactionalRequest.commonParams.businessName);
        console.log(response);
        if (response.print.url) {
            console.log("Abre: " + response.print.url);
            var myWindow = window.open(response.print.url + '/log/Transfer/openPdfFile?filename='
                + response.print.filename + '&fileExtension=' + response.print.fileExtension + '&indPath=' + response.print.path
                + '&adicional=XXX', response.print.filename, "addressbar=0,toolbars=0,menubar=0,location=0,scrollbars=1,resizable=1,screenY=1,screenX=1,left=30,top=30,height=600,width=800");
            myWindow.focus();
        }
    },

    generateRegistrationNumber(operationId, companyCode, causeCode) {
        return UtilsService._call_get(UtilsService.URL() + '/transaccional/generarNumeroPedido?operationId=' + operationId + '&companyCode=' + companyCode + '&causeCode=' + causeCode);
    },

    async uploadFile(transactionalRequest, relacion) {

        var adjuntos = '';
        for (const file of relacion.files) {
            var attached = {}
            attached.arcNumPed = transactionalRequest.commonParams.requestNumber;
            attached.arcTipDoc = transactionalRequest.commonParams.documentType;
            attached.arcNumDoc = transactionalRequest.commonParams.documentNumber;
            attached.arcNombreOri = file.name;
            attached.arcNombreDef = file.name;
            attached.arcClasificacion = relacion.codClasificacion;
            attached.arcCodTipodocumental = relacion.codTipoDocumental;
            attached.arcTipodocumental = relacion.tipoDocumental;
            attached.arcEstado = "A";
            attached.arcRepoDef = "S" === relacion.temporal ? "BD" : "FN";
            attached.arcOperationId = transactionalRequest.commonParams.operationId;
            let data = new FormData();
            data.append('file', file);
            data.append('attached',
                new Blob([JSON.stringify(attached)], {
                    type: 'application/json'
                }));
            console.log("Enviando archivo " + attached.arcNombreOri);
            let response = await UtilsService._call_post_file(UtilsService.URL() + '/transaccional/uploadFile', data);
            if (response.ok) {
                adjuntos = adjuntos + attached.arcTipodocumental + ": " + attached.arcNombreOri + ' (Grabado OK)\n';
                console.log("Enviado. " + attached.arcNombreOri);
            } else {
                adjuntos = adjuntos + attached.arcTipodocumental + ": " + attached.arcNombreOri + ' (ERROR al grabar)\n';
                console.log("NO Enviado. " + attached.arcNombreOri);
            }
        }
        return adjuntos;
    }

}

export default BaseService;