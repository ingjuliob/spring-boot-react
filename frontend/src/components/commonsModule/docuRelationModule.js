import React from "react";
import { useParams } from "react-router-dom";

// services
import BaseService from '../services/baseService';

export default function DocumentalRelation({ isAddFiles, setIsAddFiles, setClientRelations, setProductRelations }) {

    // Entry params
    let { operationId, documentType, documentNumber, causeCode,
        reasonCode } = useParams();

    // Funcion hook para consultar las relaciones de tipo documental
    // Add Files
    React.useEffect(() => {
        async function callAPI() {
            BaseService.getDocumentalRelations(operationId, causeCode, reasonCode, documentType, documentNumber)
                .then(data => {
                    setIsAddFiles(data.adjuntarArchivos);
                    if (isAddFiles) {
                        setClientRelations(data.relTipoDocumentalCliente);
                        setProductRelations(data.relTipoDocumentalProducto);
                    }
                })
        }
        callAPI();
    }, [operationId, causeCode, reasonCode, documentType, documentNumber,
        setIsAddFiles, setClientRelations, setProductRelations, isAddFiles]);

    return (
        <div></div>
    );
}