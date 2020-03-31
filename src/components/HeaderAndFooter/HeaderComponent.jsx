import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class HeaderComponent extends Component {
    render() {
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item"></li>
                            <li><Link className="nav-link" to="/home">Home</Link></li>
                        </ul>
                    </div>  
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default HeaderComponent; 