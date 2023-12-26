import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client'
// import './index.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';
// import reducer, { initialState } from './reducer';
// import { StateProvider } from './StateProvider';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
// <StateProvider initialState={initialState} reducer={reducer}>

//     <App />
//     </StateProvider>

//   </React.StrictMode>
// );


// // reportWebVitals();
