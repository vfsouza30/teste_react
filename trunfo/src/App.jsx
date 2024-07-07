import { useState } from 'react'
import Placar from './components/Placar'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Jogador from './components/Jogador'

function App() {
  const [botaoVisivel, setBotaoVisivel] = useState(true);
  const [countJogadores, setCountJogadores] = useState({});
  const [countTurno, setCountTurno] = useState(1);
  const [posicaoJogador, setPosicaoJogador] = useState(1);
  const [historico, setHistorico] = useState([]);

const handClick = () =>{
  setBotaoVisivel(false);
}

  return (
      <div className='main'>
        {botaoVisivel && <div className='fundo-opaco'></div>}
        {botaoVisivel && (
          <button className='botao-centralizado' onClick={handClick}>Jogar </button>
        )}

        {!botaoVisivel && (
          <>
            <Placar countTurno={countTurno} countJogador1={countJogadores?.jogador1 ?? 5} countJogador2={countJogadores?.jogador2 ?? 5 } posicaoJogador={posicaoJogador} setPosicaoJogador={setPosicaoJogador} historico={historico} />
            <Jogador setCountJogadores={setCountJogadores} countTurno={countTurno} setCountTurno={setCountTurno} posicaoJogador={posicaoJogador} setPosicaoJogador={setPosicaoJogador} setHistorico={setHistorico} />
          </>
        )}
        
      </div>
  )
}

export default App
