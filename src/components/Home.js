import React, { Component } from 'react';
import CardList from './CardList';

class Home extends Component {
    render() {
        return (
            <div className="row mx-0 home">
                <CardList/>
            </div>
        );
    }
}

export default Home;