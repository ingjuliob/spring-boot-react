const UtilsService = {

    URL() {
        return 'http://ard032vlncap.ar.hsbc:21228/sacweb/control';
    },

    _call_get(url) {
        return fetch(url, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        })
            .then(res => res.json())
            .catch(err => console.log(err))
    },

    _call_post(url, body) {
        return fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .catch(err => console.log(err))
    },

    _call_post_blob(url, body) {
        let filename = body.option + "_" + body.requestNumber + ".pdf";
        return fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
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

    async _call_post_file(url, data) {
        return fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: data
        })
            .catch(err => console.log(err))
    },

    getCommonParams(operationId, productCode, causeCode, companyCode, documentType, documentNumber, businessName, productNumber, origin,
        user, option, contactMode, reasonCode, responsibleSector, registerSector, initContact, closeContact, requestNumber) {

        let commonParams = {};
        commonParams.operationId = operationId;
        commonParams.documentType = documentType;
        commonParams.documentNumber = documentNumber;
        commonParams.businessName = businessName;
        commonParams.productNumber = productNumber;
        commonParams.user = user;
        commonParams.origin = origin;
        commonParams.option = option;
        commonParams.contactMode = contactMode;
        commonParams.productCode = productCode;
        commonParams.causeCode = causeCode;
        commonParams.reasoncode = reasonCode;
        commonParams.companyCode = companyCode;
        commonParams.responsibleSector = responsibleSector;
        commonParams.registerSector = registerSector;
        commonParams.initContact = initContact;
        commonParams.closeContact = closeContact;
        commonParams.requestNumber = requestNumber;
        commonParams.retry = requestNumber ? true : false;
        commonParams.observation = "";
        return commonParams;

    }

}

export default UtilsService;