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
                let response = await this.uploadFile(transactionalRequest, relacion);
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
            attached.isNew = true;
            attached.operationId = transactionalRequest.commonParams.operationId;
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