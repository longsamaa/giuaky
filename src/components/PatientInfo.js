import React, {useEffect, useState} from 'react';
import Card from "react-bootstrap/Card";


const PatientInfo = ({name, address, note, verifyDate}) => {
    return <div class = "info-card">
    <Card style={{ width: '18rem' }}>
    <Card.Header><h2>Thông tin chi tiết bệnh nhân</h2></Card.Header>
    <Card.Body>
    <Card.Title>Tên bệnh nhân : {name}</Card.Title>
      <Card.Text>
        <ul>
            <li>{address}</li>
            <li>{note}</li>
            <li>{verifyDate}</li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
};

export default PatientInfo;