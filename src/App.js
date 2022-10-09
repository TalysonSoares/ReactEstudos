import HelloWorld from "./components/HelloWorld";
import Frases from "./components/Frases"

function App() {
  const name = 'Talyson'
  const newName = name.toUpperCase()
  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <img src={url} alt="Minha Imagem" />
      <Frases />
      <HelloWorld />
      <Frases />
      <Frases />
    </div>
  );
}

export default App;
