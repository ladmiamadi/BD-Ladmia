import React from 'react'

class MenuLateral extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isActiveAuth1: false,
            isActiveAuth2: false,
            isActiveAuth3: false,
        }

       this.handleChecked= this.handleChecked.bind(this);
    }
   
    handleChecked (e, author){
        const name= e.target.name;
        const check= e.target.checked;
        this.setState({[name]: check});

        if(!check) {
           return this.props.handleSearch('');    
        }

        return this.props.handleSearch(author.toLocaleLowerCase());  
    }

   render() {
   return ( 
            <aside className="col-lg-2 col-md-3 d-md-block d-none px-0">
                <h3 className="h3 text-center p-2 w-100 filtre">Filtres</h3>
                <div className="text-left pl-3"><h5 className="d-inline">Auteurs</h5><span><a href="#" data-toggle="collapse" data-target="#auteurs"><img src="https://img.icons8.com/plasticine/100/000000/plus.png" width="25px" height="25px"/></a></span>
                    <div className="collapse ml-3" id="auteurs">
                            <div>
                                <input 
                                    type="checkbox"
                                    checked={this.state.isActiveAuth1}
                                    onChange={(e)=>this.handleChecked(e, 'Dan Jukes')} 
                                    className="mr-2" 
                                    id="auteur1"
                                    name='isActiveAuth1'/> 
                                <label htmlFor="auteur1">Dan Jukes</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    checked={this.state.isActiveAuth2}  
                                    onChange={(e)=>this.handleChecked(e, 'Steeven Dupré')} 
                                    className="mr-2" 
                                    id="auteur2"
                                    name='isActiveAuth2'/> 
                                <label htmlFor="auteur2">Steeven Dupré</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox"
                                    checked={this.state.isActiveAuth3}
                                    onChange={(e)=>this.handleChecked(e, 'Victor Hugo')} 
                                    className="mr-2" 
                                    id="auteur3"
                                    name='isActiveAuth3'/> 
                                <label htmlFor="auteur3">Victor Hugo</label>
                            </div>
                    </div>
                </div>

            </aside>
   )
   }
}
export default MenuLateral