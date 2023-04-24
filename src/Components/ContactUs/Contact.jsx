import React from 'react';
import Footer from '../Footer';
import background from "../images/greeny.jpeg";
import CForm from './CForm';
import loc from '../images/location.gif';
import msg from '../images/msg.gif';
import call from '../images/telephone.gif';
function Contact() {
    return (
        <div>

            <section id="managmentBreadcamp">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-4 text-center">
                        <h1 className='mt-5' style={{ backgroundImage: `url(${background})` }}>
                            CONTACT US
                        </h1>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row my-5  px-3 justify-content-around">
                            <div className="col-sm-12 col-md-3 col-lg-3 box  mt-3 contactCard" data-aos="slide-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                                <h2><img src={loc} alt="" className="img-fluid" srcset="" width="100px" /></h2>
                                <h3>Jasola   <br />NEW DELHI</h3>
                            </div>
                            <div className="col-sm-12 col-md-3 col-lg-3 box mt-3  contactCard">
                                <h2><img src={msg} alt="" className="img-fluid" srcset="" width="100px" /></h2>
                                <h3><a href="">contact@rioschool.com</a></h3>

                            </div>
                            <div className="col-sm-12 col-md-3 col-lg-3 box  mt-3  contactCard" data-aos="slide-right"  data-aos-easing="ease-out-cubic" data-aos-duration="3000"  >
                                <h2><img src={call} alt="" className="img-fluid" srcset="" width="100px" /></h2>
                                <h3><a href="tel:+918446931810">8446931810</a></h3>

                            </div>
                        </div>
                    </div>

                    {/* contact form page  */}

                    <CForm />

                </div>

            </div>
            <div className="row my-5">
                <div class="col-sm-12" data-aos="zoom-in">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14019.448249319603!2d77.291394!3d28.5438655!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f73efa7317%3A0x76a062d37ab20633!2sRioforge%20Information%20solutions!5e0!3m2!1sen!2sin!4v1679771260973!5m2!1sen!2sin"
                        width="100%" height="500" className='border' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            {/* footer page */}

            <Footer />
        </div>
    )
}

export default Contact
