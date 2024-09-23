import React from "react";
import IconShoppingCart from "./Icon/IconShoppingCart";

const Card = ({ title, value }) => {
  return (
    <div className="panel flex items-center justify-between cursor-pointer">
      <div>
        <h1 className="font-semibold mb-3">{title}</h1>
        <h1 className="text-2xl font-extrabold">{value}</h1>
      </div>

      <IconShoppingCart className="fill-primary" />
    </div>
  );
};

export default Card;
