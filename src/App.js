import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
  const nome = 'Maria'
  return (
    <div className="App">
      <SayMyName nome="Talyson" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa 
      nome="Talyson" 
      idade="20" 
      profissao="programador" 
      foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
