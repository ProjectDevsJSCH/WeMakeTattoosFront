import React from 'react';
import axios from 'axios';

import ImageContainer from './ImageContainer';
import MasonryLayout from "./MasonryLayout";
import Pagination from "react-js-pagination";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import ArtistButton from './ArtistButton';

import './styles/GallerySection.css';

class GallerySection extends React.Component {

    constructor(props) {
        super(props);
        this.numberColumns = this.numberColumns.bind(this);
        this.changeActualArtist = this.changeActualArtist.bind(this);
        this.changePreviewImage = this.changePreviewImage.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
    }

    state = {
        images: [],
        categories: [],
        actualCategory: 1,
        actualArtistName: "",
        actualArtistId: 0,
        actualPage: 1,
        numberOfImages: 0,
        previewImage: "",
        isOpen: false,
        columns: 0
    }

    // Peticiones

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

    // Callbacks

    changePreviewImage(urlImage) {
        this.setState({ previewImage: urlImage, isOpen: true });
    }

    changeActualArtist(artistName, artistId) {
        this.setState({ actualArtistName: artistName, actualArtistId: artistId }, () => { this.props.onChange(artistId) });
    }

    handlePageChange(pageNumber) {
        this.setState({ actualPage: pageNumber }, () => { this.fetchImagesPerPage() });
    }

    numberColumns() {
        if (window.innerWidth >= 500 && window.innerWidth < 699) {
            this.setState({ columns: 3 });
        } else if (window.innerWidth >= 700) {
            this.setState({ columns: 4 });
        } else {
            this.setState({ columns: 2 });
        }
    }

    closeLightbox() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    // Ciclo de vida

    componentDidMount() {
        this.firstPagePerCategory();
        this.fetchCategories();
        this.numberColumns();
        window.addEventListener('resize', this.numberColumns);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.numberColumns);
    }

    render() {
        return (
            <div className="Gallerybackground container-fluid">
                <div className="row">
                    <div className="Categorybutton col-sm-8 col-lg-4">
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
                            <MasonryLayout columns={this.state.columns} gap={15}>
                                {this.state.images.map(url => (
                                    <ImageContainer
                                        key={url.TattoosByArtistId}
                                        URLImage={url.TattooImgUrl}
                                        artistName={url.NameArtist}
                                        artistId={url.FK_IdArtist}
                                        artistSelected={this.changeActualArtist}
                                        imageSelected={this.changePreviewImage} />
                                ))}
                            </MasonryLayout>
                            {this.state.isOpen && (
                                <Lightbox
                                    mainSrc={this.state.previewImage}
                                    onCloseRequest={() => this.setState({ isOpen: false })}
                                    imageCaption={
                                        <ArtistButton
                                            actualArtist={this.state.actualArtistName}
                                            onClose={this.closeLightbox} 
                                            onClickArtistButton={this.props.onClickHome}/>
                                    }
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
                                onChange={this.handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default GallerySection;