import React from "react";
import './Tabuleiro.css';
import './Cards.css'

const Tabuleiro = ({ cartasMesa }) => {

    const enumTipo = {
      potencia:'Potência',
      vel_maxima:'Val. Maxima',
      aceleracao:'Aceleração'
    };
    
    return (

        <div className="tabuleiro">
          
            <div >
                {
                    cartasMesa
                        ?.jogador1
                            ?.id && <div>
                                    <div className="card">
                                        <h5>Jogador 1</h5>
                                        <h5>{cartasMesa?.jogador1?.nome}</h5>
                                        <h5>{enumTipo[cartasMesa.tipoAtributo] + ": " + cartasMesa.jogador1[cartasMesa.tipoAtributo]}</h5>
                                    </div>
                                </div>

                }
                {
                    cartasMesa
                        ?.jogador2
                            ?.id && <div>
                                    <div className="card">
                                        <h5>Jogador 2</h5>
                                        <h5>{cartasMesa?.jogador2?.nome}</h5>
                                        <h5>{enumTipo[cartasMesa.tipoAtributo] + ": " + cartasMesa.jogador2[cartasMesa.tipoAtributo]}</h5>
                                    </div>
                                </div>
                }
            </div>
        </div>
    );
};

export default Tabuleiro;
