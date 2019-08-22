import React from 'react';

import './styles/Footer.css';
import Logo from '../img/iconok.png';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';
import instagram from '../img/instagram.png';


class Footer extends React.Component {
   render() {
      return (
         <div id="Footer" className="container-fluid">
            <div className="row d-flex justify-content-center">
               <div className="Footerlogo col-md-2 d-flex justify-content-center align-items-center">
                  <img src={Logo} alt="Logo icon" />
               </div>
               <div className="Footercontact col-md-3 d-flex flex-column justify-content-center align-items-center">
                  <h6>Info@wemaketattoos.com</h6>
                  <h6>3012647584</h6>
                  <h6>BOGOTÀ - COLOMBIA</h6>
               </div>
               <div className="Footersocial col-md-3 col-sm-6 d-flex justify-content-around align-items-center">
                  <img src={facebook} alt="facebook" />
                  <img src={twitter} alt="twitter" />
                  <img src={instagram} alt="instagram" />
               </div>
            </div>
         </div>
      );
   }
}
export default Footer;
