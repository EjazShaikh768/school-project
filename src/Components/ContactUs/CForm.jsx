import React from 'react'

function CForm() {
  return (
    <div>
    <div class="row justify-content-center my-5">
        <div class="col-sm-12 col-md-6 col-lg-5 my-5"  id="contactForm">
                <fieldset>
                    <legend> Contact Form</legend>
                  <center> <div class="divider"></div></center>
                    <form action="" method="post">
                        <div class="form-group"  data-aos="fade-up" data-aos-easing="ease-out-cubic"  data-aos-duration="2000">
                            <label for="">Full Name</label>
                            <input type="text" class="form-control" name="fullname" />
                        </div>
                        <div class="form-group"  data-aos="fade-up" data-aos-easing="ease-out-cubic"  data-aos-duration="3000">
                            <label for="">Contact Number</label>
                            <input type="text" class="form-control" name="fullname"/>
                        </div>
                        <div class="form-group"  data-aos="fade-up" data-aos-easing="ease-out-cubic"  data-aos-duration="4000">
                            <label for="">Email</label>
                            <input type="text" class="form-control" name="fullname"/>
                        </div>
                        <div class="form-group"  data-aos="fade-up" data-aos-easing="ease-out-cubic"  data-aos-duration="4000">
                            <label for="">Subject</label>
                            <input type="text" class="form-control" name="fullname"/>
                        </div>
                        <div class="form-group"  data-aos="fade-up" data-aos-easing="ease-out-cubic"  data-aos-duration="4000">
                            <label for="">Message</label>
                            <textarea name="msg" class="form-control" id=""  rows="5"></textarea>
                        </div>
                        <div class="form-group mt-3 text-center"  data-aos="fade-up" data-aos-easing="ease-out-cubic"  data-aos-duration="4000">
                           <button class="btn px-5">SUBMIT</button>
                        </div>
                    </form>
                </fieldset>
            </div>
    </div>
    </div>
  )
}

export default CForm
