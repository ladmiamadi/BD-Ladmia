import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="border mt-2">
              <input 
                className="form-control border border-light rounded" 
                type="text"
                onChange={(e)=>this.props.handleSearch(e.target.value)} 
                placeholder="Tapez votre recherche ici"
                /> 
            </div>
        );
    }
}

export default SearchBar;