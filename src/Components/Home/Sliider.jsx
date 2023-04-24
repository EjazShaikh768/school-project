import React from 'react';
import img7 from '../images/activity/7.png';
import img9 from '../images/activity/9.jpg';
import img14 from '../images/activity/14.jpg';

function Sliider() {
  return (
    <div>
       <div id="carouselExample" className="carousel slide" >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={img7} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={img9} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={img14} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden ">Next</span>
                </button>
                <div className="col-12 bg-light">
                    <h6 className="text-dark py-3"> <marquee behavior="" direction=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laborum reprehenderit vero repellat, neque saepe perferendis! Quas eos dicta doloribus!</marquee> </h6>
                </div>
              </div>
    </div>
  )
}

export default Sliider
