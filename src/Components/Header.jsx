import React from 'react';
import logo from './images/logo00.png';
function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-md sticky-top py-4 navbar-expand-lg ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-dark"></span>
                    </button>
                    <img src={logo} alt="" className="img-fluid mx-lg-5" />
                    
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="" >HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">ACHIEVEMENT</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ABOUT US
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="">OUR INSPIRATION</a></li>
                                    <li><a className="dropdown-item" href="">ABOUT</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    OUR FAMILY
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="">SCHOOL MANAGMENT</a></li>
                                    <li><a className="dropdown-item" href="">TEACHING STAFF</a></li>
                                    <li><a className="dropdown-item" href="">NON TEACHING STAFF</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">GALLERY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">ACTIVITY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">CONTACT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">SIGN IN</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Header
