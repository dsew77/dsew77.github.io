import React, {useState} from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from "prop-types";
import {TextField, Button} from "@mui/material";

export default function ItemMatch(props){
    const mainStyle ={
        display: 'flex',
        padding:'2px',
        marginRight: '8px',
        marginLeft: '8px',


    }
    const [value1, setValue1] = useState("Hi")
    const [value, setValue] = useState("")

    const change = () =>{
        setValue1(value)
    }

    const captureText = event =>{
        setValue(event.target.value)
    }


    return(
        <>
        <h1>ItemMatch</h1>
            <div style ={mainStyle}>
                <TextField onChange = {captureText}/>
                <button onClick = {change}>Click</button>

            </div>
            <div>
                <p1 id = 'text'>{value1}</p1>
            </div>

        </>

    )
}