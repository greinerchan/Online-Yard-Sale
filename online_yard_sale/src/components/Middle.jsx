import React from "react";
import Card from "./Card";
import goodsList from "../goodsList";

function createCard(goods) {
  return (
    <Card
      key={goods.id}
      name={goods.name}
      img={goods.imgURL}
      price={goods.price}
      Specifications={goods.Specifications}
    />
  );
}

function Middle() {
  return (
    <div>
      <br /><br /><br /><br /><br /><br />
      <div className="main_content">
        <div className="sub_main">
          {goodsList.map(createCard)}
        </div>
      </div>
    </div>
  );
}

export default Middle;