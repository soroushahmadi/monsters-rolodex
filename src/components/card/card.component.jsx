import React from 'react';

import './card.styles.css';

export const Card = (props) => {
    return(
        <div className='card-container'>
            <img src={`https://extensions.inrialpes.fr/robohash/${props.monster.id}?gravatar=hashed&size=180*180`} alt="monster"/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    );
}