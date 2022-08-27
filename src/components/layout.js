import React from 'react';
import "../styles/layout.css";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";


export default function Layout(props) {
  return (
    <section>
        <header>
            <div className='container'>
                <Link to="/"><img className='logo' src={Logo} alt="Logo"/></Link>
                <ul className='navList'>
                    <Link to="/contact"><li>Contact</li></Link>
                    <li>What we are cooking</li>
                </ul>
            </div>
        </header>
        <main>
            {props.children}
        </main>
    </section>
  )
}
