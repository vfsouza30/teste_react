import React, { useState } from "react";
import './Acoes.css';
import 'bootstrap/dist/css/bootstrap.css';
import Tabuleiro from "./Tabuleiro";

const Acoes = ({ clicado, informacoes }) => {
    
    const [jogada, setJogada] = useState({});

    const jogarClick = async () => {
            setJogada(informacoes); 
    };

    return (
        <div>
            <Tabuleiro jogada={jogada} />
            <div className="acoes">
                {clicado && (
                    <button onClick={jogarClick} className="btn btn-success">
                        Jogar
                    </button>
                )}
            </div>
        </div>
    );
};

export default Acoes;
