import React from 'react'
import img from './planets.png'

const Planet = ({planet}) => {

    return (
        <div className='navcard black tc bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img className="card-image" alt='planet' src={img} width="200em" height="200em"/>
        <div>
          <h2>{planet.planet.name}</h2>
          <p><strong>Diameter:</strong> {planet.planet.height}Km</p>
          <p><strong>Climate:</strong> {planet.planet.climate}</p>
          <p><strong>Terrain:</strong> {planet.planet.terrain}</p>
          <p><strong>Population:</strong> {planet.planet.population} inhabitants</p>
          <p><strong>Film appearences:</strong> {planet.planet.films.length}</p>
        </div>
      </div>
        );
      }
export default Planet;