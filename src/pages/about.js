import React from 'react';
import "../styles/about.css";
import Layout from '../components/layout';
import AboutImg from "../images/about.png";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function About(props) {

  AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    once: true
  });

  return (
    <>
       <Layout>
           <section className='about'>
                <div className='container'>
                    <div className='about-text'>
                        <h2
                          data-aos="fade-down" 
                          data-aos-duration="2000"
                          data-aos-easing="ease-in-out" 
                        >A full course meal</h2>
                        <p
                          data-aos="fade-down" 
                          data-aos-duration="2000"
                          data-aos-easing="ease-in-out"
                          data-aos-delay="500"
                        >We imagine a world for food businesses, where operating and making profit is as seamless as the tap of a few buttons.</p>
                        <p
                          data-aos="fade-down" 
                          data-aos-duration="2000"
                          data-aos-easing="ease-in-out"
                          data-aos-delay="1000" 
                        >As an online food vendor, your two greatest assets are money and time and we help you save both. On ryusen, you can buy all the groceries and supplies you need to cook at highly affordable prices and deliver meals to your customers easily and quickly. This way you can focus on just making tasty meals and profit. It’s a full course meal on the ryusen side of life. Who wouldn’t want in?</p>
                        <button 
                          data-aos="fade-in" 
                          data-aos-duration="2000"
                          data-aos-easing="ease-in-out"
                          data-aos-delay="1500"
                          className='btn'
                        >Count Me In!</button>
                    </div>
                    <img 
                      data-aos="fade-down" 
                      data-aos-duration="2000"
                      data-aos-easing="ease-in-out"
                      src={AboutImg} 
                      className="about-image" 
                      alt="aboutimage"/>
                </div>
           </section>
       </Layout>
    </>
  )
}
