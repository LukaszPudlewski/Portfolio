import Intro from "./components/intro/intro";
import About from "./components/about/about";
import ProjectList from "./components/projectList/projectList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import ToggleLang from "./components/toggleLang/ToggleLang";
import { useContext, useState } from "react";
import { LangContext, ThemeContext, ThemeProvider } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const lang = useContext(LangContext);
  const darkMode = theme.state.darkMode;
  const polish = lang.state.polish;
  return <div
    style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}

  >
      <ToggleLang/>
      <Toggle />
      <Intro/>
      <About/>
      <ProjectList/>
      <Contact/>
        </div>;
};

export default App;