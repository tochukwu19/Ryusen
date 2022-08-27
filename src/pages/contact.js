import React from 'react';
import "../styles/contact.css";
import Layout from '../components/layout';



export default function Waitlist(props) {
  return (
    <>
       <Layout>
            <div className='contact-content'>
                <h2>Just like you, we’ve been‍ cooking 👩‍🍳 <br/>
                Be the first to know when<br className='mobileBr'/> <div>it’s ready!</div>🔥</h2>
            </div>

            <div className='form-container'>
                <div className='form-field'>
                    <label>Full Name</label>
                    <input placeholder='Jane Doe' type="text"/>
                </div>
                <div className='form-field'>
                    <label>Email Address</label>
                    <input placeholder='example@email.com' type="email"/>
                </div>
                <button>Count me in!</button>
            </div>
       </Layout>
    </>
  )
}
