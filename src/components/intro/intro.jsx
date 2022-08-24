import React, { useContext } from 'react'
import "./intro.css"
import Me from "../../img/me.png"
import { ThemeContext } from '../../context';

const Intro = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return <div className='intro'
      style={{
        backgroundColor: darkMode ? "#222" : "#e3e3e3",
        color: darkMode && "white",
      }}
    >
        <div className="intro-left">
            <div className="intro-left-wrapper">
                <h2 className="intro-hello">Hello, My name is</h2>
                <h1 className="intro-name">Lukasz Pudlewski</h1>
                <h3 className="intro-job">I'm a Software Developer</h3>
                <h3 className="intro-job2">specialized in:</h3>
                <div className="intro-title">
                    <div className="intro-title-wrapper">
                        <div className="intro-title-item">Frontend</div>
                        <div className="intro-title-item">CSS</div>
                        <div className="intro-title-item">React</div>
                        <div className="intro-title-item">Javascript</div>
                        <div className="intro-title-item">MERN</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="intro-right">
        <div className="intro-bg"></div>
            <img src={Me} alt="mypicture" className="intro-img"/>
        </div>
    </div>
  
}

export default Intro