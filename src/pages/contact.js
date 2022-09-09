import React, {useEffect} from 'react';
import "../styles/contact.css";
import Layout from '../components/layout';
import Mailform from '../components/mail-form';
import MailchimpSubscribe from 'react-mailchimp-subscribe';



export default function Contact(props) {

  const MAILCHIMP_URL = process.env.REACT_APP_PUBLIC_MAILCHIMP_URL;

  useEffect(() => {
    console.log(MAILCHIMP_URL)
  }, [MAILCHIMP_URL])
  

  return (
    <>
       <Layout>
        <div className='contact-section'>
            <div className='contact-content'>
                <h2>Just like you, we’ve been‍ cooking 👩‍🍳 <br/>
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
