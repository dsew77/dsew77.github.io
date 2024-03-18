import { useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';
import { IconButton, Tooltip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

import React from "react";


function ReactTablev2(props){
    const columns = useMemo(
        () => [
            {
                accessor: 'firstName',
                header: 'First Name',
            },
            {
                accessor: 'lastName',
                header: 'Last Name',
            }

        ],
        [],
    );

    const data = [
        {
            name: 'John',
            age: 30,
        },
        {
            name: 'Sara',
            age: 25,
        },
    ]

    
return(
    <>
    <h1>Material React Table</h1>
    <MaterialReactTable columns={columns} data={data}/>
        </>
)
}


export default ReactTablev2;