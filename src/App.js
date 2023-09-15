//JAVA SCRIPT HERE

import {useState} from 'react'
import { BsSearch } from "react-icons/bs";
import './style.css';
import api from './Api.js/api';

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({});
  const [rua, setRua] = useState({});
  const [bairro, setBairro] = useState({});
  const [uf, setEstado] = useState({});
  
  async function clickSearch() {
    
    if (input === '') {
      alert('Preencha algum cep na caixa.')
      return;
    }

    try {
      const response = await api.get(`${input}/json`);  
      setCep(response.data);
      setRua(response.data);
      setBairro(response.data);
      setEstado(response.data);
      setInput("");
    } catch (error) {
      alert('Ocorreu um erro ao buscar esse CEP');
      setInput("");
    }

  }

  //start of html
  return (
    <div className="container">
        <h1 className="title">Buscador de CEP</h1>      
        <div className="containerInput">
          <input type="text" placeholder="Digite seu CEP:" value={input} 
          onChange={(e) => setInput(e.target.value)}
          />
          
          <button className="buttonSearch" onClick={clickSearch}>
            <BsSearch size={30} color="#00000"/> 
          </button>
        </div>
        
        <main className="main">
          <h2 id='cep'>CEP: {cep.cep}</h2>
          <span id='rua'>Rua: {rua.logradouro}</span>
          <span id='bairro'>Bairro: {bairro.bairro}</span>
          <span id='uf'>Estado: {uf.uf}</span>
        </main>
    </div>
  );
}
export default App;