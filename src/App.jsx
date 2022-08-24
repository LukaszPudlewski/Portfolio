import Intro from "./components/intro/intro";
import About from "./components/about/about";
import ProjectList from "./components/projectList/projectList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { useContext, useState } from "react";
import { ThemeContext, ThemeProvider } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return <div
    style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}
  >
      <Toggle />
      <Intro/>
      <About/>
      <ProjectList/>
      <Contact/>
        </div>;
};

export default App;