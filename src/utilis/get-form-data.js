/**
 * 
 * @param {HTMLFormElement} formElt
 */

import { Input } from "@mui/material";

export default function getFormData (formElt){
    const formData = {};

    Array.from(formElt.elements).forEach(input => {
        if (input.name){
            formData[input.name] = input.value;
        }
    });

    return formData;
}