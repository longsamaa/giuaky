import React, {useEffect, useState ,useRef} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CovidGoogleMap from "./CovidGoogleMap";
import PatientInfo from "./PatientInfo";
import Container from "react-bootstrap/Container";
import CovidMap from "./CovidMap";
import ListPatients from "./ListPatients";
import SliderDate from './Slider'; 
import { subDays, startOfToday, format,addDays, getDate} from "date-fns";
const constantDay = new Date("2019-12-19");

const CovidDashboard = (props) => {
    const [currentPatient, setCurrentPatient] = useState();

    const [patients, setPatients] = useState([]);

    const[indexPatientClicked, setIndexPatientClicked] = useState();

    const[selectedDate, setSelectedDate] = useState(constantDay); 
    
    let listPatientSelected = []; 

    let refs = [];
    useEffect(() => {
        fetch("https://cors-anywhere.herokuapp.com/https://maps.vnpost.vn/apps/covid19/api/patientapi/list")
            .then(res => res.json())
            .then(
                (result) => {
                    setPatients(result.data);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    // setIsLoaded(true);
                    // setError(error);
                }
            )
    }, []
    )
    useEffect(() => {
        setScrollList(patients,indexPatientClicked,refs);
    })
    refs = patients.reduce((acc, patient,index) => {
        acc[index] = React.createRef();
        return acc;
      }, {});
    const patientMarkerClickedHandler = (patient,index) => {
        setCurrentPatient(patient);
        setIndexPatientClicked(index); 
    }

    const clickItemPatient = (patient, index) => {
        setCurrentPatient(patient); 
        setIndexPatientClicked(index); 
    }

    const onChangeSlider = ([ms]) => {
        let date = new Date(ms);   
        setSelectedDate(date);  
        setIndexPatientClicked(undefined); 
    }

    const addDaySelected = () => {
        setSelectedDate(selectedDate => addDays(selectedDate,1)); 
    }

    patients.map((patien,index) => {
        let date = new Date(patien.verifyDate); 
        if(date.getTime() <= selectedDate.getTime()){
            listPatientSelected = listPatientSelected.concat(patien);    
        }
    })

    return <Container>
        <Row>
         
            <Col xs={10}><CovidMap onPatientMarkerClicked={patientMarkerClickedHandler} patients = {listPatientSelected ? listPatientSelected : patients} currentPatient = {currentPatient} refs = {refs}/></Col>
            <Col xs={2}>
                {currentPatient &&
                <PatientInfo name={currentPatient.name} address={currentPatient.address} note={currentPatient.note}
                             verifyDate={currentPatient.verifyDate}/>}
            </Col>
        </Row>
        <Row>
            <Col xs = {10}>
                <ListPatients patients = {listPatientSelected ? listPatientSelected : patients} onClickItemPatient = {clickItemPatient} refs = {refs} currentPatient ={currentPatient} indexClickedMaker = {indexPatientClicked}/>
            </Col>
        </Row>
        <Row>
            <Col xs = {10}>
            <SliderDate onChangeSlider = {onChangeSlider} addDaySelected = {addDaySelected}/>
            </Col>
        </Row>
    </Container>
};

const setScrollList = (patients, index, refs) => {
    if(patients.length > 0){
        if(refs[index]){
        refs[index].current.scrollIntoView({
            behavior: "smooth",
            block: "start"});
        }
    }
}

export default CovidDashboard;