const BaseService = {

    URL() {
        return 'https://gleaming-glass-313320.uc.r.appspot.com';
    },

    _call_get(url) {
        return fetch(url)
            .then(res => res.json())
            .catch(err => console.log(err))
    },

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

    _call_post_test(url, body) {
        let filename = body.option + "_" + body.requestNumber + ".pdf";
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(function (response) {
                return response.blob();
            }).then(function (blob) {
                const href = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = href;
                link.setAttribute('download', filename);
                document.body.appendChild(link);
                link.click();
            })
            .catch(err => console.log(err))
    },

    getHelp(operationId, productCode, causeCode, reasonCode, companyCode) {
        return this._call_get(this.URL() + '/transaccional/parametros/ayuda?operationId=' + operationId + '&productCode=' + productCode + '&causeCode=' + causeCode + '&reasonCode=' + reasonCode + '&companyCode=' + companyCode);
    },

    saveData(operationId, productCode, causeCode, companyCode, documentType, documentNumber, productNumber, origin,
        user, option, contactMode, reasoncode, responsibleSector, registerSector, initContact, closeContact, embozo,
        category, domicilio, sucursal) {

        let body = {};
        body.operationId = operationId;
        body.documentType = documentType;
        body.documentNumber = documentNumber;
        body.productNumber = productNumber;
        body.user = user;
        body.origin = origin;
        body.option = option;
        body.contactMode = contactMode;
        body.productCode = productCode;
        body.causeCode = causeCode;
        body.reasoncode = reasoncode;
        body.companyCode = companyCode;
        body.responsibleSector = responsibleSector;
        body.registerSector = registerSector;
        body.initContact = initContact;
        body.closeContact = closeContact;
        body.embozo = embozo;
        body.category = category;
        body.domicilio = domicilio;
        body.sucursal = sucursal;
        return this._call_post(this.URL() + '/transaccional/grabar', body);
    },

    printData(operationId, productCode, causeCode, companyCode, documentType, documentNumber, productNumber, origin,
        user, option, contactMode, reasoncode, responsibleSector, registerSector, initContact, closeContact, embozo,
        category, domicilio, sucursal, requestNumber) {

        let body = {};
        body.operationId = operationId;
        body.documentType = documentType;
        body.documentNumber = documentNumber;
        body.productNumber = productNumber;
        body.user = user;
        body.origin = origin;
        body.option = option;
        body.contactMode = contactMode;
        body.productCode = productCode;
        body.causeCode = causeCode;
        body.reasoncode = reasoncode;
        body.companyCode = companyCode;
        body.responsibleSector = responsibleSector;
        body.registerSector = registerSector;
        body.initContact = initContact;
        body.closeContact = closeContact;
        body.embozo = embozo;
        body.category = category;
        body.domicilio = domicilio;
        body.sucursal = sucursal;
        body.requestNumber = requestNumber;
        return this._call_post_test(this.URL() + '/transaccional/imprimir', body);
    }

}

export default BaseService;