import React, {useState, useEffect} from "react";
import Cards from './Cards'
import carros from '../assets/carros.json'
import Acoes from "./Acoes";

const Jogador = () => {

    const [jogador1, setJogador1] = useState([])
    const [jogador2, setJogador2] = useState([])
    const [posicaoJogador, setPosicaoJogador] = useState(1)

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
                    ? (<Cards cardsMao={jogador1} setPosicaoJogador={setPosicaoJogador} posicaoJogador={posicaoJogador}/>)
                    : (<Cards cardsMao={jogador2} setPosicaoJogador={setPosicaoJogador} posicaoJogador={posicaoJogador}/>)
            }
        </div>
    )
}

export default Jogador