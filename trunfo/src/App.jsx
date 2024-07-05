import { useState, useEffect } from 'react'
import Placar from './components/Placar'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Jogador from './components/Jogador'

function App() {
  const [botaoVisivel, setBotaoVisivel] = useState(true)
 

const handClick = () =>{
  setBotaoVisivel(false)
}
  return (
      <div className='main'>
        {botaoVisivel && <div className='fundo-opaco'></div>}
        {botaoVisivel && (
          <button className='botao-centralizado' onClick={handClick}>Jogar </button>
        )}
        
        {!botaoVisivel && (
          <>
            <Placar />
            <Jogador />
          </>
        )}
        
      </div>
  )
}

export default App
