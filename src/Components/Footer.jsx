import React from 'react';
import logo from './images/logo00.png';

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
                    <li><a href="">SIGN IN</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Achivement</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">Activity</a></li>
                </ul>
                </div>
                <div class="col-6 text-start">
                <ul>
                    <li><a href="">School Managment</a></li>
                    <li><a href="">Teaching Staff</a></li>
                    <li><a href="">Non Teaching Staff</a></li>
                    <li><a href="">OUR SCHOOL</a></li>
                </ul>
                </div>
               </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4 text-center pt-3" >
                <h5>RIO English Medium Convent <br /> School & Jr. College</h5>
                <address>
                    32 Colony Near High way <br />
                    Bhusawal
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
