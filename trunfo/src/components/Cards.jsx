import './Cards.css';
import 'bootstrap/dist/css/bootstrap.css';
import Tabuleiro from "./Tabuleiro";

const Cards = ({
    cardsMao,
    setCardsMao,
    setTmpTurno,
    tmpTurno,
    posicaoJogador
}) => {

    const clique = async (carro, tipoBotao) => {

        if (
            !!tmpTurno
                ?.tipoAtributo && tipoBotao !== tmpTurno.tipoAtributo
        ) 
            return alert("Tipo de atributo não pode ser combinado!");
        
        const novoTurno = posicaoJogador === 1
            ? {
                jogador1: cardsMao.find((card) => card.id === carro.id)

            }
            : {
                jogador2: cardsMao.find((card) => card.id === carro.id)
            }

        setTmpTurno((old) => ({
            ...old,
            ...novoTurno,
            tipoAtributo: tipoBotao
        }));

        await new Promise(resolve => setTimeout(resolve, 600));
        setCardsMao(cardsMao.filter((card) => card.id !== carro.id));

    };

    return (
        <div>
            <Tabuleiro cartasMesa={tmpTurno}/>
            <div className="cards">
                {
                    cardsMao.map((carro) => (
                        <div className="card" key={carro.id}>
                            <h4>{carro.nome}</h4>
                            <button className="btn btn-primary" onClick={() => clique(carro, 'potencia')}>
                                Potência: {carro.potencia}
                            </button>
                            <button className="btn btn-primary" onClick={() => clique(carro, 'vel_maxima')}>
                                Vel. Máxima: {carro.vel_maxima}
                                km/h
                            </button>
                            <button className="btn btn-primary" onClick={() => clique(carro, 'aceleracao')}>
                                Aceleração: {carro.aceleracao}
                                km/h
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Cards;