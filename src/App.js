import './App.css';
import { MenuComponet } from './componets/navbar';
// import { ItemListContainer } from "./containers/ItemListContainer"
import "bootstrap/dist/css/bootstrap.min.css"
// import { ItemCard } from "./componets/ItemCard"
import { ItemDetailContainer } from "./containers/ItemDetailContainer"

function App() {
  return (
    <div className="App">
        
        <MenuComponet/> 
        {/* <ItemCard/>
        <ItemListContainer/> */}
        <ItemDetailContainer/>
        

        
    </div>
  );
}

export default App;
