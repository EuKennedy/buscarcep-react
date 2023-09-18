//JAVA SCRIPT HERE

import {createElement, useState} from 'react'
import { BsSearch } from "react-icons/bs";
import './style.css';
import api from './Api.js/api';

function App() {
  
  //Created Variables
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({});
  const [rua, setRua] = useState({});
  const [bairro, setBairro] = useState({});
  const [uf, setEstado] = useState({});
  const runErro = document.querySelector('#errorTratament');
  

  //Error Tratament
  function createError () {
    runErro.classList.remove('hide')

    const cepHide = document.querySelector('#cep');
    const ruaHide = document.querySelector('#rua');
    const bairroHide = document.querySelector('#bairro');
    const ufHide = document.querySelector('#uf');

    cepHide.classList.add('hide')
    ruaHide.classList.add('hide')
    bairroHide.classList.add('hide')
    ufHide.classList.add('hide')

  }

  function hideError () {
    
    const errorHide = document.querySelector('#errorTratament')
    const cepShow = document.querySelector('#cep')
    const ruaShow = document.querySelector('#rua')
    const bairroShow = document.querySelector('#bairro')
    const ufShow = document.querySelector('#uf')

    cepShow.classList.remove('hide')
    ruaShow.classList.remove('hide')
    bairroShow.classList.remove('hide')
    ufShow.classList.remove('hide')
    errorHide.classList.add('hide')
  }
  

  //Principal Function for run code
  async function clickSearch() {
    
    if (input === '') {
      alert('Preencha algum cep na caixa.');
      return;
    }

    try {
      const response = await api.get(`${input}/json`);  
      setCep(response.data);
      setRua(response.data);
      setBairro(response.data);
      setEstado(response.data);
      setInput("");
      hideError();
    } 
    catch (error) {
      createError();
      setInput('');
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
          <h1 id='errorTratament' className='hide'>Ocorreu um erro ao buscar esse CEP.</h1>
        </main>
    </div>
  );
}
export default App;