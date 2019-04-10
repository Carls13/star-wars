import React from 'react'
import img from './characters.png'

const Character = ({character}) => {

    return (
        <div className='navcard black tc bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
        {/*

        */}<img className="card-image"
        alt='character' src={img} width="200em" height="200em" />
        <div>
          <h2>{character.character.name}</h2>
          <p><strong>Height:</strong> {character.character.height}cm</p>
          <p><strong>Weight:</strong> {character.character.mass}Kg</p>
          <p><strong>Birth year:</strong> {character.character.birth_year}</p>
          <p><strong>Film appearences:</strong> {character.character.films.length}</p>
        </div>
      </div>
        );
      }
export default Character;