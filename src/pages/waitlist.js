import React from 'react';
import "../styles/waitlist.css";
import Layout from '../components/layout';
import Illustration from "../images/dispatcher.png";
import Vegetables from "../images/vegetables.png";



export default function Waitlist(props) {
  return (
    <>
       <Layout>
          <div className='main-section'>
            <div className='waitlist-container'>
                <h2>Restock groceries <div className='ampersand'>deliver</div><br/> meals to your customers <br/> <div className='scribble'>all in one place</div></h2>
                <button>I definitely need this!</button>
            </div>

            <footer>
                <img src={Illustration} className="dispatcher" alt="illustration"/>
                <div>
                    <h3>Helping online food vendors stay online </h3>
                    <p>We handle all the difficult parts so you can focus on making meals for your customers.</p>
                    <img src={Vegetables} className="veggieImage" alt="Vegetables"/>
                </div>
            </footer>
          </div>
       </Layout>
    </>
  )
}
