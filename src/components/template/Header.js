import React from 'react';
import BottomNav from './BottomNav';
import Carousel from './Carousel';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className="container-md container-fluid px-0">
            <Navigation/>
            <Carousel/>
            <BottomNav/>
        </header>
    );
};

export default Header;