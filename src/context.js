import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const INITIAL_STATE = { darkMode: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{state, dispatch}}>{props.children}</ThemeContext.Provider>
  );
};

export const LangContext = createContext();

const INITIAL_STATE_LANG = { polish: false };

const langReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { polish: !state.polish };
    default:
      return state;
  }
};

export const LangProvider = (props) => {
  const [state, dispatch] = useReducer(langReducer, INITIAL_STATE_LANG);

  return (
    <LangContext.Provider value={{state, dispatch}}>{props.children}</LangContext.Provider>
  );
};