import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mbo173s', 'template_2mj92ba', form.current, {
        publicKey: 't2vmkbTZaBRqzz03y',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email sent successfully!')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id="Clients" className='contact'>
        <h1 className='contactTitle'>Clients</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name="your_name"/>
            <input type="email" className="email" placeholder='Your Email' name="your_email"/>
            <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
            <button type="submit" value="Send" className='submitBtn'>Submit</button>  {/* replace with your own email address */}
        </form>
    </div>
  )
}

export default Contact

