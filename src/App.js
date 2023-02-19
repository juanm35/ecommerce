import './App.css';
import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer.js'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"¡Bienvenidos a la landing de la primera entrega del proyecto!"}/>
    </div>
  );
}

export default App;
