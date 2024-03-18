import React, {useState} from 'react';
import TiqAutoComplete from "../../Components/TiqAutoComplete";
import './componentPreview.css'

import FormField from "../../Components/FormField";
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import MaterialTable from "../../Components/MaterialTable";


import {TextField} from "@mui/material";
function ComponentPreview(){
    const [value, setValue] = useState(1)

    const [value1, setValue1] = useState("Hi")
    const [value1_hidden, setValue1Hidden] = useState("")


    const datasource = {
        options1: [1,2,3,4,5],
        options2: ['a','b','c']};


    const handleChange = (event) => {

        setValue1Hidden(event.target.value);
        if (event.key === 'Enter'){
            setValue1(value1_hidden)
        }

    }

    const unlock = () =>{
        setValue1(value1_hidden)
    }


    return(

        <>
            <h1>{value1}</h1>
            <div id = 'autocomplete-container'>
                <TiqAutoComplete id = 'auto-complete' label={'Hi'}
                                 options={datasource['options1'].map(option => ({ label: option.toString() }))}
                                 setValue={setValue} value={value}/>

            </div>
            <div id = 'formfield-container'>
                <FormField icon1 = {faEnvelope} icon2 ={faLock} onChange = {handleChange} onKeyDown={handleChange} onIconClick={unlock}/>
            </div>


            <div>
                <MaterialTable/>
            </div>

        </>
    )
}

export default ComponentPreview

