import React, { useContext } from 'react'
import './toggleLang.css'
import Uk from '../../img/uk.png'
import Pl from '../../img/pl.png'
import { LangContext } from '../../context'

const ToggleLang = () => {
  const lang = useContext(LangContext);

  const handleClick = () => {
    lang.dispatch({ type: "TOGGLE"});
  }
  return (
    <div className="tl">
        <img src={Uk} alt="ukimg" className="tl-icon" />
        <img src={Pl} alt="plimg" className="tl-icon" />
        <div className="tl-button" onClick={handleClick}
        style={{ left: lang.state.polish ? 0 : 30}}>
          
        </div>
    </div>
  )
}

export default ToggleLang