import './style.css'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export function MenuComponet() {
    return(
        
      <div className="navbar">
        <div>
          <Link to={"/home"} ><h1>venta de libros</h1></Link>
        </div>
           <Nav variant="pills" defaultActiveKey="/home">              
             <Link to={"/home"}><img className="logo" src="./imagenes/logo.jpg"/><img/></Link>
           <Nav.Item>
             <Nav.Link href="/home">Inicio</Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link href="/detalle/:productoId">Productos</Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link href="/carrito">Carrito</Nav.Link>
           </Nav.Item>
         </Nav>
     </div>
    );
}