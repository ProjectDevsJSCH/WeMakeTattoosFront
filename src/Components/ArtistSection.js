import React from 'react';
import axios from 'axios';
import './styles/ArtistSection.css';

class ArtistSection extends React.Component {

   state = {
      artistName: "Nombre",
      age: 0,
      experience: 0,
      mail: "",
      number: "",
      address: "",
   }

   calculateAge(birthdate) {
      var ageDifMs = Date.now() - birthdate.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
   }

   fetchArtistInformation(idArtist) {
      axios({
         url: `https://localhost:44376/api/Artist/${idArtist}`,
         method: `get`
      }).then(result => {
         let queryResponse = result.data.response;
         this.setState({
            artistName: queryResponse.FullName,
            age: this.calculateAge(new Date(queryResponse.BirthDate)),
            experience: this.calculateAge(new Date(queryResponse.StartDate)),
            mail: queryResponse.Email,
            number: queryResponse.PhoneNumber,
            address: queryResponse.Address
         });
      }).catch({

      });
   }

   componentDidMount() {
      this.fetchArtistInformation(this.props.actualArtist);
   }
   
   componentDidUpdate() {
      this.fetchArtistInformation(this.props.actualArtist);      
   }

   render() {
      return (
         <div id="Artists" className="d-flex justify-content-center align-items-center">
            <div className="card artistCard">
               <div className="row no-gutters">
                  <div className="col-md-4">
                     <img src="..." className="card-img" alt="..." />
                  </div>
                  <div className="col-md-8">
                     <div className="card-body">
                        <h5 className="card-title">{this.state.artistName}</h5>
                        <ul className="list-group list-group-flush">
                           <li className="list-group-item"><b>Edad - </b>{this.state.age} años</li>
                           <li className="list-group-item"><b>Experiencia - </b>{this.state.experience} años</li>
                           <li className="list-group-item">{this.state.mail}</li>
                           <li className="list-group-item">{this.state.number}</li>
                           <li className="list-group-item">{this.state.address}</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default ArtistSection;