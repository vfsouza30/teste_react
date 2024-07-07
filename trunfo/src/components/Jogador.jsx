import React, {useState, useEffect} from "react";
import Cards from './Cards'
import carros from '../assets/carros.json'

const Jogador = ({
    setCountJogadores,
    countTurno,
    setCountTurno,
    posicaoJogador,
    setPosicaoJogador,
    setHistorico
}) => {
    const [jogador1, setJogador1] = useState([]);
    const [jogador2, setJogador2] = useState([]);
    const [tmpTurno, setTmpTurno] = useState();

    useEffect(() => {
        if (posicaoJogador == 1) {
            setPosicaoJogador(2);
        } else {
            setPosicaoJogador(1);
        }

        setCountJogadores({jogador1: jogador1.length, jogador2: jogador2.length});

        if (
            tmpTurno
                ?.jogador1
                    ?.id && tmpTurno
                        ?.jogador2
                            ?.id
        ) {

            const tmp1 = tmpTurno
                ?.jogador1
                    ?.[
                        tmpTurno
                            ?.tipoAtributo
                    ];
            const tmp2 = tmpTurno
                ?.jogador2
                    ?.[
                        tmpTurno
                            ?.tipoAtributo
                    ];

            let resultado

            if (tmp1 > tmp2) {
                resultado = "Jogador 1"
                setJogador1((old) => [
                    ...old,
                    tmpTurno
                        ?.jogador1,
                    tmpTurno
                        ?.jogador2
                ]);

            } else if (tmp1 == tmp2) {
                resultado = "Empate"
                setJogador1((old) => [
                    ...old,
                    tmpTurno
                        ?.jogador1
                ]);
                setJogador2((old) => [
                    ...old,
                    tmpTurno
                        ?.jogador2
                ]);

            } else {
                resultado = "Jogador 2"
                setJogador2((old) => [
                    ...old,
                    tmpTurno
                        ?.jogador1,
                    tmpTurno
                        ?.jogador2
                ]);
            }

            setHistorico((old) => [
                ...old, {
                    ...tmpTurno,
                    ganhadorTurno: resultado,
                    valorAtributoJogador1: tmp1,
                    valorAtributoJogador2: tmp2
                }
            ]);

            setTmpTurno(undefined);
            setCountTurno((old) => old + 1);

            if (countTurno % 2 !== 0) {
                setPosicaoJogador(1);
            } else {
                setPosicaoJogador(2);
            }
        }

    }, [jogador1, jogador2])

    useEffect(() => {
        const distribuicao_cards_carro = () => {
            const idsAleatorios = [];
            const carrosIds = carros.map(carro => carro.id);

            while (idsAleatorios.length < 10) {
                const idAleatorio = carrosIds[Math.floor(Math.random() * carrosIds.length)];
                if (!idsAleatorios.includes(idAleatorio)) {
                    idsAleatorios.push(idAleatorio);
                }
            }

            return idsAleatorios;
        };

        const carrosAleatorios = distribuicao_cards_carro();

        const carrosJogador1 = carros.filter(
            (carro) => carrosAleatorios.slice(0, 5).includes(carro.id)
        );
        const carrosJogador2 = carros.filter(
            (carro) => carrosAleatorios.slice(5, 10).includes(carro.id)
        );

        setJogador1(carrosJogador1);
        setJogador2(carrosJogador2);
    }, []);

    return (

        <div>
            {
                posicaoJogador == 1
                    ? (
                        <Cards
                            cardsMao={jogador1}
                            tmpTurno={tmpTurno}
                            setTmpTurno={setTmpTurno}
                            setCardsMao={setJogador1}
                            posicaoJogador={posicaoJogador}/>
                    )
                    : (
                        <Cards
                            cardsMao={jogador2}
                            tmpTurno={tmpTurno}
                            setTmpTurno={setTmpTurno}
                            setCardsMao={setJogador2}
                            posicaoJogador={posicaoJogador}/>
                    )
            }
        </div>
    )
}

export default Jogador