import './App.css';
import { MenuComponet } from './componets/navbar';
import { ItemListContainer } from './ItemListContainer'
import "bootstrap/dist/css/bootstrap.min.css"
import { CardComponet} from'./componets/CardComponent'

function App() {
  return (
    <div className="App">
        
        <MenuComponet/> 
        <CardComponet/>
        <ItemListContainer/>
        

        
    </div>
  );
}

export default App;
