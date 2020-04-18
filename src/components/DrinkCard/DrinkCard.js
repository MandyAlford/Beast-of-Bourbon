import React from "react";
import "./DrinkCard.css";

const DrinkCard = (props) => {
  return (
    <div className='drink-card'>
      <h1 className='drink-card-header'>{props.name}</h1>
      <img className='drink-card-image' src={props.image} alt={`${props.name}-image`}
      />
    </div>
  )
}

export default DrinkCard;
