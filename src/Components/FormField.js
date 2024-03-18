import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from "prop-types";
import TiqAutoComplete from "./TiqAutoComplete";
import {TextField} from "@mui/material";

export default function FormField(props){
    const {icon1, icon2, onIconClick} = props;

    //Styling the container
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid black',
        borderRadius: '4px',
        width: 'fit-content',
        margin: '8px 0',
        height: '100%',
        backgroundColor: 'lightgrey'

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
        visibility:'visible'

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
        alignItems: 'center',

        overflow: "hidden"
    }

    const iconContainerStyleR = {
        borderLeft: '1px solid blue',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'lightblue',
        borderTopRightRadius: '3px',
        borderBottomRightRadius: '3px',

    }

    const textFieldStyle = {
        backgroundColor: 'white', // Specify the desired background color here
        height: '60px'
    };

    const handleIconClick = () =>{
        if(onIconClick){
            onIconClick();
        }
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
                           style: textFieldStyle,
                       }}
                type = "text"
                value = {props.value}
                onChange = {props.onChange}
                className ="input-field"
                onKeyDown = {props.onKeyDown}
            />
            <div style = {iconContainerStyleR}>
                <button onClick = {handleIconClick} style = {{visibility:'hidden', cursor: 'pointer'}}>
                    <FontAwesomeIcon style = {iconStyleR} icon={icon2} className ="icon"/>
                </button>
            </div>
        </div>
    );
}

FormField.propTypes = {


    setValue: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
}