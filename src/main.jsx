import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {StateContextProvider} from "./StateContext/StateContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <StateContextProvider>
            <App/>
        </StateContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
