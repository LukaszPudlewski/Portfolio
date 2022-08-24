import React, { useContext, useRef, useState } from 'react'
import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import Github from '../../img/github.png'
import emailjs from '@emailjs/browser';
import { LangContext, ThemeContext } from '../../context'

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
    const lang = useContext(LangContext);
    const darkMode = theme.state.darkMode;
    const polish = lang.state.polish;
    return <div className='c'
      style={{
        backgroundColor: darkMode ? "#0e2934" : "#f0f8ff",
        color: darkMode && "white",
      }}
    >
        <div style={{backgroundColor: darkMode && "#184110"}} className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">{polish ? 'Kontakt' : 'Contact'}</h1>
                <div className="c-info">
                 <div className="c-info-item">
                    <img src={Phone} alt="phoneicon" className="c-icon" />
                    <a href={polish ? 'tel:+447894098033' : "tel:07894098033"}>{polish ? '+447894098033' : '07894098033'}</a>
                 </div>
                 <div className="c-info-item">
                    <img src={Email} alt="emailicon" className="c-icon" />
                    <a href="mailto:pudel1923@gmail.com">pudel1923@gmail.com</a>
                 </div>
                 <div className="c-info-item">
                    <img src={Address} alt="addressicon" className="c-icon" />
                    Telford, UK
                 </div>
                 <div className="c-info-item">
                    <img src={Github} alt="githubicon" className="c-icon" />
                    <a href="https://github.com/LukaszPudlewski">github</a>
                 </div>
                </div>
            </div>
            <div className="c-right">
                    <p className="c-desc">
                        {polish ? 'Formularz Kontaktowy' : 'Contact Form'}
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#18475a"}} type="text" placeholder={polish ? 'Imię' : "Name"} name="user_name"/>
                        <input style={{backgroundColor: darkMode && "#18475a"}} type="text" placeholder={polish ? 'Temat' : "Subject"} name="user_subject"/>
                        <input style={{backgroundColor: darkMode && "#18475a"}} type="text" placeholder="Email" name="user_email"/>
                        <textarea style={{backgroundColor: darkMode && "#18475a"}} rows="5" placeholder={polish ? 'Wiadomość' : "Message"} name='message'/>
                        <button style={{backgroundColor: darkMode && "#154603"}}>{polish ? 'Wyślij' : 'Submit'}</button>
                        {done && " Message sent."}
                    </form>
            </div>
        </div>
    </div>
  
}

export default Contact