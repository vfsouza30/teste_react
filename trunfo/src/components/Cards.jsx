import React, { useState, useEffect } from "react";
import './Cards.css';
import 'bootstrap/dist/css/bootstrap.css';
import Tabuleiro from "./Tabuleiro";
import Jogador from "./Jogador";

const Cards = ({ cardsMao, setPosicaoJogador, posicaoJogador }) => {
    const [botaoClicado, setBotaoClicado] = useState({ cardId: null, buttonType: null });
    const [informacoes, setInformacoes] = useState([]);

    const clique = async (carro, tipoBotao) => {
        
        setBotaoClicado({ cardId: carro.id, buttonType: tipoBotao });

        await new Promise(resolve => setTimeout(resolve, 1000));

        const info = {
            id: carro.id,
            nome: carro.nome,
            [tipoBotao]: carro[tipoBotao]
        };

        setInformacoes(info);

        if(posicaoJogador == 1){
            setPosicaoJogador(2)
        }else{
            setPosicaoJogador(1)
        }
    };
    return (
        <div>
            { <Tabuleiro informacoes={informacoes} posicaoJogador={posicaoJogador} />}
            <div className="cards">
                {cardsMao.map((carro) => (
                    <div className="card" key={carro.id}>
                        <h4>{carro.nome}</h4>
                        <button
                            className={`btn ${botaoClicado.cardId === carro.id && botaoClicado.buttonType === 'potencia' ? 'btn-success' : 'btn-primary'}`}
                            onClick={() => clique(carro, 'potencia')}
                        >
                            Potência: {carro.potencia}
                        </button>
                        <button
                            className={`btn ${botaoClicado.cardId === carro.id && botaoClicado.buttonType === 'vel_maxima' ? 'btn-success' : 'btn-primary'}`}
                            onClick={() => clique(carro, 'vel_maxima')}
                        >
                            Vel. Máxima: {carro.vel_maxima} km/h
                        </button>
                        <button
                            className={`btn ${botaoClicado.cardId === carro.id && botaoClicado.buttonType === 'aceleracao' ? 'btn-success' : 'btn-primary'}`}
                            onClick={() => clique(carro, 'aceleracao')}
                        >
                            Aceleração: {carro.aceleracao} km/h
                        </button>
                    </div>
                ))}
            </div>
        </div>
        
    );
};

export default Cards;