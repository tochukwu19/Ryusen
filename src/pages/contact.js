import React, {useEffect} from 'react';
import "../styles/contact.css";
import Layout from '../components/layout';
import Mailform from '../components/mail-form';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Contact(props) {

  const MAILCHIMP_URL = process.env.REACT_APP_PUBLIC_MAILCHIMP_URL;

  useEffect(() => {
    console.log(MAILCHIMP_URL)
  }, [MAILCHIMP_URL])

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
        <div className='contact-section'>
            <div className='contact-content'>
                <h2 
                  data-aos="fade-up" 
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                >Just like you, we’ve been‍ cooking 👩‍🍳 <br/>
                Be the first to know when<br className='mobileBr'/> <div>it’s ready!</div>🔥</h2>
            </div>

            <MailchimpSubscribe
              url={ MAILCHIMP_URL }
              render={ ( props ) => {
                const { subscribe, status, message } = props || {};
                return (
                  <Mailform
                    status={ status }
                    message={ message }
                    onValidated={ formData => subscribe( formData ) }
                  />
                );
              } }
            />
          </div>
       </Layout>
    </>
  )
}
