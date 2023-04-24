import React from 'react';
import logo from './images/logo00.png';
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <div>
      

<section id="footer">
    <div class="container">
        <div class="row py-5 justify-content-between ">
            <div class="col-sm-12 col-md-3 col-lg-3 text-center ">
                <img src={ logo } alt="school logo" className="img-fluid" />
                <h3 class="text-light">RIO SCHOOL</h3>
            </div>
            <div class="col-sm-12 col-md-5 col-lg-5 pt-3 text-center footerLinks">
                <h3> Links-</h3>
               <div class="row">
                
                <div class="col-6 text-start">
                <ul>
                    <li><Link className="nav-link" as={Link} to="/Signin">SIGN IN</Link></li>
                    <li><Link className="nav-link" as={Link} to="/Contact">CONTACT</Link></li>
                    <li><Link className="nav-link" as={Link} to="/Blogs">ACHIEVEMENT</Link></li>
                    <li> <Link className="nav-link" as={Link} to="/Gallery">GALLERY</Link>  </li>
                    <li> <Link className="nav-link" as={Link} to="/Activity">ACTIVITY</Link></li>
                </ul>
                </div>
                <div class="col-6 text-start">
                <ul>
                    <li><Link className="dropdown-item" as={Link} to="/Management">SCHOOL MANAGMENT</Link></li>
                    <li><Link className="dropdown-item" as={Link} to="/NonStaff">NON TEACHING STAFF</Link></li>
                    <li><Link className="dropdown-item" as={Link} to="/Inspiration">OUR INSPIRATION</Link></li>
                    <li><Link className="dropdown-item" as={Link} to="/Staf">TEACHING STAFF</Link></li>
                    <li><Link className="dropdown-item" as={Link} to="/About">OUR SCHOOL</Link></li>
                </ul>
                </div>
                
             
               </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4 text-center pt-3" >
                <h5>RIO English Medium Convent <br /> School & Jr. College</h5>
                <address>
                <b>  Jasola <br />
                  NEW DELHI</b>
                </address>
                <ul id="icons">
                    <li><a href=""  ><i class="fa-brands fa-square-facebook"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-square-youtube"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-square-instagram"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 text-center">
               <h6 class="text-white"> <i class="fa-regular fa-copyright"></i> 2023 <b><a href="https://rioforge.com/">Rioforge</a></b> All Rights Reserved by Rioforge Information Systems</h6>
            </div>
        </div>
    </div>
</section>

    </div>
  )
}

export default Footer
