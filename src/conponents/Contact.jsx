import React from 'react'

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div class="container">
            <div class="service_heading">
                <div class="subheading">
                    <div class="round">
                        <div class="round_inner"></div>
                    </div>
                    <h6>My Contact</h6>
                </div>
                <h2 class="sec_title">I WANT TO HEAR FROM YOU</h2>
            </div>
            <div class="contact_wrapper">
                <div class="contact_form">
                    <form action="" method="">
                        <div class="input_group">
                            <input name="full_name" class="form_input" type="text" placeholder="Your Name"/>
                            <input name="email" class="form_input" type="email" placeholder="Your Email"/>
                            <input name="phone_number" class="form_input" type="text" placeholder="Your Phone"/>
                            <input name="subject" class="form_input" type="text" placeholder="Subject"/>
                        </div>
                        <textarea class="form_textarea" placeholder="Your masage">

                        </textarea>
                        <button type="submit" class="common_btn">Send Me Message</button>
                    </form>
                </div>
                <div class="contact_info">
                    <div class="contact_info_item">
                        <div class="icon_box">
                            <img src="./images/location.png" alt="icon"/>
                        </div>
                        <div class="contact_info_content">
                            <h4>Address</h4>
                            <p>202 Dog Hill Lane Beloit, KS 67420</p>
                        </div>
                    </div>
                    <div class="contact_info_item">
                        <div class="icon_box">
                            <i class="fa-solid fa-phone-volume"></i>
                        </div>
                        <div class="contact_info_content">
                            <h4>Phone</h4>
                            <p>+01589634755</p>
                        </div>
                    </div>
                    <div class="contact_info_item">
                        <div class="icon_box">
                            <i class="fa-regular fa-envelope"></i>
                        </div>
                        <div class="contact_info_content">
                            <h4>Email</h4>
                            <p>credesign@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>


    </>
  )
}

export default Contact