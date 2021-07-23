import React from 'react';

const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide d-none d-md-block" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="img/carrousel1.jpg" alt="First slide" height="300px"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="img/carrousel2.jpg" alt="Second slide" height="300px"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="img/carrousel3.jpg" alt="Third slide" height="300px"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    );
};

export default Carousel;