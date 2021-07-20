import './App.css';
import { MenuComponet } from './componets/navbar';
import { ItemListContainer } from "./containers/ItemListContainer"
import "bootstrap/dist/css/bootstrap.min.css"
import { ItemDetailContainer } from "./containers/ItemDetailContainer"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { cartContex } from './componets/cartContex';
import { useEffect, useState } from 'react';

function App() {

  const [ items, setItems ] = useState([])
    

  useEffect(() => {

  
   async function getProducts(){
         const response = await fetch(`https://api.mercadolibre.com/sites/MLC/search?q=libros`)
         const data = await response.json()
         setItems(data.results)
             
      }

      getProducts()

      

  }, [])




  return (
        
    <div className="App">
      <cartContex.Provider>
          <BrowserRouter>
          <MenuComponet/> 
             <Switch>
               <Route exact path={'/'}>
                  <ItemListContainer/>
               </Route>
               <Route path={ '/detalle/:productId'}>
                  <ItemDetailContainer items={items}/>
                </Route>
             </Switch>
          </BrowserRouter>
        </cartContex.Provider>
        

        
    </div>
  );
}

export default App;
