import React from 'react';
import logo from '../images/logo00.png';
import mathIcon from '../images/math.gif';
import vectorIcon from '../images/vector.gif';
import listIcon from '../images/list.gif';
import pillsIcon from '../images/pills.gif';
import databaseIcon from '../images/database.gif';
import PromoteIcon from '../images/promote.gif';

function Homecards() {
     return (
          <div>

               <section id="poitsSection">
                    <div className="container-fluid">
                         <div className="row justify-content-center">
                              <div className="col-sm-12 col-md-8 col-lg-8 text-center ">
                                   <img src={logo} alt="" className="img-fluid" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="3000" />
                                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ullam ea delectus nostrum animi quae officia non sapiente molestiae expedita
                                        accusantium, excepturi velit distinctio fugit aliquam quod, quos temporibus dolor ab doloribus? Vitae, facere magnam.</p>
                              </div>
                              <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                                   <div className="row justify-content-center px-3 ">
                                        <div className="col-sm-12 col-md-3 col-lg-3 ">
                                             <div className="circle circlebox" data-aos="slide-down" >
                                                  <img src={mathIcon} alt="" srcset="" className='img-fluid' />
                                             </div>
                                             <h5 className="pointCard cardbg1" data-aos="slide-up">War equipment turns into educational tools.</h5>
                                        </div>
                                        <div className="col-sm-12 col-md-3 col-lg-3 ">
                                             <div className="circle circlebox1" data-aos="slide-down">
                                                  <img src={vectorIcon} alt="" srcset="" className='img-fluid' />
                                             </div>
                                             <h5 className="pointCard cardbg2" data-aos="slide-up">Religious disharmony turns into religious peace.</h5>
                                        </div>
                                        <div className="col-sm-12 col-md-3 col-lg-3 ">
                                             <div className="circle circlebox2" data-aos="slide-down">
                                                  <img src={listIcon} alt="" srcset="" className='img-fluid' />
                                             </div>
                                             <h5 className="pointCard cardbg3" data-aos="slide-up">Garbage and barren land turns into clean environment and fertile soil.</h5>
                                        </div>
                                   </div>
                                   <div className="row justify-content-center px-3 ">
                                        <div className="col-sm-12 col-md-3 col-lg-3 ">
                                             <div className="circle circlebox3" data-aos="slide-down">
                                                  <img src={pillsIcon} alt="" srcset="" className='img-fluid' />
                                             </div>
                                             <h5 className="pointCard cardbg4" data-aos="slide-up">Dirty and muddy water turns into clear and flowing water.</h5>
                                        </div>
                                        <div className="col-sm-12 col-md-3 col-lg-3 ">
                                             <div className="circle circlebox4" data-aos="slide-down">
                                                  <img src={databaseIcon} alt="" srcset="" className='img-fluid' />
                                             </div>
                                             <h5 className="pointCard cardbg5" data-aos="slide-up">Individualism to community living.</h5>
                                        </div>
                                        <div className="col-sm-12 col-md-3 col-lg-3 ">
                                             <div className="circle circlebox5" data-aos="slide-down">
                                                  <img src={PromoteIcon} alt="" srcset="" className='img-fluid' />
                                             </div>
                                             <h5 className="pointCard cardbg6" data-aos="slide-up">Deforestation into afforestation.</h5>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* <!-- our classNamees information --> */}

               {/* <div className="container my-5">
        <div className="row justify-content-around mt-5" id="classNameesIMG">
                <div className="col-sm-12 col-md-3 col-lg-3 cards objective   " >
                     <h3>OBJECTIVE</h3>
                     <p className="mx-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia architecto ex autem a inventore unde quae sint saepe
                         enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quidem, ratione voluptatibus .</p>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 cards vission ">
                     <h3>VISSION</h3>
                     <p className="mx-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia architecto ex autem a inventore unde quae sint saepe
                         enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quidem, ratione voluptatibus .</p>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 cards mission " >
                     <h3>MISSION</h3>
                     <p className="mx-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt mollitia architecto ex autem a inventore unde quae sint saepe
                         enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quidem, ratione voluptatibus .</p>
                </div>
           </div>
        </div> */}
          </div>
     )
}

export default Homecards
