import React from 'react';
import "../styles/layout.css";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import Gradient from "../images/blueshade.png";



export default function Layout(props) {
  return (
    <section>
        <header>
            <div className='container'>
                <img alt="gradient" src={Gradient} className="gradient"/>
                <Link to="/"><img className='logo' src={Logo} alt="Logo"/></Link>
                <ul className='navList'>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/about"><li>What we are cooking</li></Link>
                </ul>
            </div>
        </header>
        <main>
            {props.children}
        </main>
    </section>
  )
}
