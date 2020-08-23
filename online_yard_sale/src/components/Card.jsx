import React from "react";
import Detail from "./Detail.jsx";

function Card(props) {
  return (
    <div className="main_items">
      <div className="img">
        <img src={props.img} alt="ss" />
      </div>
      <div className="img_content">
        <h4>{props.name}</h4>
        <div className="cardBottom">
          <Detail detailInfo={props.price} />
          <a href={props.Specifications}>Specifications</a>
          <button id="btn" type="button">Add to Cart</button>
       </div>
      </div>
    </div>
  );
}

export default Card;