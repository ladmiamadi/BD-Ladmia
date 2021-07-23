import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Basket from './Basket'

class Card extends Component {
    render() {
        const bd= this.props.bd;

        return (
             <div className="card card-list shadow-lg w-25 mx-4 my-3">                   
                                <img 
                                    src={'albumsMini'+ bd.image} 
                                    className="card-image"
                                    alt={bd.titre}/>
                            
                            <div className="card-body">
                                <Link to={`/card-details/${bd.id}`}>
                                    <h5 className="card-title font-weight-bold text-center mb-1" style={{color:'#007892'}}>{bd.titre}</h5>
                                </Link>
                                <p className="text-center font-weight-bold mb-1">{bd.album}</p>  
                                <p className="card-text auteur font-italic text-center mb-md-3">{bd.auteur}</p>
                                <div className="d-flex justify-content-between mx-3 mt-3">
                                </div>
                            </div>
                            <div className="card-footer-list d-flex justify-content-between">
                                    <div className="price">
                                        {bd.prix}€
                                    </div>
                                    <div>
                                       <Basket addNewItem={this.props.addNewItem} bd={bd}/>
                                    </div>
                                </div> 
        </div>
        );
    }
}

export default Card;