import React from 'react';

import Navbar from '../Components/Navbar';
import LogoNavbar from "../Components/LogoNavbar";
import InformationArea from '../Components/InformationArea';
import GallerySection from '../Components/GallerySection';
import ArtistSection from '../Components/ArtistSection';

import './styles/HomeWMTT.css'
import Footer from '../Components/Footer';


class HomeWMTT extends React.Component {

    constructor(props) {
        super(props);
        
        this.loadArtist = this.loadArtist.bind(this);
        this.openArtist = this.openArtist.bind(this);
    }
    
    state = {
        showArtist: false,
        artistId: 0
    };

    loadArtist(artistId){
        this.setState({artistId: artistId});
    }

    openArtist(){
        this.setState({showArtist: true});
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className='Background'>
                <LogoNavbar />
                <Navbar />
                <div className='Homeview'>
                    <div className="Boxflex">
                        <h1 className='Hometext'>We Make Tattoos</h1>
                    </div>
                </div>
                <InformationArea />
                <div id="Gallery"></div>
                <GallerySection onChange={this.loadArtist} onClickHome={this.openArtist}/>
                {this.state.showArtist && (
                    <ArtistSection actualArtist={this.state.artistId}/>
                )}
                {/* <Footer /> */}
            </div>
        )
    }
}

export default HomeWMTT;