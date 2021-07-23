import React, { Component } from 'react';
import CreerColonnePanier from './CreerColonnePanier';

class Item extends Component {
    render() {
        return (
            <div className='row justify-content-between mx-5 shadow-lg pb-4 item' key={this.props.item.id}>
         
                <div className='col-5'><CreerColonnePanier bd={this.props.item}/></div>
                <div className='col-1 mt-5 pt-4 text-danger font-weight-bold'>{this.props.item.prix * this.props.item.quantity}€</div>
                <div className='col d-flex col-2 mt-5 pt-4'>
                
                    <div><button className="btn btn-success" onClick={() => this.props.substructItem(this.props.item)}>
                    -
                    </button></div>
                <div className="px-2">{this.props.item.quantity}</div>
                    <div>
                        <button className="btn btn-success" onClick={()=>this.props.addItem(this.props.item)}>
                    +
                        </button>
                    </div>
                <div className="detelete-button">
                   <input 
                    type="image" 
                    id="delete-image" 
                    alt="Supprimer"
                    src="img/delete.png"
                    onClick={()=>this.props.deleteItem(this.props.item)}
                />
                </div>
                </div>
              
            </div>
      
        );
    }
}

export default Item;