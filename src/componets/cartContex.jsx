import { useEffect, useState } from "react";
import { createContext } from "react";

export const cartContex = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [total, setTotal] = useState();

  useEffect(() => {
    let total = 0;
    // Con el map obtengo el total por producto
    const totals = cart.map((p) => p.precio * p.amount);
    // Sumo a t el total por producto de cada uno
    totals.map((p) => (total = total + p));
    // Lo guardo en el estado
    setTotal(total);
    // Calculo la cantidad de productos
    const cartCantidad = cart.length;
    // Las guardo en el estado
    setCantidad(cartCantidad);
  }, [cart]);

  // funcion para ver si el producto esta en el carro
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
        nombre: productoA.nombre,
        img: productoA.img,
        precio: productoA.precio,
        amount: nuevaCantidad,
      };

      const carroAntiguo = cart.filter((product) => (product.id = !product));

      const carroNuevo = [...carroAntiguo, productoB];
      setCart(carroNuevo);
    } else {
      // Guardo en el estado cart el producto que eligió y la cantidad
      const newItem = {
        id: product.id,
        nombre: product.nombre,
        img: product.img,
        precio: product.precio,
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
    // Elimino el producto por Id filtrando y quedandome con todos los que no tienen el id seleccionado
    const newCart = cart.filter((product) => product.id !== id);
    // Guardo el nuevo carrito
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
