import React, { Component } from 'react';
import "./card.css";

const Card = (props) => {
    const {onclick, item} = props;

    return (
        <button className='card' onClick={() => onclick(item)}>
            <img src={item.image_link} />
        </button>
    );
}

export default Card;