import React from 'react';
import background from "../images/greeny.jpeg";
import Footer from '../Footer';
import Gimg from '../images/activity/1.jpeg';
import Gimg1 from '../images/activity/10.jpg';
import Gimg2 from '../images/activity/11.jpg';
import Gimg3 from '../images/activity/12.jpeg';
import Gimg4 from '../images/activity/13.jpg';
import Gimg5 from '../images/activity/14.jpg';
import Gimg6 from '../images/activity/15.jpg';
import Gimg7 from '../images/activity/16.jpg';
import Gimg8 from '../images/activity/2.jpeg';
import Gimg9 from '../images/activity/3.jpeg';
import Gimg10 from '../images/activity/4.jpg';
import Gimg11 from '../images/activity/5.jpg';
import Gimg12 from '../images/activity/6.webp';
import Gimg13 from '../images/activity/7.png';
import Gimg14 from '../images/activity/8.jpg';

function Gallery() {
  return (
    <div>
      <section id="managmentBreadcamp">
        <div class="row justify-content-center">
          <div class="col-12 col-md-3 text-center">
            <h1 className='mt-5' style={{ backgroundImage: `url(${background})` }}>
              GALLERY
            </h1>
          </div>
        </div>
      </section>
      <div className="container-fluid">
        <div className="row my-5 " id='GalleryPage'>
          <div className="col-sm-12 GalleryBox" >
            <div className="ImageBox">
              <img src={Gimg} alt="" srcset="" className='img-fluid' />
              <img src={Gimg1} alt="" srcset="" className='img-fluid' />
              <img src={Gimg2} alt="" srcset="" className='img-fluid' />
              <img src={Gimg3} alt="" srcset="" className='img-fluid' />
              <img src={Gimg4} alt="" srcset="" className='img-fluid' />
            </div>
            <div className="ImageBox">
              <img src={Gimg5} alt="" srcset="" className='img-fluid' />
              <img src={Gimg6} alt="" srcset="" className='img-fluid' />
              <img src={Gimg7} alt="" srcset="" className='img-fluid' />
              <img src={Gimg8} alt="" srcset="" className='img-fluid' />
              <img src={Gimg9} alt="" srcset="" className='img-fluid' />
            </div>
            <div className="ImageBox">
              <img src={Gimg10} alt="" srcset="" className='img-fluid' />
              <img src={Gimg11} alt="" srcset="" className='img-fluid' />
              <img src={Gimg12} alt="" srcset="" className='img-fluid' />
              <img src={Gimg13} alt="" srcset="" className='img-fluid' />
              <img src={Gimg14} alt="" srcset="" className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Gallery
