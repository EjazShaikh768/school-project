import React from 'react';
import Footer from '../Footer';
import teachGroupImg1 from '../images/teachergroup1.jpg';
import teachGroupImg2 from '../images/teachergroup3.jpg';
import teachGroupImg3 from '../images/teachergroup4.jpg';
import background from "../images/greeny.jpeg";

function staf() {
  return (
    <div>
        <section id="managmentBreadcamp">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-5 text-center">
                        <h1 className='mt-5' style={{ backgroundImage: `url(${background})` }}>
                            TEACHING STAFF
                        </h1>
                    </div>
                </div>
            </section>
<section id="teachingstaff">
    <div class="container my-5">
        <div class="row justify-content-center mt-5 px-3">
            <div class="col-12 ">
                <img src={teachGroupImg1} class="img-fluid  " alt="" />
                <h2>Our teaching Staff</h2>
                <center> <div class="divider mt-4"></div></center>
            </div>
        </div>
        <div class="row justify-content-around  my-5 px-3">
            <div class="col-sm-12 col-md-4 " data-aos="slide-left" >
                <img src={teachGroupImg3} class="img-fluid  mt-5" alt="" />
                <h2>The KG Teaching Staff</h2>
                <center> <div class="divider mt-4"></div></center>
            </div>
            <div class="col-sm-12 col-md-4 ">
                <img src={teachGroupImg2} class="img-fluid  mt-5" alt="" />
                <h2>The Primary Teaching Staff</h2>
                <center> <div class="divider mt-4"></div></center>
            </div>
            <div class="col-sm-12 col-md-4 " data-aos="slide-right" >
                <img src={teachGroupImg1} class="img-fluid mt-5 " alt="" />
                <h2>The Higher Staff</h2>
                <center> <div class="divider mt-4"></div></center>
            </div>
        </div>
        <div class="row justify-content-center my-5 px-3">
            <div class="col-12 mt-5">
                <img src={teachGroupImg2} class="img-fluid " alt="" />
            </div>
        </div>
    </div>
</section>

      <Footer />
    </div>
  )
}

export default staf
