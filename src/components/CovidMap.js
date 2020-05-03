import React, {useEffect, useState} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const CovidMap = ({onPatientMarkerClicked,patients,currentPatient}) => {
    let defaultZoom = 8; 
    let defaultLat = 10.762887; 
    let defaultLng = 106.6800684; 
    return <Map center={[currentPatient ? currentPatient.lat : defaultLat,currentPatient ? currentPatient.lng : defaultLng]} zoom={defaultZoom}>
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png   "
        />
        {patients.map((patient,index) => <Marker position={[patient.lat, patient.lng]} onClick={() => {onPatientMarkerClicked(patient,index)}}>
            <Popup>
                <ul>
                    <li>Name: {patient.name}</li>
                    <li>Address: {patient.address}</li>
                    <li>Note: {patient.note}</li>
                    <li>Verify date: {patient.verifyDate}</li>
                </ul>
            </Popup>
        </Marker>)}
    </Map>;
};

export default CovidMap;
