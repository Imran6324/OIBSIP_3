import React from "react";
import './index.css'; 
import ReactDOM from "react-dom";
import App from "./components/App";
import ParticleBackground from "./ParticleBakground";
import reportWebVitals from './reportWebVitals';

 

ReactDOM.render(
       <div>
           <App/>
           <ParticleBackground />
        </div>,
     document.getElementById("root"));
reportWebVitals(); 