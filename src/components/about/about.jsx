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
            {polish ? `The lorem ipsum is based on De finibus bonorum et malorum, a Latin text written by Cicero in 45 BC. Typographers and printers have used passages from this work for formatting since the 16th century. Many words have been added or modified over the centuries. As a result, the lorem ipsum is no longer considered Latin, even though it looks a lot like it.

The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. which translates to “Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.”` : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
            </p>

        </div>
    </div>

}

export default About