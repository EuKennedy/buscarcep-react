import { BsSearch } from "react-icons/bs";
import './style.css';

function App() {
  return (
    <div className="container">
        <h1 className="title">Buscador de CEP</h1>
        
        <div className="containerInput">
          <input type="text" placeholder="Digite seu CEP:"></input>
          <button className="buttonSearch">
            <BsSearch size={25} color="#00000"/>
          </button>
        </div>
        
        <main className="main">
          <h2>CEP: 317411667</h2>
          <span>Rua pindamonhangaba</span>
          <span>Complemente: Casa</span>
        </main>
    </div>
  );
}

export default App;
