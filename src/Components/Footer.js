import React from 'react';

import './styles/Footer.css';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';
import instagram from '../img/instagram.png';


class Footer extends React.Component {
   render() {
      return (
         <div id="Footer" className="container-fluid">
            <div className="row d-flex justify-content-center">
               <div className="Footercontact col-md-3 d-flex flex-column justify-content-center align-items-center">
                  <span>Info@wemaketattoos.com</span>
                  <span>3012647584</span>
                  <span>BOGOTÀ - COLOMBIA</span>
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
