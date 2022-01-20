import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../Images/details-2.jpeg';
import img2 from '../Images/details-3.jpeg';
import img3 from '../Images/details-4.jpeg';

class Home extends Component {
    render() {
        return (
            <Carousel className="carosel">
                <div>
                    <img src={img1} alt="img1"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} alt= "img2"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} alt="img3"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default Home;