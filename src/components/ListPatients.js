import React, {useEffect, useState,useRef} from 'react';
import { ListGroup } from 'react-bootstrap';

const ListPatients = ({patients,onClickItemPatient,refs,indexClickedMaker}) =>{
    return <ListGroup class = "list-group" as = "ul">
    {patients && patients.map((patient,index) =>{  
        return(
        <ListGroup.Item key = {index} as = "li" ref={refs[index]} onClick = {() => {
            onClickItemPatient(patient,index); 
        }} active = {index === indexClickedMaker ? true : false}><ul>
            <li>{patient.name}</li> 
            <li>{patient.address}</li>
            <li>{patient.note}</li>
            <li>{patient.verifyDate}</li>   
        </ul>
        </ListGroup.Item>
        )
    }) 
    }
    </ListGroup>
}

export default ListPatients; 