import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LangProvider, ThemeProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);