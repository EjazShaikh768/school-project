import React from 'react';
import Footer from '../Footer';
import nonTeachImg from '../images/nonteaching.jpg';
import nonTeachImg2 from '../images/nonteaching1.jpg';
import nonTeachImg3 from '../images/nonteaching2.jpg';
import background from "../images/greeny.jpeg";

function NonStaff() {
  return (
    <div>
      <section id="managmentBreadcamp">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-6 text-center">
                        <h1 className='mt-5' style={{ backgroundImage: `url(${background})` }}>
                          NON TEACHING STAFF 
                        </h1>
                    </div>
                </div>
            </section>
<section id="teachingstaff">
    <div class="container my-5">
        <div class="row justify-content-center mt-5 px-3">
            <div class="col-12  ">
                <img src={nonTeachImg} class="img-fluid " alt="" />
                <h2>Our Non Teaching Staff</h2>
                <center> <div class="divider mt-4"></div></center>
            </div>
        </div>
        <div class="row justify-content-around   px-3">
            <div class="col-sm-12 col-md-6 " data-aos="slide-right"  >
                <img src={nonTeachImg} class="img-fluid " alt="" />
                <h2>Clerck Staff</h2>
                <center> <div class="divider mt-4"></div></center>
            </div>
            <div class="col-sm-12 col-md-6 " data-aos="slide-left" >
                <img src={nonTeachImg2} class="img-fluid" alt="" />
                <h2>Driver Staff</h2>
                <center> <div class="divider mt-4"></div></center>
            </div> 
            <div class="col-sm-12 col-md-6 mt-5  " data-aos="slide-up" >
                <img src={nonTeachImg3} class="img-fluid  " alt="" />
                <h2>Suportive Staff</h2>
                <center> <div class="divider mt-4"></div></center>
            </div>
        </div>
       
    </div>
</section>
      <Footer />
    </div>
  )
}

export default NonStaff
