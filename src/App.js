import './App.css';
import { MenuComponet } from './componets/navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuComponet/>
        <h1>Curso React!!</h1>
      </header>
    </div>
  );
}

export default App;
