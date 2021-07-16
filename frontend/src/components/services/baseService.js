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
        var resumen = '\n*************************************************************\nDocumentos adjuntos en la carga del SAC:\n';
        for (const relacion of relaciones) {
            if (relacion.files) {
                let response = await this.uploadFile(transactionalRequest.commonParams.operationId, transactionalRequest, relacion);
                resumen = resumen + response;
            }
            console.log("Observaciones:")
            console.log(resumen);
        }
        transactionalRequest.commonParams.observation = resumen;
        return UtilsService._call_post(UtilsService.URL() + '/transaccional/grabar', transactionalRequest);
    },

    printData(transactionalRequest) {
        return UtilsService._call_post_blob(UtilsService.URL() + '/transaccional/imprimir', transactionalRequest);
    },

    generateRegistrationNumber(operationId, companyCode, causeCode) {
        return UtilsService._call_get(UtilsService.URL() + '/transaccional/generarNumeroPedido?operationId=' + operationId + '& companyCode=' + companyCode + '&causeCode=' + causeCode);
    },

    async uploadFile(operationId, transactionalRequest, relacion) {

        var adjuntos = '';
        for (const file of relacion.files) {
            var attachedFile = {}
            attachedFile.arcNumPed = transactionalRequest.commonParams.requestNumber;
            attachedFile.arcTipDoc = transactionalRequest.commonParams.documentType;
            attachedFile.arcNumDoc = transactionalRequest.commonParams.documentNumber;
            attachedFile.arcNombreOri = file.name;
            attachedFile.arcNombreDef = file.name;
            attachedFile.arcClasificacion = relacion.codClasificacion;
            attachedFile.arcCodTipodocumental = relacion.codTipoDocumental;
            attachedFile.arcTipodocumental = relacion.tipoDocumental;
            attachedFile.arcEstado = "A";
            attachedFile.arcRepoDef = "S" === relacion.temporal ? "BD" : "FN";
            attachedFile.isNew = true;
            let data = new FormData();
            data.append('file', file);
            data.append('operationId', operationId);
            data.append('attached',
                new Blob([JSON.stringify(attachedFile)], {
                    type: 'application/json'
                }));
            console.log("Enviando archivo " + attachedFile.arcNombreOri);
            let response = await UtilsService._call_post_file(UtilsService.URL() + '/transaccional/uploadFile', data);
            if (response.ok) {
                adjuntos = adjuntos + attachedFile.arcTipodocumental + ": " + attachedFile.arcNombreOri + ' (Grabado OK)\n';
                console.log("Enviado. " + attachedFile.arcNombreOri);
            } else {
                adjuntos = adjuntos + attachedFile.arcTipodocumental + ": " + attachedFile.arcNombreOri + ' (ERROR al grabar)\n';
                console.log("NO Enviado. " + attachedFile.arcNombreOri);
            }
        }
        return adjuntos;
    }

}

export default BaseService;