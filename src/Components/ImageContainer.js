import React from 'react';
import "./styles/ImageContainer.css";

class ImageContainer extends React.Component {
   render() {
      return (
         <img className="img-thumbnail ImageLoaded" src={this.props.URLImage} alt="Renderización" />
      );
   }
}

export default ImageContainer;