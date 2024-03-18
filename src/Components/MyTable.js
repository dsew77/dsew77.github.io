import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";

function myTable(props){
    const goodReadData = props.goodReadData

    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {goodReadData.map((item) =>(
                        <TableRow key={item.id}>
                            <TableCell>{item.Id}</TableCell>
                            <TableCell>{item.Title}</TableCell>
                        </TableRow>
                    ))}



                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default myTable;