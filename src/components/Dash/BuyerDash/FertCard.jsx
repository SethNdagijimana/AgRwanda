import React from "react";
import "../BuyerDash/FertCart.css";

const FertCard = ({
  FertImage,
  Title,
  Status,
  Capacity,
  Price,
  ButtonText,
}) => {
  return (
    <main className="BuyerCard__Container">
      <div className="BuyerCard__Content">
        <img id="FertImageID" src={FertImage} alt="" />
        <h1 id="CardTitle">{Title}</h1>
        <h2 id="CardStatus">{Status}</h2>
        <h3 id="CardCapacity">{Capacity}</h3>
        <h4 id="CardPrice">{Price}</h4>
        <hr />
        <button className="Pay__Button">{ButtonText}</button>
      </div>
    </main>
  );
};

export default FertCard;
