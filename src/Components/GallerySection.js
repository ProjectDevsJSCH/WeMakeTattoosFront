import React from 'react';
import axios from 'axios';

import ImageContainer from './ImageContainer';
import MasonryLayout from "./MasonryLayout";
import Pagination from "react-js-pagination";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import './styles/GallerySection.css';
import Avatar from "../img/avatar-icon.png";

class GallerySection extends React.Component {

    state = {
        images: [],
        categories: [],
        actualCategory: 1,
        actualPage: 1,
        numberOfImages: 0,
        previewImage: "",
        isOpen: false
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

    fetchImagesPerPage() {
        axios({
            url: `https://localhost:44376/api/TatoosByCategory/${this.state.actualPage}/${this.state.actualCategory}`,
            method: `get`
        }).then(result => {
            this.setState({ images: result.data.list });
        }).catch({

        });
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

    changePreviewImage(urlImage) {
        this.setState({ previewImage: urlImage, isOpen: true });
    }

    handlePageChange(pageNumber) {
        this.setState({ actualPage: pageNumber }, () => { this.fetchImagesPerPage() });
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
                        <select ref="SelectCategory" className="browser-default custom-select" onChange={() => { this.setState({ actualCategory: this.refs.SelectCategory.value }, () => { this.firstPagePerCategory() }) }}>
                            {this.state.categories.map(category => (
                                <option key={category.IdCategory} value={category.IdCategory}>{category.CategoryName}</option>
                            ))}
                        </select>

                    </div>
                </div>
                <div className="Gallerysection row d-flex justify-content-center align-items-center">
                    <div className="Galleryimgs col-lg-8 d-flex flex-column">
                        <div className="flex-fill">
                            <MasonryLayout columns={4} gap={25}>
                                {this.state.images.map(url => (
                                    <ImageContainer key={url.TattoosByArtistId} URLImage={url.TattooImgUrl} imageSelected={this.changePreviewImage.bind(this)} />
                                ))}
                            </MasonryLayout>
                            {this.state.isOpen && (
                                <Lightbox
                                    mainSrc={this.state.previewImage}
                                    onCloseRequest={() => this.setState({ isOpen: false })}
                                />
                            )}
                        </div>
                        <div >
                            <Pagination
                                activePage={this.state.actualPage}
                                itemsCountPerPage={16}
                                totalItemsCount={this.state.numberOfImages}
                                pageRangeDisplayed={5}
                                itemClass="page-item Boxnumber"
                                linkClass="page-link Boxlink"
                                innerClass="pagination d-flex justify-content-center align-self-end"
                                onChange={this.handlePageChange.bind(this)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default GallerySection;