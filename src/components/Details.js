import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Basket from './Basket';
import list from './helpers';
import ListeBd from './listeBd';

class Details extends Component {
    addNewItem (item) {
        const bag= list();
        let index = bag.findIndex(el => el.id= item.id);

        if(index !==-1) {
            bag[index].quantity = item.quantity+1;                  
        } else{
            bag.push(item);
        };

        sessionStorage.setItem('x',JSON.stringify(bag));

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
        const idBd=this.props.match.params.id;
        const filteredBd= ListeBd.filter(bd=> bd.id == idBd);
        const bd=filteredBd[0];

        return (
            <React.Fragment>
                <ToastContainer />
                <div className="details">
                        <div>
                            <input 
                                type="image" 
                                id="retour" 
                                alt="Retour"
                                src="/img/accueil.png"
                                onClick={ () =>  this.props.history.push('/') }
                            />
                    </div>
                    <div className="bd-details d-flex w-100 mt-1 p-5">
                        <div>
                            <img 
                                src={'/albums'+ bd.image} 
                                className=""
                                alt={bd.titre}
                            />
                        </div>
                        <div className="ml-4">
                            <h2 className="details-title">{bd.titre}</h2>
                        
                        <p className="text-left detail-text">
                            Lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                        </p>
                        <div className="price d-flex justify-content-between m-5">
                            <div>
                                {bd.prix}€
                            </div>
                            <div>
                                <Basket addNewItem={()=>this.addNewItem(bd)} bd={bd}/>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
               
            </React.Fragment>
        );
    }
}

export default Details;