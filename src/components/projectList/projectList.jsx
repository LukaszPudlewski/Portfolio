import React, { useContext } from 'react'
import './projectList.css'
import Project from "../project/project"
import {projects} from "../../data"
import { ThemeContext } from '../../context'

const ProjectList = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return <div className='pl'
    style={{
      backgroundColor: darkMode ? "#151515" : "#b0cec4",
      color: darkMode && "white",
    }}
  >
        <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
        </div>
    <div className="pl-list">
      {projects.map((item) => (
        <Project key={item.id} img={item.img} link={item.link} desc={item.desc}/> 
      ))}
    </div>
    </div>
  
}

export default ProjectList