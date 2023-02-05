import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
const Join = () => {
  const form =useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    // go to emailjs.com/react
    emailjs.sendForm('service_kvro3uu', 'template_hqpf8sr', form.current, 'iJVaMi73JzSyrJyHp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>READY TO</span>
          <span>LEVEL UP</span></div>
        <div>
          <span>YOUR BODY</span>
          <span className='stroke-text'>WITH US?</span>
        </div>
      </div>
      <div className="right-j"></div>
      <form ref={form} className="email-container" onSubmit={sendEmail}>
        <input type="email" name='user_email' placeholder='Enter your email address' />
        <button className="btn btn-join">Join Now</button>
      </form>
    </div>
  )
}

export default Join