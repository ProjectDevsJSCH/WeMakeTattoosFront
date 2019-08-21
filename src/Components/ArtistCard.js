import React from 'react';
import Artistimg from '../img/cosplayer.png';
import './styles/Artists.css'



class ArtistCard extends React.Component {

   calculateYears(oldDate) { // oldDate is a date
      var ageDifMs = Date.now() - oldDate.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

   render() {
      return (
         <div className="card">
            <div className="card-image circle waves-effect waves-block waves-light">
               <img className="activator" src={Artistimg} alt="ImageArtist" ></img>
            </div>
            <div className="card-content">
               <span className="card-title activator">{this.props.FullName}<i className="material-icons right">add_circle_outline</i></span>
               <p><a href="#inicio">Visitar Página</a></p>
            </div>
            <div className="card-reveal">
               <span className="card-title">{this.props.FullName}<i className="material-icons right">arrow_drop_down</i></span>
               <p className='cardinfo'>Edad :</p><p> {this.calculateYears(new Date(this.props.BirthDate))} años</p>
               <p className='cardinfo'>Experiencia :</p><p> {this.calculateYears(new Date(this.props.StartDate))} años</p>
               <p className='cardinfo'>Correo :</p><p> {this.props.Email}</p>
               <p className='cardinfo'>Nùmero de contacto :</p><p> {this.props.PhoneNumber}</p>
               <p className='cardinfo'>Direcciòn :</p><p> {this.props.Address}</p>
            </div>
         </div>

      );
   }
}


export default ArtistCard;