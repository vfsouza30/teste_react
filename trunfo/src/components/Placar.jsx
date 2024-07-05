import React from "react";
import './Placar.css';


const Placar = () => {
    return(
        <div className="placar">
            <div className="placar-row">
                <div className="jogador1">
                    <p>Jogador 1</p>
                    <p>cartas: 5</p>
                </div>
                <div className="turno">
                    <p>Turno</p>
                    <p>1</p>
                </div>
                <div className="jogador2">
                <p>Jogador 2</p>
                <p>cartas: 5</p>
                </div>
            </div>
            <div className="historico">
                    Historico
                </div>
        </div>
    )
    
}

export default Placar