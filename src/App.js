import './App.css';
import { MenuComponet } from './componets/navbar';
import { ItemListContainer } from './ItemListContainer'
import "bootstrap/dist/css/bootstrap.min.css"
import { ButtonContador } from './containers/itemconunt'
import { CardComponet} from'./componets/CardComponent'

function App() {
  return (
    <div className="App">
      
        <MenuComponet/> 
        <CardComponet/>
        <ItemListContainer/>
        <ButtonContador/>

        
    </div>
  );
}

export default App;
