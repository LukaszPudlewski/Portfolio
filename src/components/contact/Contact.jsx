import React, { useContext, useRef, useState } from 'react'
import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context'

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        
        emailjs.sendForm('service_kdfwvdk', 'template_27wqnhb', formRef.current, 'gXPEpnbGkb3IJgVpl')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return <div className='c'
      style={{
        backgroundColor: darkMode ? "#0e2934" : "#f0f8ff",
        color: darkMode && "white",
      }}
    >
        <div style={{backgroundColor: darkMode && "#103341"}} className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Contact</h1>
                <div className="c-info">
                 <div className="c-info-item">
                    <img src={Phone} alt="phoneicon" className="c-icon" />
                    <a href="tel:07894098033">07894098033</a>
                 </div>
                 <div className="c-info-item">
                    <img src={Email} alt="emailicon" className="c-icon" />
                    <a href="mailto:pudel1923@gmail.com">pudel1923@gmail.com</a>
                 </div>
                 <div className="c-info-item">
                    <img src={Address} alt="addressicon" className="c-icon" />
                    Telford, UK
                 </div>
                </div>
            </div>
            <div className="c-right">
                    <p className="c-desc">
                        Contact Form
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#18475a"}} type="text" placeholder="Name" name="user_name"/>
                        <input style={{backgroundColor: darkMode && "#18475a"}} type="text" placeholder="Subject" name="user_subject"/>
                        <input style={{backgroundColor: darkMode && "#18475a"}} type="text" placeholder="Email" name="user_email"/>
                        <textarea style={{backgroundColor: darkMode && "#18475a"}} rows="5" placeholder='Message' name='message'/>
                        <button style={{backgroundColor: darkMode && "#154603"}}>Submit</button>
                        {done && " Message sent."}
                    </form>
            </div>
        </div>
    </div>
  
}

export default Contact