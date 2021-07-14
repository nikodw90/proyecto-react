import './App.css';
import { MenuComponet } from './componets/navbar';
import { ItemListContainer } from "./containers/ItemListContainer"
import "bootstrap/dist/css/bootstrap.min.css"
import { ItemDetailContainer } from "./containers/ItemDetailContainer"
import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {
  return (
        
    <div className="App">
        <BrowserRouter>
          <MenuComponet/> 
             <Switch>
               <Route exact path={'/home'}>
                  <ItemListContainer/>
               </Route>
               <Route path={ '/detalle/:productId'}>
                  <ItemDetailContainer/>
                </Route>
             </Switch>
        </BrowserRouter>
        

        
    </div>
  );
}

export default App;
