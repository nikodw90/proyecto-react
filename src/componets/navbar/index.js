import './style.css'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export function MenuComponet() {
    return(
        
      <div className="navbar">
        <div>
          <Link to={"/"} ><h1>venta de libros</h1></Link>
        </div>
           <Nav variant="pills" defaultActiveKey="/home">              
             <Link to={"/"}><img className="logo" src="./imagenes/logo.jpg"/><img/></Link>
           <Nav.Item>
             <Nav.Link variant="primary" href="/">Inicio</Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link variant="primary" href="/carrito">Carrito</Nav.Link>
           </Nav.Item>
         </Nav>
     </div>
    );
}