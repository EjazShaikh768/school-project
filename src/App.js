import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import React, { useEffect } from "react";

import logo from './Components/images/logo00.png';
import Home from './Components/Home/Home';
import About from './Components/AboutUs/about';
import Inspiration from "./Components/AboutUs/Inspiration";
import Gallery from "./Components/Gallery/Gallery";
import NonStaff from "./Components/OurFamily/NonStaff";
import Staf from "./Components/OurFamily/Staf";
import Management from "./Components/OurFamily/Management";
import Blog from "./Components/Blogs/Blog";
import Contact from './Components/ContactUs/Contact';
import Activity from './Components/Activity/ActivityPage';
import Signin from "./Components/Signin";




import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';

function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <BrowserRouter >
            <div className="App">
                <nav className="navbar  sticky-top py-4 navbar-expand-lg ">
                    <div className="container-fluid">
                        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon text-dark"></span>
                        </button>
                        <Link className="nav-link" aria-current="page" as={Link} to="/">   <img src={logo} alt="" className="img-fluid mx-lg-5" /></Link>

                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav ms-auto  my-2 my-lg-0 navbar-nav-scroll">
                                <li className="nav-item active">
                                    <Link className="nav-link" aria-current="page" as={Link} to="/">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" as={Link} to="/Blogs">ACHIEVEMENT</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ABOUT US
                                    </Link>
                                    <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" as={Link} to="/Inspiration">OUR INSPIRATION</Link></li>
                                        <li><Link className="dropdown-item" as={Link} to="/About">ABOUT</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        OUR FAMILY
                                    </a>
                                    <ul className="dropdown-menu  bg-dark" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" as={Link} to="/Management">SCHOOL MANAGMENT</Link></li>
                                        <li><Link className="dropdown-item" as={Link} to="/Staf">TEACHING STAFF</Link></li>
                                        <li><Link className="dropdown-item" as={Link} to="/NonStaff">NON TEACHING STAFF</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" as={Link} to="/Gallery">GALLERY</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" as={Link} to="/Activity">ACTIVITY</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" as={Link} to="/Contact">CONTACT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" as={Link} to="/Signin">SIGN IN</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <Routes >
                    <Route path='/' element={<Home />} />
                    <Route path='/Activity' element={<Activity />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/Blogs' element={<Blog />} />
                    <Route path='/Inspiration' element={<Inspiration />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Gallery' element={<Gallery />} />
                    <Route path='/NonStaff' element={<NonStaff />} />
                    <Route path='/Staf' element={<Staf />} />
                    <Route path='/Management' element={<Management />} />
                    <Route path='/Signin' element={<Signin />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;