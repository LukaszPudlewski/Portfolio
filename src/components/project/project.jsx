import React, { useContext } from 'react'
import { ThemeContext } from '../../context';
import './project.css'

const Project = ({img, link, desc}) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return <div className='p'
    style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}
  >
    <p className="p-desc"
    style={{
      backgroundColor: darkMode ? "#222" : "#f5f5f5",
      color: darkMode && "white",
    }}
    >{desc}</p>
    <a href={link} target="_blank" rel="noreferrer">
      <img src={img} alt="projectimg" className="p-img" />
    </a>
    </div>
  
}

export default Project