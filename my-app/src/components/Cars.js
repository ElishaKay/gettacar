import React from 'react'
import FlipCard from './FlipCard';

export const Cars = ({cars}) => {

    console.log('articles length:::', cars.length)
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

    const CarRow = (car,index) => {
        return(
              <li key = {index}>
                 <h3>{car.title}</h3>
                  <p>
                    {car.contentSnippet}
                  </p>
                  <a href={car.link}>Read</a>
              </li>
          )
    }

    const carTable = cars.map((car,index) => CarRow(car,index))

    return(
        <div>
            <section className="cars-container" id="cars-container">
              <ul>
                {carTable}
              </ul>
            </section>
        </div>
    )
}