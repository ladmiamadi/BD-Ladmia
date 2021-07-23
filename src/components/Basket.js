import React, { Component } from 'react';

class Basket extends Component {

    render() {
        return (
            <div className="mb-2">
                <input 
                    type="image" 
                    id="panier" 
                    alt="Ajouter au panier"
                    src="/img/panier-noir.svg"
                    onClick={()=>this.props.addNewItem(this.props.bd)}
                />
            </div>
        );
    }
}

export default Basket;