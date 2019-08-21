import React from 'react';
import axios from 'axios';

import ImageContainer from './ImageContainer';
import MasonryLayout from "./MasonryLayout";

import t1 from "../img/t1.jpg";
import t2 from "../img/t2.jpg";
import t3 from "../img/t3.jpg";
import t4 from "../img/t4.jpg";
import t5 from "../img/t5.jpg";
import t6 from "../img/t6.jpg";
import './styles/GallerySection.css';
import Avatar from "../img/avatar-icon.png"

class Categories extends React.Component {
    constructor() {
        super();

        this.fetchArtists = this.fetchArtists.bind(this);
    }

    state = {
        Images: [t1, t2, t3, t4, t5, t6]
    }

    fetchArtists(idCategoria, element) {
        var checkbox = document.getElementById(element);
        if (checkbox.checked) {
            axios({
                url: `https://localhost:44376/api/ArtistCategory/getArtists/${idCategoria}`,
                method: `get`
            }).then(result => {
                console.log(result.data.list);
                this.props.newSearch(result.data);
            }).catch(error => {
            });
        }
    }

    fetchAllArtists(element) {
        var checkbox = document.getElementById(element);
        if (checkbox.checked) {
            axios({
                url: `https://localhost:44376/api/Artist`,
                method: `get`
            }).then(result => {
                console.log(result.data.list);
                this.props.newSearch(result.data);
            }).catch(error => {
            });
        }
    }


    render() {
        return (
            <div className="Galerybackground container-fluid">
                <div className="row pl-5">
                    <div className="Categorybutton col-4">
                        <select className="browser-default custom-select">
                            <option value="12">Todas las categorias</option>
                            <option value="1">Acuarela</option>
                            <option value="2">Estilo Chicano</option>
                            <option value="3">Ilustrativo</option>
                            <option value="4">Estilo Japones</option>
                            <option value="5">Maori</option>
                            <option value="6">Neo Tradicional</option>
                            <option value="7">Nueva Escuela</option>
                            <option value="8">Realismo</option>
                            <option value="9">Trabajos en Negro</option>
                            <option value="10">Tradicional</option>
                            <option value="11">Tribal</option>
                        </select>

                    </div>
                </div>
                <div className="Galerysection row">
                    <div className="Galeryimgs col-lg-8">
                        <MasonryLayout columns={3} gap={25}>
                            {this.state.Images.map(url => (
                                <ImageContainer URLImage={url} />
                            ))}
                        </MasonryLayout>
                        <div className="col-12">
                            <ul class="pagination pagination-sm d-flex justify-content-center">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="Imgpreview col-lg-4">
                        <div className="card" >
                            <img className="card-img-top" src={t6} alt="Card image cap"></img>
                            <div className="card-body">
                                <div className='ArtistProfile'>
                                    <div className='ArtistAvatar'>
                                        <img src={Avatar} alt="avatar1"/>
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
        {/*<div className="categoriesBox">
            <form className='categories' action="#">
                <p>
                    <label>
                        <input name="group1" id='All' type="radio" defaultChecked onClick={() => this.fetchAllArtists("All")}/>
                        <span>TODAS</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input name="group1" id="Realism" type="radio" onClick={() => this.fetchArtists(1, "Realism")}/>
                        <span>Realismo</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input name="group1" id='Watercolor' type="radio" onClick={() => this.fetchArtists(2, "Watercolor")}/>
                        <span>Acuarela</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input name="group1" id='Traditional' type="radio" onClick={() => this.fetchArtists(3, "Traditional")}/>
                        <span>Tradicional</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input name="group1" id='Tribal' type="radio" onClick={() => this.fetchArtists(4, "Tribal")}/>
                        <span>Tribal</span>
                    </label>
                </p>
            </form>
    </div>*/}
    }
}
export default Categories;