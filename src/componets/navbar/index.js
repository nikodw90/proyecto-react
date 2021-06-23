import './style.css'

export function MenuComponet() {
    return(
        <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" >Inicio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" >Productos</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" >Carrito</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled"  tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
    );
}