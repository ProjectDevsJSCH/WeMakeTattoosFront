import React from 'react';
import "./styles/ImageContainer.css";

class ImageContainer extends React.Component {

   imageClicked = (e, url) => {
      e.preventDefault();
      this.props.imageSelected(url);
   }

   render() {
      return (
         <a className="OpenImage" ref="linkImg" href="#" onClick={(e) => this.imageClicked(e, this.props.URLImage)}><img className="img-thumbnail ImageLoaded" src={this.props.URLImage} alt="Renderización" /></a>
      );
   }
}

export default ImageContainer;