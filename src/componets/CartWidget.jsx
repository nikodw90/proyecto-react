import { useContext } from "react";
import { cartContex } from "./cartContex";
import "./CartWidget.css";

export function CartWidget() {
  const { cantidad } = useContext(cartContex);

  return (
    <div className="cartWidget">
      {cantidad > 0 && (
        <>
          <h6>{cantidad}</h6>
        </>
      )}
    </div>
  );
}

export default CartWidget;
