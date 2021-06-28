import './App.css';
import { MenuComponet } from './componets/navbar';
import { ItemListContainer } from './ItemListContainer'
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      
        <MenuComponet/> 
        <ItemListContainer greeting = {'Venta de Libros'}/>
        
    </div>
  );
}

export default App;
