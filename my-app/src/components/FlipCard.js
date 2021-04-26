// import { API } from '../../config';
import React from 'react'

const FlipCard = ({ car }) => {
    
    const getFeaturedImage = car => {
        return car.imageURL ? car.imageURL : 'https://image.freepik.com/free-vector/sold-out-price-tag-sign_123447-162.jpg'
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
                <div href={`/cars/${car.carID}`}>    
                    <h6 className="pt-3 pb-3 font-weight-bold">{car.make}</h6>
                </div>
                <div href={`/cars/${car.carID}`}>
                     <a className="btn btn-primary pt-2">{car.model}</a>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;