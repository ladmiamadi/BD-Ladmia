import React from 'react';

const Footer = () => {
    return (
        <footer className="container-md container-fluid menu px-0">
          <div className="row jaune d-flex flex-row justify-content-around navbar mx-0">
            <div className="col-4">
              <a href="#"><img src="img/Facebook.svg"/></a>
              <a href="#"><img src="img/Twitter.svg"/></a>
              <a href="#"><img src="img/Instagram.svg"/></a>
            </div>
            <div className="col-4">
              <a href="#">CGV-CGU</a>
            </div>
            <div className="col-4 pl-0 pr-0">
              <a href="#">Mentions légales</a>
            </div>
          </div>
        </footer>
            
       
    );
};

export default Footer;