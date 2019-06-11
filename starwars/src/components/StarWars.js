import React from 'react';
import './StarWars.css';


const Star = props => {
  return (
     <div className='star-card'>
         <h2>{props.star.name}</h2>
        <p>
          <strong>Birth Year:</strong> {props.star.birth_year}
        </p>
        <p>
          <strong>Created:</strong> {props.star.created}
        </p>
        <p>
          <strong>Eye Color:</strong> {props.star.eye_color}
        </p>
     </div>
  )
}

export default Star;



