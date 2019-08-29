import React from 'react';
import './styles/ArtistButton.css';


class ArtistButton extends React.Component {

   artistButtonClicked(){
      this.props.onClose();
      this.props.onClickArtistButton();
   }

   render() {
      return (
         <div className="container-fluid Buttonback d-flex align-items-center justify-content-center">
            <div className="row">
               <button onClick={()=>this.artistButtonClicked()} type="button" className="Artistbutton btn btn-outline-primary d-flex align-items-center"  >
                  <img className="Artistimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_VtKNaSY9P45ubfmj4nAuALZdhNZv67Pmo4J-6Tkta4IiMjFWQ" alt="Artist" />
                  <p className="Artistname">{this.props.actualArtist}</p>
               </button>
            </div>
         </div>
      );
   }
}
export default ArtistButton;