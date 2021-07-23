import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Card from './Card';
import ListeBd from './listeBd';
import SearchBar from './SearchBar';
import MenuLateral from './template/MenuLateral';


class CardList extends Component {
    constructor(props) {
        super(props);
        this.state= {
            searchTerm: '',
            shoppingCart: [],
        }

        this.handleSearch= this.handleSearch.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
    }

    handleSearch(searchTerm) {
        this.setState({searchTerm});
    }

    addNewItem (item) {
       if(this.state.shoppingCart.indexOf(item)!==-1) {
            let copy = [...this.state.shoppingCart];  
            let index = copy.findIndex(el => el.id= item.id);
            
            copy[index].quantity = item.quantity+1;                  
            
            this.setState({ shoppingCart: copy }); 
          
        } else{
           // this.setState(prevState => ({ shoppingCart: {...prevState.shoppingCart, item}}));
       
        this.state.shoppingCart.push(item);
        this.setState({shoppingCart: this.state.shoppingCart});
        };

        sessionStorage.setItem('x',JSON.stringify(this.state.shoppingCart));

        toast.success('Article ajouté au panier', {
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
        const filteredList= ListeBd.filter(card=>card.titre.toLocaleLowerCase().includes(this.state.searchTerm)
                                                    || card.auteur.toLocaleLowerCase().includes(this.state.searchTerm));

        return (
           <React.Fragment>
                <ToastContainer />

                <MenuLateral
                 handleSearch={this.handleSearch}
                 author={this.state.searchTerm}
                 />
                 
                <div className='col-10 d-flex flex-wrap justify-content-between'>
                    <div className="w-100 my-3">
                        <SearchBar
                            handleSearch={this.handleSearch}
                        />
                        <div className="mt-4">
                            {filteredList.length===0 ? '0 élément trouvé!' : `` }
                        </div>
                    </div>
                    {
                        filteredList.map((item, i)=><Card bd={item} key={i} addNewItem={this.addNewItem}/>)
                    }
                    
                </div>
            </React.Fragment> 
        );
    }
}

export default CardList;