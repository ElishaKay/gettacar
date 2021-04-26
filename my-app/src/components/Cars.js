import React from 'react'
import FlipCard from './FlipCard';

export const Cars = ({cars}) => {

    console.log('cars length:::', cars.length)
    if (cars.length === 0) return null

    const showCarManufactures = car =>
        car.make.map((c, i) => (
            <div key={i} href={`/categories/${c.slug}`}>
                <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
            </div>
        ));

    const showCarModels = car =>
        car.model.map((c, i) => (
            <div key={i} href={`/tags/${c.slug}`}>
                <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{c.name}</a>
            </div>
        ));

    const showCarColors = car =>
        car.colors.map((c, i) => (
            <div key={i} href={`/tags/${c.slug}`}>
                <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{c.name}</a>
            </div>
        ));

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
            <section className="cars-container" id="cars-container">
              <ul>
                {showAllCars()}
              </ul>
            </section>
        </React.Fragment>
    )
}