import React from 'react';
import Footer from '../Footer';
import founder from '../images/founder.jpg';
import cofouder from '../images/cofounder.webp';
import background from "../images/greeny.jpeg";
function Inspiration() {
    return (
        <div>
            <section id="managmentBreadcamp">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-4 text-center">
                        <h1 className='mt-5' style={{ backgroundImage: `url(${background})` }}>
                            INSPIRATION
                        </h1>
                    </div>
                </div>
            </section>

            <section id="inspiration">
                <div class="container">
                    <div class="row my-5 justify-content-around">
                        <div class="col-sm-12 col-md-4 ">
                            <img src={founder} class="img-fluid" alt="" data-aos="fade-right"  data-aos-easing="ease-out-cubic" data-aos-duration="3000"/>
                        </div>
                        <div class="col-sm-12 col-md-7 pt-4">
                            <h2 data-aos="fade-up"  data-aos-duration="3000">Our Founders</h2>
                            <p data-aos="fade-up"  data-aos-duration="3000"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos incidunt deleniti debitis consequuntur doloremque placeat? Eveniet, fugiat. Impedit modi earum hic atque, maiores provident eius ea autem expedita illo, corporis esse facilis distinctio aliquam ducimus. Vitae, quo ipsum asperiores nihil enim minima unde beatae odio ad atque obcaecati. Quos, tempore!</p>
                            <p data-aos="fade-up"  data-aos-duration="3000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos incidunt deleniti debitis consequuntur doloremque placeat? Eveniet, fugiat. Impedit modi earum hic atque, maiores provident eius ea autem expedita illo, corporis esse facilis distinctio aliquam ducimus. Vitae, quo ipsum asperiores nihil enim minima unde beatae odio ad atque obcaecati. Quos, tempore!</p>
                        </div>
                    </div>
                    <div class="row my-5 justify-content-around">
                        <div class="col-sm-12 col-md-4 ">
                            <img src={cofouder} class="img-fluid" alt="" data-aos="fade-up" data-aos-easing="ease-out-cubic"  data-aos-duration="3000" />
                        </div>
                        <div class="col-sm-12 col-md-7 pt-4 "   >
                            <h2 data-aos="fade-up"  data-aos-duration="3000" >Our Founders</h2>
                            <p data-aos="fade-up"  data-aos-duration="3000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos incidunt deleniti debitis consequuntur doloremque placeat? Eveniet, fugiat. Impedit modi earum hic atque, maiores provident eius ea autem expedita illo, corporis esse facilis distinctio aliquam ducimus. Vitae, quo ipsum asperiores nihil enim minima unde beatae odio ad atque obcaecati. Quos, tempore!</p>
                            <p data-aos="fade-up"  data-aos-duration="3000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos incidunt deleniti debitis consequuntur doloremque placeat? Eveniet, fugiat. Impedit modi earum hic atque, maiores provident eius ea autem expedita illo, corporis esse facilis distinctio aliquam ducimus. Vitae, quo ipsum asperiores nihil enim minima unde beatae odio ad atque obcaecati. Quos, tempore!</p>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    )
}

export default Inspiration
