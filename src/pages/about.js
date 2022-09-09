import React from 'react';
import "../styles/about.css";
import Layout from '../components/layout';
import AboutImg from "../images/about.png";



export default function About(props) {

  

  return (
    <>
       <Layout>
           <section className='about'>
                <div className='container'>
                    <div className='about-text'>
                        <h2>A full course meal</h2>
                        <p>We imagine a world for food businesses, where operating and making profit is as seamless as the tap of a few buttons.</p>
                        <p>As an online food vendor, your two greatest assets are money and time and we help you save both. On ryusen, you can buy all the groceries and supplies you need to cook at highly affordable prices and deliver meals to your customers easily and quickly. This way you can focus on just making tasty meals and profit. It’s a full course meal on the ryusen side of life. Who wouldn’t want in?</p>
                        <button className='btn'>Count Me In!</button>
                    </div>
                    <img src={AboutImg} className="about-image" alt="aboutimage"/>
                </div>
           </section>
       </Layout>
    </>
  )
}
