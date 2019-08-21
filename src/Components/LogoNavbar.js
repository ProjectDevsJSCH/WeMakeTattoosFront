import React from 'react';
import './styles/LogoNavbar.css';
import LogoNav from '../img/iconok.png'


class LogoNavbar extends React.Component {

   render() {
      return (
         <div  id='inicio' className="LogoHeader">
            <div className='Navbar_logo'>
               <a href='#inicio'><img src={LogoNav} alt='' className='NavLogo'></img>
               </a>
            </div>
         </div>
      );
   }
}

export default LogoNavbar;