import React from 'react'

const Footer = () => {
  return (
    <>
        <footer id="footer">
        <div class="container">
            <div class="footer_wrapper">
                <div class="footer_info">
                    <img src="./images/footer_logo.png" alt="logo"/>
                    <p>At vero eos et accusamus et iusto odio dign ducimus qui blanditiis praesentium volup deleniti atque corrupti quos dolores et molestias excepturi sint occaecati </p>
                    <a href="mailto:credesign@gmail.com">credesign@gmail.com</a>
                </div>
                <div class="footer_link">
                    <h3 class="footer_title">Explore Link</h3>
                    <ul class="footer_menu">
                        <li>
                            <a href="#">about</a>
                        </li>
                        <li>
                            <a href="#">resume</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">blog</a>
                        </li>
                    </ul>
                </div>
                <div class="footer_link">
                    <h3 class="footer_title">My Services</h3>
                    <ul class="footer_menu">
                        <li>
                            <a href="#">UI/UX Design</a>
                        </li>
                        <li>
                            <a href="#">Mobile App</a>
                        </li>
                        <li>
                            <a href="#">Graphics Design</a>
                        </li>
                        <li>
                            <a href="#">Web Developer</a>
                        </li>
                    </ul>
                </div>
                <div class="footer_link">
                    <h3 class="footer_title">Follow me</h3>
                    <div class="social_link">
                        <a href="#" target="_blank" class="social_link_item">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#" target="_blank" class="social_link_item">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#" target="_blank" class="social_link_item">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#" target="_blank" class="social_link_item">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                    </div>
                    <address>
                        <i class="fa-solid fa-location-dot"></i>
                        <span>202 Dog Hill Lane Beloit, KS 67420</span>
                    </address>
                    <a href="#" class="footer_call">
                        <i class="fa-solid fa-phone-volume"></i>
                        1-800-915-6270
                    </a>
                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="container">
                <div class="copyright_wrapper">
                    <div>
                        <p class="copyright_text">All rights reserved &copy; 2023 Credesign</p>
                    </div>
                    <div class="terms_privacy">
                        <a href="#" class="copyright_text">Terms & Condition</a>
                        <a href="#" class="copyright_text">Privacy policy</a>
                    </div>
                </div>
            </div>
        </div>
     </footer>
    </>
  )
}

export default Footer