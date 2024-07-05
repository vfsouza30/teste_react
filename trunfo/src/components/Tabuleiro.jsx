import React from "react";
import './Tabuleiro.css';
import './Cards.css'

const Tabuleiro = ({ informacoes, posicaoJogador }) => {

    const renderizarChaveValor = (chave, valor) => `${chave}: ${valor}`;
    const entradasJogada = Object.entries(informacoes);

    return (
        <div className="tabuleiro">
            <div>
                {
                    Object
                        .keys(informacoes)
                        .length > 0 && (
                            <div className="card">
                                <h5>{informacoes.nome}</h5>
                                <h5>{renderizarChaveValor(entradasJogada[2][0], entradasJogada[2][1])}</h5>
                            </div>
                        )
                }

                
            </div>
        </div>
    );
};

export default Tabuleiro;
