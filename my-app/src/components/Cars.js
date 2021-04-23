import React from 'react'
import FlipCard from './FlipCard';

export const Cars = ({cars}) => {

    console.log('articles length:::', cars.length)
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

    const CarRow = (cars,index) => {
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