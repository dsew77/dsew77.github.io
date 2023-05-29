import React from "react";
import {TextField} from "@mui/material";
import {Autocomplete} from "@mui/lab";
import PropTypes from "prop-types";

export default function TiqAutoComplete(props) {

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            value={props.value}
            options={props.options}
            fullWidth
            renderOption={(props, option) => <li {...props}>{option.label}</li>}
            renderInput={(params) => <TextField {...params} label={props.label}/>}
            onChange={(event, value) => props.setValue(value)}
        />
    )
}

TiqAutoComplete.propTypes = {
    label: PropTypes.any.isRequired,
    options: PropTypes.any.isRequired,
    setValue: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
}