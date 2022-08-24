import Intro from "./components/intro/intro";
import About from "./components/about/about";
import ProjectList from "./components/projectList/projectList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import ToggleLang from "./components/toggleLang/ToggleLang";
import Favicon from "react-favicon";
import Smiley from './img/smile.png'
import { useContext} from "react";
import {  ThemeContext} from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return <div
    style={{
      backgroundColor: darkMode ? "#222" : "#c1dff4",
      color: darkMode && "white",
    }}

  >
      <Favicon url={Smiley}></Favicon>
      <ToggleLang/>
      <Toggle />
      <Intro/>
      <About/>
      <ProjectList/>
      <Contact/>
        </div>;
};

export default App;