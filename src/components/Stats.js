import React, {useEffect, useState ,useRef} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ChartVN from "./ChartVN";
import Charttotal from "./Charttotal";

const Stats = () => {
    return <Container>
        <Row>
            <Col xs = {12}>
                <ChartVN />
            </Col>
        </Row>
        <Row>
            <Col xs = {12}>
                <Charttotal />
            </Col>
        </Row>
    </Container>
}

export default Stats;