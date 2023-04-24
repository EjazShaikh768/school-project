import React from 'react';
import persident from '../images/persident.jpg';
import principle from '..//images/principle.jpeg';

function Homeabout() {
  return (
    <div>
      <section id="notice_Mission">
    <div className="container">
        <div className="row px-4 justify-content-between marginTop">
            <div className="col-sm-12 col-md-7 col-lg-7 ">
                <div className="card box noticBoard">
                    <div className="card-header ">
                    <h1><i className="fa-solid fa-newspaper"></i> Notice Board</h1>
                    </div>
                    <div className="card-body justify">
                        <h2>Notice Title Here</h2>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quibusdam quas cum tenetur rem temporibus modi praesentium illo pariatur ratione minus, eius aspernatur repudiandae officiis quasi, placeat ipsa molestiae magni eaque adipisci dolorum atque
                        ducimus quo fuga! Quasi tenetur tempora, architecto amet dolorem voluptatum eius aspernatur eligendi ipsa autem consequuntur.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quibusdam quas cum tenetur rem temporibus modi praesentium illo pariatur ratione minus, eius aspernatur repudiandae officiis quasi, placeat ipsa molestiae magni eaque adipisci dolorum atque
                            ducimus quo fuga! Quasi tenetur tempora, architecto amet dolorem voluptatum eius aspernatur eligendi ipsa autem consequuntur.</p>

                    </div>
                  </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 ">
                <div className="row  box mt-4 profileCard" data-aos="fade-down-left">
                    <div className="col-sm-6 ">
                       <img src={persident} alt="" className="img-fluid" />
                    </div>
                    <div className="col-sm-6 " >
                        <h3>WAHID PATEL</h3>
                        <p>Persident</p>
                    </div>
                </div>
                <div className="row box mt-4 profileCard" data-aos="fade-down">
                    <div className="col-sm-6 ">
                       <img src={principle} alt="" className="img-fluid" />
                    </div>
                    <div className="col-sm-6 ">
                        <h3>TASLIMA TADVI</h3>
                        <p>Principle</p>
                    </div>
                </div>
                <div className="row box mt-4 profileCard" data-aos="fade-down">
                    <div className="col-sm-6 ">
                       <img src={persident} alt="" className="img-fluid" />
                    </div>
                    <div className="col-sm-6 ">
                        <h3>AARIF SHAIKH</h3>
                        <p>Vice Priciple</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Homeabout
