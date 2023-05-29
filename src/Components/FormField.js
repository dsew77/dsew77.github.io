import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from "prop-types";
import TiqAutoComplete from "./TiqAutoComplete";
import {TextField} from "@mui/material";

export default function FormField(props){
    const {icon1, icon2} = props;

    //Styling the container
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid red',
        borderRadius: '4px',
        width: 'fit-content',
        margin: '8px 0',
        height: '100%'


    }
    const iconStyleL ={
        display: 'flex',
        padding:'2px',
        marginRight: '8px',
        marginLeft: '8px',


    }

    const iconStyleR ={
        display: 'flex',
        padding:'2px',
        marginRight: '8px',
        marginLeft: '8px',
        borderLeft: '1px solid blue'
    }

    const inputStyle = {
        border: '0px',
        font: '1px'

    }

    const iconContainerStyleL = {
        borderRight: '1px solid blue',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const iconContainerStyleR = {
        borderLeft: '1px solid blue',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }



    return(
        <div style={containerStyle}>
            <div style = {iconContainerStyleL}>
                <FontAwesomeIcon style = {iconStyleL} icon={icon1} className = "icon"/>
            </div>

            <TextField id="standard-basic"
                       variant = 'standard'
                       InputProps={{
                           disableUnderline: true,
                       }}
                type = "text"
                value = {props.value}
                onChange = {props.onChange}
                className ="input-field"

            />
            <div style = {iconContainerStyleR}>
                <FontAwesomeIcon style = {iconStyleR} icon={icon2} className ="icon"/>
            </div>
        </div>
    );
}

FormField.propTypes = {


    setValue: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
}