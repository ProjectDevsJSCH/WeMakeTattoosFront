import React from 'react';

import Navbar from '../Components/Navbar';
import LogoNavbar from "../Components/LogoNavbar";
import InformationArea from '../Components/InformationArea';
import GallerySection from '../Components/GallerySection';
// import ArtistSection from '../Components/ArtistSection';

import './styles/HomeWMTT.css'
import Footer from '../Components/Footer';


class HomeWMTT extends React.Component {
    state = {
        loading: true,
        error: null,
        data: {
            idElement: null,
            errorMessage: null,
            succeed: true,
            response: null,
            list: [],
        },
        nextPage: 1
    };

    handleChange = dataFromCategory => {
        this.setState({
            loading: false,
            data: {
                idElement: dataFromCategory.idElement,
                errorMessage: dataFromCategory.errorMessage,
                succeed: dataFromCategory.succeed,
                response: dataFromCategory.response,
                list: dataFromCategory.list,
            }
        });
    }

    componentDidMount() {
        this.fetchArtists();
    }

    fetchArtists = async () => {
        this.setState({ loading: true, error: null });
        try {
            const response = await fetch(
                `https://localhost:44376/api/Artist`, { mode: 'cors' }
            );

            const dataReceived = await response.json();
            this.setState({
                loading: false,
                data: {
                    idElement: dataReceived.idElement,
                    errorMessage: dataReceived.errorMessage,
                    succeed: dataReceived.succeed,
                    response: dataReceived.response,
                    list: dataReceived.list,
                }
            });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
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
                <GallerySection />
                {/* <ArtistSection /> */}
                <Footer/>
                
                
            </div>
        )
    }
}

export default HomeWMTT;