import React from "react";
import { ItemCard } from "./ItemCard";
import "./itemList.css";

export const ItemList = ({ productos }) => {
  return (
    <div>
      {productos.map((producto) => {
        return (
          <div className=" carditemlist">
            <ItemCard
              key={producto.id}
              id={producto.id}
              name={producto.title}
              price={producto.price}
              img={producto.img}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
