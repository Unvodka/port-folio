import React from "react";
import logoreacticon from "../logoreacticon.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    
        <div className="container">
            <a className="navbar-brand" href="#"><img src={logoreacticon} alt=""></img></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={ faBars } style={{ color: "Antiquewhite" }}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Experiences</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Experiences</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contacts</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar

