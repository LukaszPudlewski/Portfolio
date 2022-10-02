import React, { useContext } from 'react'
import { LangContext, ThemeContext } from '../../context';
import "./about.css"

const About = () => {
  const theme = useContext(ThemeContext);
  const lang = useContext(LangContext);
  const darkMode = theme.state.darkMode;
  const polish = lang.state.polish;
  return <div className="a"
    style={{
      backgroundColor: darkMode ? "#0e2934" : "#c1dff4",
      color: darkMode && "white",
    }}
  >
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="codingimg" className="a-img"/>
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">{polish ? 'O mnie' : 'About Me'}</h1>
            <p className="a-about">
            {polish ? `Cześć! Mam na imię Łukasz i jestem pasjonatem jeśli chodzi o uczenie się nowych rzeczy. Frontend sprawia mi w tej chwli najwięcej satysfakcji, ale zawsze jestem otwarty na nowe rzeczy i technologie. Moje największe marzenie dotyczące programowania to wziąc udział w tworzeniu dużych projektów takich jak nowoczesne gry, symulatory lub skomplikowane systemy. Technologie i języki z którymi czuję się najlepiej to: html, CSS, Javascript, React, Redux, Node, Express, JQuery, PHP, Bootstrap, Tailwind i trochę Java.` : `Hello! My name is Lukasz and I'm passionate about learning new things. Frontend is what I enjoy the most at this moment, but I'm always open to new things and technologies. My biggest coding-related dreams are to take part in creating big projects such as modern games, simulators or complicated systems. Techonolgies and languages I'm most familiar with are: html, CSS, Javascript, React, Redux, Node, Express, JQuery, PHP, Bootstrap, Tailwind and a bit of Java.`}
            </p>

        </div>
    </div>

}

export default About