import React from 'react';
import "./styles/ImageContainer.css";

class ImageContainer extends React.Component {

   imageClicked = (e, url, artistName, artistId) => {
      e.preventDefault();
      this.props.imageSelected(url);
      this.props.artistSelected(artistName, artistId);
   }

   render() {
      return (
         <a className="OpenImage" ref="linkImg" href="#" onClick={(e) => this.imageClicked(e, this.props.URLImage, this.props.artistName, this.props.artistId)}>
            <img className="img-thumbnail ImageLoaded" src={this.props.URLImage} alt="Renderización" />
         </a>
      );
   }
}

export default ImageContainer;