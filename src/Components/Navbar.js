import React from 'react';
import './styles/Navbar.css';


class Navbar extends React.Component {

    // this.setState({ navbar: document.getElementsByClassName("Navbar_navigation") },
    // () => {})

    render() {
        //Funcionalidad del navbar sticky


        return (
            <div className='Navbar1'>
                <nav className='Navbar_navigation'>
                    <div className='Navbar_items'>
                        <ul>
                            <li><a href='#inicio'>Inicio</a></li>
                            <li><a href='#Galery'>Galería</a></li>
                            <li><a href='#Footer'>Contacto</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;