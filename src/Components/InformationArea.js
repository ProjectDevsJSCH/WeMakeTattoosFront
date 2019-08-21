import React from 'react';
import Informationimgs from "../img/Informationbar.png";
import "./styles/InformationArea.css";

class InformationBar extends React.Component {
   render() {
      return (
         <div className="Informationbar">
            <div className="Informationtext">
               <h1>Encuentra tu artista ideal y conoce cientos de artistas nuevos</h1>
            </div>
            <div className="Informationimgs">
               <img src={Informationimgs} alt="Information"/>
            </div>
         </div> 
      );
   }
}

export default InformationBar;