import React from 'react';
import blogImg from './images/activity/16.jpg';
import certificate from './images/certificate.png';
import stamp from './images/stamp.png';
import users from './images/users.png';
import videochat from './images/videochat.png';
import { Player } from 'video-react';

function Video_blog() {
  return (
    <div>
      <section id="backgroundImageFirst">
<section id="HomeAbout">
    <div className="container">
        <div className="row px-4 justify-content-around marginTop">
            <h2>ABOUT US</h2>
            <div className="col-sm-12 col-md-6 col-lg-6" data-aos="zoom-in">
            {/* <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    /> */}
            </div>
            <div className="col-sm-12 col-md-5 col-lg-5 justify mt-4 pl-4" >
                   <p><i className="fa-sharp fa-solid fa-quote-left"></i>
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus numquam nam rerum omnis aspernatur similique odit molestias nobis, modi beatae id neque facilis eius laboriosam hic vero ut corporis repellat.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, laboriosam sapiente? Tempore, commodi aut culpa reiciendis iste quia. Saepe rem delectus ipsam beatae sint deserunt velit aliquam, iste ratione maxime?
                     laboriosam sapiente? Tempore, commodi aut culpa reiciendis iste quia. Saepe rem delectus ipsam beatae sint deserunt velit aliquam, iste ratione maxime?
                  <i className="fa-sharp fa-solid fa-quote-right"></i></p>
            </div>
        </div>
    </div>
</section>

{/* <!-- blog here  --> */}

<section id="HomeBlog">
    <div className="container">
        <div className="row px-3 justify-content-center">
            <h2>Our Latest News</h2>
            <div className="col-sm-12 col-md-8 col-lg-7 box animatedBox" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <div className="row" >
                    <div className="col-sm-12 col-md-12 col-lg-6" data-aos="zoom-in">
                        <img src={blogImg} alt="" className="img-fluid" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 ">
                        <h3 className="text-white" >Anual Gathering Function</h3>
                        <p  className="text-white" >The annual school gathering function is an eagerly awaited event that brings together students, teachers, and parents to celebrate the achievements and successes of the academic year. It is a day filled with excitement, fun, and entertainment, and it is a time to reflect on the hard work and dedication that has gone into making the school year a success. <a href="" className="text-info">ReadMore</a> </p>
                        <p  className="text-white">Date : <b>15 / August / 2023</b></p>
                        <p  className="text-white">Author : <b>Javed Maniyar</b></p>
                        <div className="text-end">
                            {/* <!-- <a href=""  className="text-white"> <i className="fa-solid fa-2x fa-circle-arrow-left"></i></a>
                            <a href=""  className="text-white"><i className="fa-solid fa-2x px-4 fa-circle-arrow-right"></i></a> --> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>

</section>
<section id="trusticonsection">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-12 col-md-3 col-lg-3 border-end ">
                <div class="row">
                    <div class="col-sm-12 col-md-4 col-lg-4 ">
                        <span><img src={certificate} alt="" class="img-fluid" srcset="" data-aos="fade-up" /></span>
                    </div>
                    <div class="col-sm-12 col-md-8 col-lg-8"> <h3>Most Trusted Institute</h3></div>
                </div>
            </div>

            <div class="col-sm-12 col-md-3 col-lg-3 border-end">
                <div class="row">
                    <div class="col-sm-12 col-md-4 col-lg-4">
                        <span><img src={users} alt="" class="img-fluid" srcset="" data-aos="fade-down" /></span>
                    </div>
                    <div class="col-sm-12 col-md-8 col-lg-8"> <h3>5000 +Students</h3></div>
                </div>
            </div>

            <div class="col-sm-12 col-md-3 col-lg-3 border-end">
                <div class="row">
                    <div class="col-sm-12 col-md-4 col-lg-4">
                        <span><img src={stamp} alt="" class="img-fluid" srcset="" data-aos="fade-up" /> </span>
                    </div>
                    <div class="col-sm-12 col-md-8 col-lg-8"> <h3>Well Qualified Teachers</h3></div>
                </div>
            </div>

            <div class="col-sm-12 col-md-3 col-lg-3 ">
                <div class="row">
                    <div class="col-sm-12 col-md-4 col-lg-4">
                        <span><img src={videochat} alt="" class="img-fluid" srcset="" data-aos="fade-down" /></span>
                    </div>
                    <div class="col-sm-12 col-md-8 col-lg-8 swzxcgfvbh"> <h3>World Class Infrastructure</h3></div>
                </div>
            </div>

        </div>
    </div>
</section>
    </div>
  )
}

export default Video_blog
