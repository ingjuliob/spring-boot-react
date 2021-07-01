import UtilsService from "./utilsService";

const ReprintService = {

    getEmbozos(operationId, code) {
        return UtilsService._call_get(UtilsService.URL() + '/reimpresion/tarjetas/embozos?operationId=' + operationId + '&codigo=' + code);
    },

    getCardDetails(operationId, cardNumber) {
        return UtilsService._call_get(UtilsService.URL() + '/reimpresion/tarjetas/detalle?operationId=' + operationId + '&numero=' + cardNumber);
    },

    getBranchDetails(operationId) {
        return UtilsService._call_get(UtilsService.URL() + '/transaccional/sucursales?operationId=' + operationId);
    }

}

export default ReprintService;