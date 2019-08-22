import React from 'react';
import axios from 'axios';

import ImageContainer from './ImageContainer';
import MasonryLayout from "./MasonryLayout";
import Pagination from "react-js-pagination";


import t6 from "../img/t6.jpg";
import './styles/GallerySection.css';
import Avatar from "../img/avatar-icon.png"

class GallerySection extends React.Component {

    state = {
        images: [],
        categories: [],
        actualCategory: 1,
        actualPage: 1,
        numberOfImages: 0
    }
    
    firstPagePerCategory() {
        let page = 1;
        axios({
            url: `https://localhost:44376/api/TatoosByCategory/${page}/${this.state.actualCategory}`,
            method: `get`
        }).then(result => {
            this.setState({ images: result.data.list, actualPage: page });
        }).then(result => {
            this.numberOfImagesPerCategroy(this.state.actualCategory);
        }).catch(error => {
        });
    }
    
    fetchImagesPerPage(){
        axios({
            url: `https://localhost:44376/api/TatoosByCategory/${this.state.actualPage}/${this.state.actualCategory}`,
            method: `get`
        }).then(result => {
            this.setState({images: result.data.list});
        }).catch({
            
        });
    }
    
    handlePageChange(pageNumber) {
        this.setState({ actualPage: pageNumber }, () => { this.fetchImagesPerPage() });
    }

    fetchCategories() {
        axios({
            url: `https://localhost:44376/api/Category`,
            method: `get`
        }).then(result => {
            this.setState({ categories: result.data.list });
        }).catch(error => {
        });
    }

    numberOfImagesPerCategroy() {
        axios({
            url: `https://localhost:44376/api/Images/${this.state.actualCategory}`,
            method: `get`
        }).then(result => {
            this.setState({ numberOfImages: result.data.idElement });
        }).catch(error => {
        });
    }

    componentDidMount() {
        this.firstPagePerCategory();
        this.fetchCategories();
    }

    render() {
        return (
            <div className="Gallerybackground container-fluid">
                <div className="row pl-5">
                    <div className="Categorybutton col-4">
                        <select ref="SelectCategory" className="browser-default custom-select" onChange={() => { this.setState({actualCategory: this.refs.SelectCategory.value}, () => {this.firstPagePerCategory()} )}}>
                            {this.state.categories.map(category => (
                                <option value={category.IdCategory}>{category.CategoryName}</option>
                            ))}
                        </select>

                    </div>
                </div>
                <div className="Gallerysection row">
                    <div className="Galleryimgs col-md-8 d-flex flex-column">
                        <div className="flex-fill">
                            <MasonryLayout columns={3} gap={25}>
                                {this.state.images.map(url => (
                                    <ImageContainer key={url.TattoosByArtistId} URLImage={url.TattooImgUrl} />
                                ))}
                            </MasonryLayout>
                        </div>
                        <div >
                            <Pagination
                                activePage={this.state.actualPage}
                                itemsCountPerPage={6}
                                totalItemsCount={this.state.numberOfImages}
                                pageRangeDisplayed={5}
                                itemClass="page-item Boxnumber"
                                linkClass="page-link Boxlink"
                                innerClass="pagination d-flex justify-content-center align-self-end"
                                onChange={this.handlePageChange.bind(this)}
                            />
                        </div>
                    </div>
                    <div className="Imgpreview col-md-4">
                        <div className="card" >
                            <img className="card-img-top" src={t6} alt="Card image cap"></img>
                            <div className="card-body">
                                <div className='ArtistProfile'>
                                    <div className='ArtistAvatar'>
                                        <img src={Avatar} alt="avatar1" />
                                    </div>
                                    <div className='ArtistName'>
                                        artista 1
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default GallerySection;