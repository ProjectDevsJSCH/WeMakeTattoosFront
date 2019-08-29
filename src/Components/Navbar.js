import React from 'react';
import './styles/Navbar.css';
// import $ from 'jquery';

// $('[data-toggle="tooltip"]').tooltip();
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
                            <li><a data-toggle="tooltip" title="Titulo" href='#inicio'>Inicio</a></li>
                            <li><a href='#Gallery'>Galería</a></li>
                            <li><a href='#Footer'>Contacto</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;