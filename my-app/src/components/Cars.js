import React from 'react'
import FlipCard from './FlipCard';

export const Cars = ({cars}) => {

    console.log('cars length:::', cars.length)
    if (cars.length === 0) return null

    const showAllCars = () => {
        return cars.map((car, i) => {
            return (
                <div key={i} className="col-md-4">
                    <FlipCard car={car} />
                </div>
            );
        });
    };

    return(
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    {showAllCars()}
                </div>
            </div>
        </React.Fragment>
    )
}