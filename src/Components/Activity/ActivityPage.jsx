import React from 'react';
import Footer from '../Footer';
import background from "../images/greeny.jpeg";
import actImg1 from '../images/activity/5.jpg';
import actImg2 from '../images/activity/2.jpeg';
import actImg3 from '../images/activity/12.jpeg';


function activity() {
    return (
        <div>

<section id="managmentBreadcamp">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-3 text-center ">
                        <h1 className='mt-5' style={{ backgroundImage: `url(${background})` }}>
                            ACTIVITY
                        </h1>
                    </div>
                </div>
            </section>

            <section>
                <div class="container">
                    <div class="row my-5 py-5 justify-content-center">
                        <div class="col-11">
                            <div class="accordion" id="accordionPanelsStayOpenExample">
                                <div class="accordion-item"  data-aos="fade-up" data-aos-easing="ease-out-cubic"  data-aos-duration="3000">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                            aria-controls="panelsStayOpen-collapseOne">
                                            Nursury
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show bg-dark text-light"
                                        aria-labelledby="panelsStayOpen-headingOne">
                                        <div class="accordion-body">
                                            <div class="row activity justify-content-around">
                                                <div class="col-sm-12 col-md-4 ">
                                                    <img src={actImg1} class="img-fluid"   alt="" srcset="" /> 
                                                </div>
                                                <div class="col-sm-12 col-md-7 text-light" >
                                                    <h2>Craft Activity Every Saturday</h2>
                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius modi
                                                        ratione natus blanditiis pariatur vel exercitationem, animi alias
                                                        possimus dolorum accusamus ad quisquam asperiores similique aperiam
                                                        vitae qui libero expedita esse? Modi, rem ab? Doloribus dolore dolorem,
                                                        beatae facere facilis voluptas magnam inventore fugit excepturi sequi
                                                        ducimus non eligendi harum.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item"  data-aos="fade-up" data-aos-easing="ease-out-cubic"  data-aos-duration="3000">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseTwo">
                                            Primary
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse  bg-dark text-light"
                                        aria-labelledby="panelsStayOpen-headingTwo">
                                        <div class="accordion-body">
                                            <div class="row activity justify-content-around">
                                                <div class="col-sm-12 col-md-4 ">
                                                    <img src={actImg2} class="img-fluid"    alt="" srcset="" />
                                                </div>
                                                <div class="col-sm-12 col-md-7  text-light" >
                                                    <h2>Craft Activity Every Saturday</h2>
                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius modi
                                                        ratione natus blanditiis pariatur vel exercitationem, animi alias
                                                        possimus dolorum accusamus ad quisquam asperiores similique aperiam
                                                        vitae qui libero expedita esse? Modi, rem ab? Doloribus dolore dolorem,
                                                        beatae facere facilis voluptas magnam inventore fugit excepturi sequi
                                                        ducimus non eligendi harum.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item"  data-aos="fade-up" data-aos-easing="ease-out-cubic"  data-aos-duration="3000">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
                                            High
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse  bg-dark text-light"
                                        aria-labelledby="panelsStayOpen-headingThree">
                                        <div class="accordion-body">
                                            <div class="row activity justify-content-around">
                                                <div class="col-sm-12 col-md-4 imgBox">
                                                    <img src={actImg3} class="img-fluid w-100"   alt="" srcset=""  />
                                                </div>
                                                <div class="col-sm-12 col-md-7 text-light" >
                                                    <h2>Cricket Activity Every Saturday</h2>
                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius modi
                                                        ratione natus blanditiis pariatur vel exercitationem, animi alias
                                                        possimus dolorum accusamus ad quisquam asperiores similique aperiam
                                                        vitae qui libero expedita esse? Modi, rem ab? Doloribus dolore dolorem,
                                                        beatae facere facilis voluptas magnam inventore fugit excepturi sequi
                                                        ducimus non eligendi harum.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <Footer />
        </div>
    )
}

export default activity
