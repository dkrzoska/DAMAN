import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { colors, fonts } from './components/settings/settings';

const Basestyle = createGlobalStyle`
  body {
    max-width: 1200px;
    // min-height: calc(100vh - 110px);
    font-family: ${fonts.font_base};
    color: ${colors.color_dark_gray};
    margin: 0 auto;
  }`

ReactDOM.render(
  <React.StrictMode>
    <Basestyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();