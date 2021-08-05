import './style.css'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';

const categorias = [{
  categoryId: "infantil",
  name: "Libros Infantiles"
},
{
  categoryId: "drama",
  name: "Libros de Drama"
}]


export function MenuComponet() {
    return(
        
      <div className="navbar">
        <div>
          <Link to={"/"} ><h1>venta de libros</h1></Link>
        </div>
           <Nav variant="pills" defaultActiveKey="/home">              
             <Link to={"/"}><img className="logo" src="./imagenes/logo.jpg"/></Link>
           <Nav.Item>
             <Nav.Link variant="primary" href="/">Inicio</Nav.Link>
           </Nav.Item>
           <Nav.Item>
              { categorias.map( category => <Link to={`/category/${category.categoryId}`}>
                    <p>{category.name}</p>
                    </Link>)}
           </Nav.Item>
           <Nav.Item>
             <Link className="cartWidget" to={"/cart"}><img src="./imagenes/widget.png" /><CartWidget/></Link>
           </Nav.Item>
         </Nav>
     </div>
    );
}