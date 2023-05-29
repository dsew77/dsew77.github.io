import React, {useState} from 'react';
import TiqAutoComplete from "../../Components/TiqAutoComplete";
import './componentPreview.css'

import FormField from "../../Components/FormField";
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';



import {TextField} from "@mui/material";
function ComponentPreview(){
    const [value, setValue] = useState(1)
    const datasource = {
        options1: [1,2,3,4,5],
        options2: ['a','b','c']};


    return(

        <>
            <h1>Hi2</h1>
            <div id = 'autocomplete-container'>
                <TiqAutoComplete id = 'auto-complete' label={'Hi'}
                                 options={datasource['options1'].map(option => ({ label: option.toString() }))}
                                 setValue={setValue} value={value}/>

            </div>
            <div id = 'formfield-container'>
                <FormField icon1 = {faEnvelope} icon2 ={faLock}/>
            </div>

        </>
    )
}

export default ComponentPreview

