import React, {useState, useRef} from 'react';
import "../styles/contact.css";
// import { decode } from 'html-entities';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../images/loading.gif"


export default function Mailform({status, message, onValidated}) {

    // const [ error, setError ] = useState(null);
    const [ email, setEmail ] = useState(null);
    const [ name, setName ] = useState(null);

    const nameRef = useRef(null);
    const emailRef = useRef(null);

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

        setTimeout(() => {
            if(isFormValidated || status === "success"){
                emailRef.current.value = "";
                nameRef.current.value = "";
    
                toast.success( 'You have been added to the waitlist successfully', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }, 3000);

    
        // On success return true
        return name && email && email.indexOf("@") > -1 && isFormValidated;
    }
    
  return (
    <div className='form-container'>
        <div className='form-field'>
            <label>Full Name</label>
            <input 
                placeholder='Jane Doe' 
                type="text"
                ref={nameRef}
                onChange={(event) => setName(event?.target?.value ?? '')}
            />
        </div>
        <ToastContainer/>
        <div className='form-field'>
            <label>Email Address</label>
            <input 
            ref={emailRef}
                placeholder='example@email.com' 
                onChange={(event) => setEmail(event?.target?.value ?? '')}
                type="email"
            />
        </div>
        <button className="btn" onClick={handleFormSubmit}>{status === "sending" ? <img src={Loader} alt="Loading"/> : "Count me in!"}</button>
    </div>
  )
}
