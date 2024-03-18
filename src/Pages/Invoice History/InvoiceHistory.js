import React, {useState, useEffect, useRef, useMemo} from 'react';
import './InvoiceHistory.css';
import ItemMatch from "../../Components/ItemMatch"
import {Table, TableContainer, TableHead, TableRow} from "@mui/material";
import myTable from "../../Components/MyTable";
import MyTable from "../../Components/MyTable";

import ReactTablev2 from "../../Components/ReactTablev2";
function InvoiceHistory(){

    const [merchants, setMerchants] = useState([])
    const [merchantData, setMerchantData] = useState("")

    const [goodReadData, setGoodReadData] = useState([])
    function getMerchant() {
        try {
            fetch('http://localhost:3001/')

                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setMerchants(data);


                });
        } catch (error){
            console.log("Error", error);
        }
    }

    function getGoodReads() {
        try {
            fetch('http://localhost:3001/getGoodreadData')

                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setGoodReadData(data);


                });
        } catch (error){
            console.log("Error", error);
        }
    }

    function handle_get_data_click(){
        getGoodReads();
        getMerchant()
    }


    function createMerchant() {
        let name = prompt('Enter merchant name');
        let email = prompt('Enter merchant email');
        fetch('http://localhost:3001/merchants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email}),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getMerchant();
            });
    }

    function deleteMerchant() {
        let id = prompt('Enter merchant id');
        fetch(`http://localhost:3001/merchants/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getMerchant();
            });
    }

    function updateMerchant() {
        let id = prompt('Enter merchant id');
        let name = prompt('Enter new merchant name');
        let email = prompt('Enter new merchant email');
        fetch(`http://localhost:3001/merchants/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email}),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getMerchant();
            });
    }

    useEffect(() => {
        getMerchant();
        getGoodReads();
    }, []);






    return (
        <div id = 'Container'>
            {merchants.length > 0 ? (
                <ul>
                    {merchants.map((merchant) => (
                        <li key={merchant.id}>
                            Name: {merchant.name}, Email: {merchant.email}
                        </li>
                    ))}
                </ul>
            ) : (
                'There are no merchants available'
            )}

            {goodReadData.length > 0 ? (
                <ul>
                    {goodReadData
                        .filter(item => item.Author === 'Pierce Brown')
                        .map((goodReadData) => (

                    <li key ={goodReadData.Id}>
                        Name: {goodReadData.Title}
                    </li>))}

                </ul>
            ): ('No GoodReads Data')}
            <div id = 'table1'>
                <MyTable goodReadData={goodReadData}/>
            </div>

            <div id = 'table2'>
                <ReactTablev2/>

            </div>



            <br />
            <button onClick={handle_get_data_click}>Update merchant</button>
            <button onClick = {createMerchant}>Create New Merchant</button>

        </div>
    );

    /*
    return(
    {merchants ? merchants : 'There is no merchant data available'}


        <>
            <div id = 'Container'>
                <div id = 'TopBar'>
                    <h1>Hello</h1>

                </div>
                <div id = 'Main_area'>
                    <h1>Main</h1>
                    <div class = 'ItemM'>
                        <ItemMatch/>
                    </div>

                </div>
                <div id = 'postgres'>
                    <h1>PostGres</h1>
                </div>


            </div>
        </>
    )
    */


}
export default InvoiceHistory;