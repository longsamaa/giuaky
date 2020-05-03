import React from 'react'; 
import {Link, withRouter} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color : 'white'
    }
    return (
        <nav>
            <ul className = "nav-links">
                <Link to = '/giuaky/map' style = {navStyle}><li>Bản đồ bệnh nhân Covid Việt Nam</li></Link>
                <Link to = '/giuaky/stats' style = {navStyle}><li>Biểu đồ số ca mắc Covid</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;