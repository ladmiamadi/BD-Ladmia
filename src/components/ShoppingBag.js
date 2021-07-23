import React, { Component } from 'react';
import Item from './Item';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import list from './helpers'

class ShoppingBag extends Component {
    constructor(props) {
        super(props);

        this.state= {
            shoppingList: list(),
        }

        this.addItem = this.addItem.bind(this);
        this.substructItem = this.substructItem.bind(this);
        this.deleteItem= this.deleteItem.bind(this);
    }

    substructItem (item) {
        let stateCopy = [...this.state.shoppingList]; 
        let index = stateCopy.findIndex(el => el.id=== item.id);
        
        if(index!== -1 && item.quantity > 1) {
        stateCopy[index].quantity = item.quantity-1;                  
        
        this.setState({ shoppingList: stateCopy }); 
        sessionStorage.setItem('x',JSON.stringify(this.state.shoppingList)); 
        }
    }

    addItem (item) {
        let stateCopy = [...this.state.shoppingList]; 
        let index = stateCopy.findIndex(el => el.id=== item.id);
        
        if(index!== -1) {
        stateCopy[index].quantity = item.quantity+1;                  
        
        this.setState({ shoppingList: stateCopy }); 
        sessionStorage.setItem('x',JSON.stringify(this.state.shoppingList)); 
        }
    }

    deleteItem (item) {
        if(window.confirm("Etes vous sûr de vouloir supprimer cet article?")) {
            let stateCopy = [...this.state.shoppingList]; 
            let index = stateCopy.findIndex(el => el.id=== item.id);

            stateCopy.splice(index, 1);
            
            this.setState({ shoppingList: stateCopy});
            sessionStorage.setItem('x',JSON.stringify(stateCopy));
        }

        toast.info('Article supprimé!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    render() {     
        return (
            <div className="container border" style={{background:'#FFD8A6'}}>
                <div className="text-center my-5 text-danger">
                    <ToastContainer />
                   <h3>Votre panier d'achat</h3> 
                </div>
                {
                    this.state.shoppingList.map((item)=> <Item 
                                                            item = {item} 
                                                            key = {item.id}
                                                            substructItem = {this.substructItem}
                                                            addItem = {this.addItem}
                                                            substructItem = {this.substructItem}
                                                            deleteItem= {this.deleteItem}
                                                        />)
                }
                <div className="my-5 text-center">
                    <h4>
                        {this.state.shoppingList.length === 0 ? 'Votre panier est vide!' :
                        `Vous avez selectionné ${this.state.shoppingList.length} élements`}
                    </h4>
                </div>
                
            </div>
        );
    }
}

export default ShoppingBag;