import React from 'react';
import './App.css';
import CovidDashboard from "./components/CovidDashboard";
import Nav from "./components/Nav";
import Stats from "./components/Stats"; 
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    {/* <Route path = "/" exact component = {CovidDashboard} /> */}
                    <Route path = "/giuaky" exact component = {CovidDashboard} />
                    <Route path = "/giuaky/map" component = {CovidDashboard} />
                    <Route path = "/giuaky/stats" component = {Stats} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
