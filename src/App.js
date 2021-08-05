import './App.css';
import { MenuComponet } from './componets/navbar';
import { ItemListContainer } from "./containers/ItemListContainer"
import "bootstrap/dist/css/bootstrap.min.css"
import { ItemDetailContainer } from "./containers/ItemDetailContainer"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ShopProvider } from './componets/cartContex';
import { useEffect, useState } from 'react';
import { Cart } from "./componets/navbar/cartContainer"
import { firestore } from './firebase';


function App() {

  const [ fireItems, setFireItems ] = useState([])
    

  useEffect(() => {
  
   const db = firestore
   const collection = db.collection('Products')
   const response = collection.get()
      response
      .then((result) =>{
         setFireItems(result.docs.map(p => ({id: p.id, ...p.data()})))
         
      })

   
      
  }, [])

  return (
        
   
    <div className="App">
      <ShopProvider>
          <BrowserRouter>
          <MenuComponet/> 
             <Switch>
               <Route exact path={'/'}>
                  <ItemListContainer fireItems={fireItems}/>
               </Route>
               <Route exact path={'/category/:categoryId'}>
                  <ItemListContainer fireItems={fireItems}/>
               </Route>
               <Route path={ '/detalle/:productId'}>
                  <ItemDetailContainer item={fireItems}/>
                </Route>
                <Route path={'/cart'}>
                   <Cart/>
                </Route>
             </Switch>
          </BrowserRouter>
        </ShopProvider>
        

        
    </div>
  );
}

export default App;
