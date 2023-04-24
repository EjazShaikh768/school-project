import React from 'react';
import act1 from '../images/activity/1.jpeg';
import act2 from '../images/activity/13.jpg';
import act3 from '../images/activity/15.jpg';

function SideBlog() {
  return (
    <div>
         <div className="col-sm-12 text-left">
                <div className="row justify-content-end   mt-5">
                    <div className="col-sm-12 box1 border" data-aos="slide-left">
                        <img src={act1} className="img-fluid" alt="" />
                        <h2>Tree Activity</h2> 
                       <div className="textDiv px-4">
                       <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, laboriosam.</span> <br />
                        <span>Date : <b>18/03/2023</b></span><br/>
                        <span>Author : <b>Javed Maniyar</b> </span><br/>
                       </div>
                    </div>
                    <div className="col-sm-12 box1 mt-4 border" data-aos="slide-left">
                        <img src={act2} className="img-fluid" alt=""/>
                        <h2>Tree Activity</h2> 
                        <div className="textDiv px-4">
                       <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, laboriosam.</span> <br />
                        <span>Date : <b>18/03/2023</b></span><br/>
                        <span>Author : <b>Javed Maniyar</b> </span><br/>
                       </div>
                    </div>
                    <div className="col-sm-12 box1 mt-4 border" data-aos="slide-left">
                        <img src={act3} className="img-fluid" alt=""/>
                        <h2>Tree Activity</h2> 
                        <div className="textDiv px-4">
                       <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, laboriosam.</span> <br />
                        <span>Date : <b>18/03/2023</b></span><br/>
                        <span>Author : <b>Javed Maniyar</b> </span><br/>
                       </div>
                    </div>
                    <div className="col-sm-4 text-end  mt-4 " date-aos="fade-up">
                    <nav aria-label="Page  navigation example box1 ">
                    <ul className="pagination ">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                    </nav>
                    </div>
                </div>
            </div>     
    </div>
  )
}

export default SideBlog
