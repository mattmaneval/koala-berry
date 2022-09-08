import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Components
import App from './App';
import SVGSprite from './components/SVGSprite/index';
import ScrollToTop from './helpers/ScrollToTop/index';

// Styles
import GlobalStyle from './styles/GlobalStyle';

// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <SVGSprite />
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
