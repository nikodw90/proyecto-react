import './style.css'


export function MenuComponet() {
    return(
      
        <ul className="nav nav-tabs menu">
          <img className="logo" src="./imagenes/logo.jpg"/>
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="javascript:void(0)">Inicio</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" >Productos</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" >Contacto</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled"  tabindex="-1" aria-disabled="true">Carrito</a>
  </li>
</ul>
    );
}