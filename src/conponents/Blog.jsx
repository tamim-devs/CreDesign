import React from 'react'

const Blog = () => {
  return (
    <>
         <section id="blog">
        <div class="container">
            <div class="service_heading">
                <div class="subheading">
                    <div class="round">
                        <div class="round_inner"></div>
                    </div>
                    <h6>My Blog</h6>
                </div>
                <h2 class="sec_title">LATEST BLOG</h2>
            </div>
            <div class="blog_wrapper">
                <div class="blog_item">
                    <div class="blog_img">
                        <img src="./images/blog1.jpg" alt="img"/>
                    </div>
                    <div class="blog_info">
                        <span class="date">20 January, 2023</span>
                        <h3 class="blog_title">Become a UX/UI Designer With Career Foundry.</h3>
                        <a href="#" class="read_more_btn">Read More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div class="blog_item">
                    <div class="blog_img">
                        <img src="./images/blog1.jpg" alt="img"/>
                    </div>
                    <div class="blog_info">
                        <span class="date">20 January, 2023</span>
                        <h3 class="blog_title">Become a UX/UI Designer With Career Foundry.</h3>
                        <a href="#" class="read_more_btn">Read More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div class="blog_item">
                    <div class="blog_img">
                        <img src="./images/blog1.jpg" alt="img"/>
                    </div>
                    <div class="blog_info">
                        <span class="date">20 January, 2023</span>
                        <h3 class="blog_title">Become a UX/UI Designer With Career Foundry.</h3>
                        <a href="#" class="read_more_btn">Read More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default Blog