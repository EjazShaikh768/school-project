import React from 'react';
import Footer from '../Footer';
import SingleBlog from './SingleBlog';
import SideBlog from './SideBlog';
import background from "../images/greeny.jpeg";

function Blog() {
    return (
        <div>
            <section id="managmentBreadcamp">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-4 text-center">
                        <h1 className='mt-5' style={{ backgroundImage: `url(${background})` }}>
                           OUR BLOG'S
                        </h1>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row justify-content-between ">
                    <div className="col-sm-12 col-md-7">
                        <SingleBlog />
                    </div>

                    <div className="col-sm-12 col-md-4">
                        <SideBlog />
                    </div>

                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Blog
