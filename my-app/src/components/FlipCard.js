// import { API } from '../../config';
import React from 'react'

const FlipCard = ({ car }) => {
    
    const getFeaturedImage = car => {
        return car.image
    }
        

    return (
        //new
        <div className="flip flip-horizontal">
            <div
                className="front"
                style={{
                    backgroundImage:
                        'url(' +
                        getFeaturedImage(car) +
                        ')'
                }}
            >
                <h2 className="text-shadow text-center h1"></h2>
            </div>
            <div className="back text-center">
                <div href={`/cars/${car.slug}`}>    
                    <h6 className="pt-3 pb-3 font-weight-bold">{car.title}</h6>
                </div>
                <div href={`/cars/${car.slug}`}>
                     <a className="btn btn-primary pt-2">Read more</a>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;