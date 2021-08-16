import { useEffect, useState } from "react";
import { createContext } from "react";

export const cartContex = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [total, setTotal] = useState();

  useEffect(() => {
    let total = 0;
    const totals = cart.map((p) => p.precio * p.amount);
    totals.map((p) => (total = total + p));
    setTotal(total);
    const cartCantidad = cart.length;
    setCantidad(cartCantidad);
  }, [cart]);

  function estaEnCarrito(id) {
    const item = cart.find((p) => p.id === id);
    if (item === undefined) {
      return false;
    } else {
      return true;
    }
  }

  function anadir(product, contador) {
    if (estaEnCarrito(product)) {
      const productoA = cart.find((product) => product.id === product);

      const nuevaCantidad = productoA.amount + contador;

      const productoB = {
        id: productoA.id,
        nombre: productoA.name,
        img: productoA.img,
        precio: productoA.price,
        amount: nuevaCantidad,
      };

      const carroAntiguo = cart.filter((product) => (product.id = !product));

      const carroNuevo = [...carroAntiguo, productoB];
      setCart(carroNuevo);
    } else {
      const newItem = {
        id: product.id,
        nombre: product.name,
        img: product.img,
        precio: product.price,
        amount: contador,
      };
      setCart([...cart, newItem]);
      console.log(newItem);
    }
  }

  function limpiarCarrito() {
    setCart([]);
    setCantidad(0);
  }

  function eliminarProducto(id) {
    const newCart = cart.filter((product) => product.id !== id);

    setCart(newCart);
  }

  return (
    <cartContex.Provider
      value={{
        anadir,
        cart,
        cantidad,
        total,
        limpiarCarrito,
        eliminarProducto,
      }}
    >
      {children}
    </cartContex.Provider>
  );
};

export default ShopProvider;
