import React, {Component} from 'react';
import img1 from '../../images/pills-1.jpg';
import img2 from '../../images/pills-2.jpg';
import img3 from '../../images/pills-3.jpg';
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from "react-router-dom";
class Card extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h2 className="text-center">Our Top picks</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet consequatur dolor, dolore ex in incidunt itaque libero maiores minima molestiae mollitia neque nihil nobis, quas quibusdam sint voluptate voluptatibus!</p>
                    </div>
                </div>
                <div className="row">
                <MuiThemeProvider>
                                            <SearchBar
                                                onChange={() => console.log('onChange')}
                                                onRequestSearch={() => console.log('onRequestSearch')}
                                                style={{
                                                    margin: '0 auto',
                                                    maxWidth: 800
                                                }}
                                            />
                                        </MuiThemeProvider>
                </div>
                <div className="row">
                    <div className="col m4 l4 s12 cards-container">
                        <div className="card sticky-action">
                            <div className="card-image">
                                <img src={img1} alt=""/>
                                <a className="btn red btn-floating halfway-fab pulse activator">+<Link className="black-text" to="/item_page"></Link></a>
                            </div>
                            <div className="card-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deleniti ducimus excepturi maxime nesciun</p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title">Medicine<i className="right">x</i></span>
                            </div>
                            <div className="card-action center-align">
                                <div>
                                <a href="/item_page" className="waves-effect waves-light btn-small green lighten-2 text-center"><i className="material-icons right">shopping</i>Buy Now</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col m4 l4 s12 cards-container">
                        <div className="card sticky-action">
                            <div className="card-image">
                                <img src={img2} alt=""/>
                                <a className="btn red btn-floating halfway-fab pulse activator">+</a>
                            </div>
                            <div className="card-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deleniti ducimus excepturi maxime nesciun</p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title">Medicine<i className="right">x</i></span>
                            </div>
                            <div className="card-action center-align">
                                <div>
                                    <a href="/item_page" className="waves-effect waves-light btn-small green lighten-2 text-center"><i className="material-icons right">shopping</i>Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="col m4 l4 s12 cards-container">
                            <div className="card sticky-action">
                                <div className="card-image">
                                    <img src={img3} alt=""/>
                                    <a className="btn red btn-floating halfway-fab pulse activator">+</a>
                                </div>
                                <div className="card-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deleniti ducimus excepturi maxime nesciun</p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title">Medicine<i className="right">x</i></span>
                                </div>
                                <div className="card-action center-align">
                                    <div>
                                        <a href="/item_page" className="waves-effect waves-light btn-small green lighten-2 text-center"><i className="material-icons right">shopping</i>Buy Now</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>




        );
    }
}

export default Card;