import UtilsService from "./utilsService";

const CloseChangeService = {

    getTarjetas(operationId, docType, docNum) {
        return UtilsService._call_get(UtilsService.URL() + '/cambioCierre/tarjetas?operationId=' + operationId + '&docType=' + docType + '&docNum=' + docNum);
    }

}

export default CloseChangeService;