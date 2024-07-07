import React, {useState} from "react";
import './Placar.css';

const Placar = (
    {countTurno, countJogador1, countJogador2, posicaoJogador, historico}
) => {

    const [historicoOpen, setHistoricoOpen] = useState(false);

    const ligaDesliga = () => {
        setHistoricoOpen(!historicoOpen);
    }

    return (
        <div className="placar ">
            <div className="placar-row">
                {countJogador1 === 10 && countJogador1 > countJogador2 && (<span>Vitória</span>)}
                <div
                    className={"jogador1 " + (
                        posicaoJogador === 1
                            ? "turno-jogador"
                            : ''
                    )}>
                    <p>Jogador 1</p>
                    <p>Cartas: {countJogador1}</p>
                </div>
                <div className="turno">
                    <p>Turno</p>
                    <p>{countTurno}</p>
                </div>
                <div
                    className={"jogador2 " + (
                        posicaoJogador === 2
                            ? "turno-jogador"
                            : ''
                    )}>
                    <p>Jogador 2</p>
                    <p>Cartas: {countJogador2}</p>
                </div>
                {countJogador2 === 10 && countJogador1 < countJogador2 && (<span>Vitória</span>)}
            </div>

            <div className="collapse-container" onClick={ligaDesliga}>
                <div className="collapse-header">
                    Historico
                </div>
                <div
                    className={`collapse-content ${historicoOpen
                        ? 'open'
                        : ''}`}>
                    {
                        historico.map((h) => (
                            <div>
                                <h5>Vencedor: {h.ganhadorTurno}</h5>
                                {
                                    h.ganhadorTurno === "Jogador 1"
                                        ? (
                                            <div>
                                                <span>{h.jogador1.nome}</span>
                                                <span>
                                                    X
                                                </span>
                                                <span>{h.jogador2.nome}</span>
                                                <br/>
                                                <span>{h.valorAtributoJogador1}</span>
                                                <span>
                                                    X
                                                </span>
                                                <span>{h.valorAtributoJogador2}</span>
                                            </div>
                                        )
                                        : (
                                            <div>
                                                <span>{h.jogador2.nome}</span>
                                                <span>
                                                    X
                                                </span>
                                                <span>{h.jogador1.nome}</span>
                                                <br/>
                                                <span>{h.valorAtributoJogador2}</span>
                                                <span>
                                                    X
                                                </span>
                                                <span>{h.valorAtributoJogador1}</span>
                                            </div>
                                        )
                                }
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>

    )

}

export default Placar