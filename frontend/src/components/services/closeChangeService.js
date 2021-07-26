import UtilsService from "./utilsService";

const CloseChangeService = {

    getTarjetas(operationId, docType, docNum, productCode, productNumber) {
        return UtilsService._call_get(UtilsService.URL() + '/cambioCierre/tarjetas?operationId=' + operationId + '&docType=' + docType + '&docNum=' + docNum + '&productCode=' + productCode + '&productNumber=' + productNumber);
    }

}

export default CloseChangeService;