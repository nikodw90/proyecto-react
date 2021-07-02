import './App.css';
import { MenuComponet } from './componets/navbar';
import { ItemListContainer } from './ItemListContainer'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { ButtonContador } from './containers/itemconunt'


function App() {
  return (
    <div className="App">
      
        <MenuComponet/> 
        <ButtonContador/>
        <ItemListContainer greeting = {'Venta de Libros'}/>

        
    </div>
  );
}

export default App;
