import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';
import App from './App';
import { CustomizationProvider } from './hooks/customizationContext';

// import Footer from './components/common/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CustomizationProvider> */}
    <App />
    {/* </CustomizationProvider> */}
  </React.StrictMode>
);


