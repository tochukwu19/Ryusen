import React, {useState, useRef} from 'react';
import "../styles/contact.css";
// import { decode } from 'html-entities';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../images/loading.gif";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Mailform({status, message, onValidated}) {

    // const [ error, setError ] = useState(null);
    const [ email, setEmail ] = useState(null);
    const [ name, setName ] = useState(null);

    const nameRef = useRef(null);
    const emailRef = useRef(null);

    AOS.init({
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        // once: true
      });

    const handleFormSubmit = () => {

        // setError(null);
    
        if ( !email || !name ) {
          toast.error( 'Please fill the required form fields', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          return null;
        }

        const nameSplicer = name.split(" ")
    
        const isFormValidated = onValidated({ EMAIL: email, MERGE1: nameSplicer[0], MERGE2: nameSplicer[1] });

    
        // On success return true
        return name && email && email.indexOf("@") > -1 && isFormValidated;
    }
    
  return (
    <>
        <div className='form-container'>
            <div 
                className='form-field'
                data-aos="fade-up" 
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
            >
                <label>Full Name</label>
                <input 
                    placeholder='Jane Doe' 
                    type="text"
                    ref={nameRef}
                    onChange={(event) => setName(event?.target?.value ?? '')}
                />
            </div>
            <ToastContainer/>
            <div 
                className='form-field'
                data-aos="fade-up" 
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                data-aos-delay="500"
            >
                <label>Email Address</label>
                <input 
                ref={emailRef}
                    placeholder='example@email.com' 
                    onChange={(event) => setEmail(event?.target?.value ?? '')}
                    type="email"
                />
            </div>
            <button 
                className="btn" 
                onClick={handleFormSubmit}
                data-aos="fade-up" 
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                data-aos-delay="1000"
            >{status === "sending" ? <img src={Loader} alt="Loading"/> : "Count me in!"}</button>
        </div>

        {status === "sending" ? <div className='response'>
            Adding you to the waitlist ...
        </div> : null}
        {status === "success" ? <div className='response'>
            Yayyy!! 🥳 You’ve been added to the waitlist 🎉
        </div> : null}
    </>
  )
}
