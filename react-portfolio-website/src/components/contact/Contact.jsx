import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RxDiscordLogo} from 'react-icons/rx'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sitw7n9', 'template_lqfyf9n', form.current, 'JD9fnxTKPmzkB77e7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ichetanmittal@gmail.com</h5>
            <a href='mailto:ichetanmittal@gmail.com'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <RxDiscordLogo className='contact__option-icon'/>
            <h4>Discord</h4>
            <h5>CDAO</h5>
            <a href='https://discord.gg/yKYWCchsrb'>Join the Server</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp Community</h4>
            <h5>CDAO</h5>
            <a href='https://chat.whatsapp.com/FAgHrzwXT7QD875CRuvqXy'>Join Now</a>
          </article>
        </div>
      {/* End of Contact Options */}

      <form ref={form} onSubmit={sendEmail}>
         <input type='text' name='name' placeholder='Your Full Name' required/>
         <input type='email' name='email' placeholder='Your Email' required/>
         <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>

      </div>
    </section>
  )
}

export default Contact