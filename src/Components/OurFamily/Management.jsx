import React from 'react';
import Footer from '../Footer';
import mngmImg from '../images/management.jpg';
import background from "../images/greeny.jpeg";

function Management() {
  return (
    <div>
      <section id="managmentBreadcamp">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-4 text-center">
                        <h1 className='mt-5' style={{ backgroundImage: `url(${background})` }}>
                            MANAGEMENT
                        </h1>
                    </div>
                </div>
            </section>
<section id="teachingstaff">
    <div class="container">
        <div class="row my-5">
            <div class="col-sm-12 col-md-6 ">
                <img src={mngmImg} class="img-fluid" alt="" />
            </div>
            <div class="col-sm-12 col-md-6 text-center  mt-5">
                <h2>A committed team for a</h2>
                <h3>Mission</h3>
                <center> <div class="divider mt-4"></div></center>
            </div>
        </div>
    </div>
</section>
      <Footer />
    </div>
  )
}

export default Management
