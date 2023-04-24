import React from 'react';
import Footer from '../Footer';
import img1 from '../images/activity/7.png';
import img2 from '../images/activity/8.jpg';
import background from "../images/greeny.jpeg";

function about() {
    return (
        <div>
 <section id="managmentBreadcamp">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-3 text-center">
                        <h1 className='mt-5' style={{ backgroundImage: `url(${background})` }}>
                            ABOUT US
                        </h1>
                    </div>
                </div>
            </section>

            <div className="container-fluid">
                <div className="row px-3 my-5">
                    <div className="col-sm-12 col-md-6 col-lg-6 mt-3  justify" data-aos="slide-right"  data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                        <img src={img1} alt="" className="img-fluid mt-5" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="row">
                            <div className="col-sm-12 col-md-10 col-lg-10 justify" >
                                <h2 data-aos="slide-left"  data-aos-easing="ease-out-cubic" data-aos-duration="3000">HSWD School</h2>
                                <p data-aos="slide-left"  data-aos-easing="ease-out-cubic" data-aos-duration="3000">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora possimus cumque quo soluta explicabo reiciendis eaque obcaecati? Provident maiores corrupti, ducimus libero, tempora nemo pariatur voluptatibus quod deleniti maxime enim totam reprehenderit distinctio officia
                                    autem dolorum iure! Perspiciatis praesentium vitae animi quo minus. Placeat mollitia quidem numquam consectetur distinctio. Ipsa.</p>
                                <p data-aos="slide-left"  data-aos-easing="ease-out-cubic" data-aos-duration="3000">Provident maiores corrupti, ducimus libero, tempora nemo pariatur voluptatibus quod deleniti maxime enim totam reprehenderit distinctio officia
                                    autem dolorum iure! Perspiciatis praesentium vitae animi quo minus. Placeat mollitia quidem numquam consectetur distinctio. Ipsa.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mb-5">
                <div className="row px-3 justify-content-center">
                    <div className="col-sm-12 col-md-8 col-lg-7 justify" >
                        <img src={img2} alt="" className="img-fluid"  />
                            <div className="text" >
                                <h3 data-aos="slide-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">About My Managment</h3>
                                <p data-aos="slide-up" data-aos-easing="ease-out-cubic" data-aos-duration="2500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quisquam porro, ut atque, laboriosam perferendis omnis hic voluptate, delectus qui cumque beatae consectetur consequatur voluptatibus tempora.
                                    Velit officiis sapiente deleniti voluptas similique ipsa dolorem, omnis, adipisci tempora ab qui nesciunt.</p>
                                <p data-aos="slide-up" data-aos-easing="ease-out-cubic" data-aos-duration="3000">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis quasi temporibus quisquam beatae quos deleniti nisi consequuntur, officia sint a perspiciatis velit quam maxime cum optio nemo eveniet ducimus provident.</p>

                            </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default about
