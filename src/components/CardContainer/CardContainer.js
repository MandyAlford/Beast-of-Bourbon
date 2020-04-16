import React from "react";
import "./CardContainer.css";
import bartender from "../../assets/bartender.jpg";
import DrinkCard from "../DrinkCard/DrinkCard";

const CardContainer = () => {
  return(
    <div className='card-container'>
      <DrinkCard />
    </div>
  )
}

export default CardContainer;
