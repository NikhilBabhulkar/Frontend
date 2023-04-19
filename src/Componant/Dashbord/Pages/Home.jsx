import React from 'react'
import "./Home.css"
import About from "../../CSS/about.jpg"
import AppStore from "../../CSS/appstore_icon.png"
import GooglePay from "../../CSS/googleplay.png"
import Mainimg from "../../CSS/main.svg"
import VirtualD from "../../CSS/virtualdoctor.png"
import Blog from "../../CSS/report.png"
import Backgroundimg from "../../CSS/background.png"

// Partner 
import partner1 from "./Images/partners_1.jpg"
import partner2 from "./Images/partners_2.jpg"
import partner3 from "./Images/partners_3.jpg"
import partner4 from "./Images/partners_4.jpg"
import partner5 from "./Images/partners_5.jpg"
import partner6 from "./Images/partners_6.jpg"

// Services 
import service1 from "./Images/services_1.jpg"
import service2 from "./Images/services_2.jpg"
import service3 from "./Images/services_3.jpg"
import service4 from "./Images/services_4.jpg"
import service5 from "./Images/services_5.jpg"
import service6 from "./Images/services_6.jpg"
import Navbar from './Navbar';


function Home() {
    return (
        <>
            <Navbar/>
            <div id='img'>
                <div>
                    <img className='imagebg' src={Mainimg} alt="" />
                </div>
                <h1>Track Your <span>Health</span> </h1>
                <h2>Healthspek: Your Personal Health Record</h2>
            </div>

            {/* background image is added */}
            <div className="backgroundimage">
                <img src={Backgroundimg} alt="" />
            </div>

            {/* <div className="slider_serction">
                <Slider />
            </div> */}


            <div className="midsection">
                <div className="about">
                    <div className="aboutuscontent">
                        <div className="imgabout">
                            <img src={About} alt="" />
                        </div>

                        <p>
                            <h2>About Healthspek</h2>
                            <h3>Healthspek: Your Personal Health Record</h3>
                            Healthspek is a free tool that manages personal and family health records by using an easy-to-use iPad app and mobile website to track, collect and safely disseminate healthcare information. Your data is duplicated and stored on Healthspek's secure cloud server--making it accessible 24/7 from multiple devices, anywhere in the world.

                            Our developers have created a unique product that helps users take ownership over doctors’ electronic medical records, legal documents and automated refill reminders, insurance cards and more. Plus, account holders can manage medications, medical charts and images, track vitals, access care, and record physician, insurance and emergency contacts, among other features.

                            Healthspek also receives medical records and facilitates electronic communications with providers. With the patient’s permission, doctors can access records through Healthspek’s www.chartnow.com--providing convenience for both you and your physician.
                        </p>
                    </div>

                </div>
            </div>

            <div className="servises">
                <h1>What Facilities We Provided</h1>
                <div className='services-flex'>

                    <div className="box">
                        <div className="img">
                            <img src={VirtualD} alt="" />
                        </div>
                        <h3>Online Doctor Consultation</h3>
                        <div className="content">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias, facere assumenda omnis commodi fugit, labore numquam voluptate temporibus quas aut ex impedit sequi explicabo at odio laudantium, odit vitae.
                        </div>
                    </div>

                    <div className="box">
                        <div className="img">
                            <img src="https://www.odtap.com/wp-content/uploads/2019/03/health-care-services.png" alt="" />
                        </div>
                        <h3>Online Doctor Consultation</h3>
                        <div className="content">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias, facere assumenda omnis commodi fugit, labore numquam voluptate temporibus quas aut ex impedit sequi explicabo at odio laudantium, odit vitae.
                        </div>
                    </div>

                    <div className="box">
                        <div className="img">
                            <img src="https://images.all-free-download.com/images/graphicwebp/medical_service_background_smartphone_clinic_elements_sketch_6849408.webp" alt="" />
                        </div>
                        <h3>Online Doctor Consultation</h3>
                        <div className="content">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias, facere assumenda omnis commodi fugit, labore numquam voluptate temporibus quas aut ex impedit sequi explicabo at odio laudantium, odit vitae.
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial Section Start */}

            <div className="testimonial">
                <h1>
                    Testimonials
                </h1>
                <p>
                    Healthspek takes great pride in its user satisfaction, and in carefully evaluating feedback to develop the most comprehensive platform possible.
                    We've been able to get to know some of Healthspek's early adopters. Here's what they have to say about the app:
                </p>
                <h2>What Others Are Saying About Healthspek</h2>
                <p> <span>Mike's Story</span> <br />
                    <p> Where He Calls Home: Texas </p>

                    Mike lives with his wife in Texas and travels often for work. As someone with a number of medical issues, he needed a better way to keep his important medical information with him while he was away from home.

                    <p>  After buying an iPad two years ago, Mike began searching through the Apple Store for an app that could serve as a repository for his medical information. What he needed was a place to store his full medical history, track his vitals, manage his medications and more. </p>

                    <p>   Healthspek was one of the first apps he came across, and when compared with the other health record tools he found, Healthspek was the best fit for Mike because it was the only app that could file everything he needed to keep track of on one easy-to-use platform. It also served a critical role for Mike during a recent medical emergency. </p>
                    <a href="">Read more...</a>
                </p>

                <p> <span>Donny's Story</span> <br />


                    <p>Where He Calls Home: Florida</p>
                    <p>     Donny P. had been looking for the best tool to manage his health records for a while, using a trial-and-error method to try out various applications--and paying up the $5 dollars for some. But he never found any one tool that suited all of his needs... until he downloaded the (free) Healthspek iPad app.</p>

                    <p>   Donny says he found Healthspek to be much more comprehensive than any other tool he'd tried, with specific features he needed and an appealing layout. Because Donny visits the doctor every three months to have lab work checked out due to an existing medical condition, he is always asked questions like, "what are your levels?" and when "when was your last shot?" He says being able to keep track and keep record his medical information in one application has been, and will continue to be, extremely impactful on his life. </p> <a href="">Read more...</a>  </p>

            </div>

            {/* Testimonial Section End */}

            {/* Blog Section */}

            <div className="Blog">
                <div className="blogname">
                    <h2>Our Blogs</h2>
                </div>
                <h1>
                    Latest from blog
                </h1>
                <div className="line"></div>

                <div className="blogmain">

                    <div className="blog">
                        <div className="img">
                            <img src={Blog} alt="" />
                        </div>
                        <div className="blog_content">
                            <h2>Blog Heading</h2>
                            <span>11/12/2003</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Hic, itaque dolores repellendus
                                commodi accusantium debitis quidem vero, porro, fugiat
                                possimus libero? Tempora in
                                vero autem libero deleniti incidunt numquam officia.
                            </p>
                        </div>

                        <div className='buttonblog'
                        ><button>Read More</button></div>
                    </div>

                    <div className="blog">
                        <div className="img">
                            <img src={Blog} alt="" />
                        </div>
                        <div className="blog_content">
                            <h2>Blog Heading</h2>
                            <span>11/12/2003</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Hic, itaque dolores repellendus
                                commodi accusantium debitis quidem vero, porro, fugiat
                                possimus libero? Tempora in
                                vero autem libero deleniti incidunt numquam officia.
                            </p>
                        </div>

                        <div className='buttonblog'
                        ><button>Read More</button></div>
                    </div>


                    <div className="blog">
                        <div className="img">
                            <img src={Blog} alt="" />
                        </div>
                        <div className="blog_content">
                            <h2>Blog Heading</h2>
                            <span>11/12/2003</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Hic, itaque dolores repellendus
                                commodi accusantium debitis quidem vero, porro, fugiat
                                possimus libero? Tempora in
                                vero autem libero deleniti incidunt numquam officia.
                            </p>
                        </div>
                        <div className='buttonblog'
                        ><button>Read More</button></div>

                    </div>


                </div>

            </div>

            {/* ------------------------------- */}

            {/* partner Section */}

            <div className="partner_section">
                <div className="heading">
                    <h1>
                        Partner With Us
                    </h1>
                </div>
                <div className="partner_content">
                    <p>  Healthspek is firmly entrenched at the forefront of the personal health records and precision medicine movement.  Our easy-to-use consumer healthcare platform has already empowered thousands of users to take control of their health records. </p>

                    <p>  Partnering with Healthspek gives your company the opportunity to reach these health-centric consumers while aligning your brand with one of the most innovative healthcare platforms on the market.</p>

                    <p> Contact us today to schedule a demo and see how Healthspek can help your company be an industry leader in health, wellness and technology. </p>
                </div>
                <h2>
                    Our Partners
                </h2>
                <div className="partners">
                    <img src={partner1} alt="" />
                    <img src={partner2} alt="" />
                    <img src={partner3} alt="" />
                    <img src={partner4} alt="" />
                    <img src={partner5} alt="" />
                    <img src={partner6} alt="" />

                </div>
                <h2>
                    Services and Products We Offer
                </h2>
                <div className="services">
                    <img src={service1} alt="" />
                    <img src={service2} alt="" />
                    <img src={service3} alt="" />
                    <img src={service4} alt="" />
                    <img src={service5} alt="" />
                    <img src={service6} alt="" />
                </div>
            </div>

            {/* Partner Section end */}

            <div className="footer">
                <div className="left">
                    <h1>Healthspek: Your Personal Health Record</h1>
                    <div>
                        <span>About Us</span>
                        <span>Demo</span>
                        <span>How It Works</span>
                        <span>Partner With Us</span>
                    </div>
                    <div>
                        <span>Newsroom</span>
                        <span>Blog</span>
                        <span>Newsletter</span>
                        <span>Stories</span>
                    </div>
                    <div>
                        <span>Support</span>
                        <span>Security</span>
                        <span>FAQs</span>
                        <span>Contact</span>
                    </div>
                </div>
                <div className="rights">
                    <img src={AppStore} alt="" />
                    <img src={GooglePay} alt="" />
                    <img src="https://www.healthspek.com/images/walgreens.png" alt="" />
                    <span>©2023 Healthspek. All rights reserved.</span>
                </div>
            </div>
        </>
    )
}

export default Home