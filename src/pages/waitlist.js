import React from 'react';
import "../styles/waitlist.css";
import Layout from '../components/layout';
import Illustration from "../images/dispatcher.png";
import Vegetables from "../images/vegetables.png";
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Waitlist(props) {

  const Navigate = useNavigate();

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
          <div className='main-section'>
            <div className='waitlist-container'>
                <h2 
                  data-aos="fade-up" 
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out">Restock groceries <div className='ampersand'>deliver</div><br/> meals to your customers <br/> <div className='scribble'>all in one place</div></h2>
                <button 
                    data-aos="fade-up" 
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="1500" onClick={()=> Navigate("/contact", {
                  replace: true
                })}>I definitely need this!</button>
            </div>

            <footer>
                <img src={Illustration} className="dispatcher" alt="illustration"/>
                <div>
                    <h3 data-aos="fade-up" 
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-delay="500"
                        >
                        Helping online food vendors stay online 
                    </h3>
                    <p  data-aos="fade-up" 
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-delay="1000"
                        >
                        We handle all the difficult parts so you can focus on making meals for your customers.
                    </p>
                    <img src={Vegetables} className="veggieImage" alt="Vegetables"/>
                </div>
            </footer>
          </div>
       </Layout>
    </>
  )
}
