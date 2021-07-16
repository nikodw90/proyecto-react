import './App.css';
import { MenuComponet } from './componets/navbar';
import { ItemListContainer } from "./containers/ItemListContainer"
import "bootstrap/dist/css/bootstrap.min.css"
import { ItemDetailContainer } from "./containers/ItemDetailContainer"
import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {

  // useEffect(() => {

    
  //   async function getProducts(){
  //         const response = await fetch(`https://api.mercadolibre.com/sites/MLC/search?q=libros`)
  //         const data = await response.json()
  //         setItems(data.results)
              
  //      }

  //      getProducts()

       

  //  }, [productId])



  return (
        
    <div className="App">
        <BrowserRouter>
          <MenuComponet/> 
             <Switch>
               <Route exact path={'/'}>
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
