import BaseService from "./baseService";

const AbmService = {

    // llamdas GET
    _call_get(url) {
        return fetch(url)
            .then(res => res.json())
            .catch(err => console.log(err))
    },

    getConsulta(operationId, docType, document) {
        return this._call_get(BaseService.URL() + '/transaccional/cuentas/debitos/consulta?operationId=202104301039127321234567890&docType=DNI&document=10266305'); //  + operationId + '&docType' + docType + '&document' + document
    },
    
    getEntesSubentes(operationId, cuit) {
        return this._call_get(BaseService.URL() + '/transaccional/entes/subentes?operationId=202104301039127321234567890&cuit=20108496380'); //  + operationId + '&cuit' + cuit
    },
    
    // llamadas POST
    _call_post(url, body) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .catch(err => console.log(err))
    },

    saveAbm(requestNumber, state, documentType, documentNumber, fullName, operation, clientNumber, authority, subAuthority, 
            referenceNumber, accountNumber, dueNumber, limit, ctl4, ammount, branch, observations, userName, isBank, causeCode, 
            reasonCode, productCode, phoneContact) {

        let body = {};
        body.requestNumber = requestNumber;
        body.state = state;
        body.documentType = documentType;
        body.documentNumber = documentNumber;
        body.fullName = fullName;
        body.operation = operation;
        body.clientNumber = clientNumber;
        body.authority = authority;
        body.subAuthority = subAuthority;
        body.referenceNumber = referenceNumber;
        body.accountNumber = accountNumber;
        body.dueNumber = dueNumber;
        body.limit = limit;
        body.ctl4 = ctl4;
        body.ammount = ammount;
        body.branch = branch;
        body.observations = observations;
        body.userName = userName;
        body.isBank = isBank;
        body.causeCode = causeCode;
        body.reasonCode = reasonCode;
        body.productCode = productCode;
        body.phoneContact = phoneContact;
        return this._call_post(this.URL() + '/transaccion/cuentas/debitos/alta/operationId', body);
    },
}

export default AbmService;