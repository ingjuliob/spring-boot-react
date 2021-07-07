import UtilsService from "./utilsService";

const BaseService = {

    getHelp(operationId, productCode, causeCode, reasonCode, companyCode) {
        return UtilsService._call_get(UtilsService.URL() + '/transaccional/parametros/ayuda?operationId=' + operationId + '&productCode=' + productCode + '&causeCode=' + causeCode + '&reasonCode=' + reasonCode + '&companyCode=' + companyCode);
    },

    saveData(transactionalRequest) {
        return UtilsService._call_post(UtilsService.URL() + '/transaccional/grabar', transactionalRequest);
    },

    printData(transactionalRequest) {
        return UtilsService._call_post_blob(UtilsService.URL() + '/transaccional/imprimir', transactionalRequest);
    }

}

export default BaseService;