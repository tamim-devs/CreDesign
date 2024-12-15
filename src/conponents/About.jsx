import React from 'react'

const About = () => {
  return (
    <>
      <section id="about">
        <div className="container">
            <div className="about_wrapper">
                <div className="about_img">
                    <img src="./images/about.jpg" alt="about"/>
                </div>
                <div className="about_content">
                    <div className="subheading">
                        <div className="round">
                            <div className="round_inner"></div>
                        </div>
                        <h6>About Me</h6>
                    </div>
                    <h2 className="sec_title">I Can Design Anything You Want</h2>
                    <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>
                    <div className="count_wrapper">
                        <div className="count_item">
                            <img src="./images/checkicon.png" alt=""/>
                            <div>
                                <span>350+</span>
                                <h5>Complete Project</h5>
                            </div>
                        </div>
                        <div className="count_item">
                            <img src="./images/clockicon.png" alt=""/>
                            <div>
                                <span>16+</span>
                                <h5>Year of experience</h5>
                            </div>
                        </div>
                    </div>
                    <ul className="about_list">
                        <li>
                            <img src="./images/tick.png" alt="icon"/>
                            <span>Work simple and cline design</span>
                        </li>
                        <li>
                            <img src="./images/tick.png" alt="icon"/>
                            <span>New idea and user friendly design</span>
                        </li>
                    </ul>
                    <button className="common_btn">Download My CV</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About