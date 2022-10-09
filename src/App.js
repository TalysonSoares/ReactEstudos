import './App.css';
import HelloWorld from './components/HelloWorld';
import Frases from './components/Frases';

const url = `https://via.placeholder.com/150`
const name = 'Talyson'
const newName = name.toUpperCase()

function App() {
  return (
    <div className="App">
      <h1>Olá React!</h1>
      <h2>Alterando o JSX!</h2>
      <p>Olá, {newName} </p>
      <img src={url} alt="minha imagem" />
      <Frases />
      <HelloWorld />
      <Frases />
      <Frases />
    </div>
  );
}

export default App;
