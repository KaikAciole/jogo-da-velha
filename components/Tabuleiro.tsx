import { View } from "react-native";
import Selection from "./Selection";
import style from "./TabuleiroStyle";
import { useState } from "react";

interface TabuleiroProps {
    tamanho: number;
}

const linhasFixas = Array(3).fill(null);
const blocosFixos = Array(3).fill(null);

export default function Tabuleiro({tamanho}: TabuleiroProps) { 
    
    const [tabuleiro, setTabuleiro] = useState(criartabuleiroVazio);
    const [jogador, setJogador] = useState<'X'| 'O'>('X');
    const [vencedor, setVencedor] = useState<string | null>(null);
    const [placar, setPlacar] = useState({X: 0, O: 0});

    return(
        <>
            {linhasFixas.map((_, linhaIndex) => renderizarLinha(linhaIndex))}
        </>
    )

    function renderizarLinha(linhaIndex: number) {
        return (
            <View key={linhaIndex} style={[{width: tamanho * 3, columnGap: tamanho / 30, marginBottom: tamanho / 30,}, style.container]}>
                {blocosFixos.map((_, index) => (
                    <Selection key={index} tamanho={tamanho} />
                ))}
            </View>
        );
    }

    function checarVencedor(){
        for(let i = 0; i < 3; i++){
            if((tabuleiro[i][0]) && (tabuleiro[i][0] === tabuleiro [i][1]) && (tabuleiro[i][0] === tabuleiro[i][2])){
                return tabuleiro[i][0];
            }

            if((tabuleiro[0][i]) && (tabuleiro[0][i] === tabuleiro [1][i]) && (tabuleiro[0][i] === tabuleiro[2][i])){
                return tabuleiro[0][i];
            }
        }

        if(tabuleiro[0][0] && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2]){
            return tabuleiro[0][0];
        }

        if(tabuleiro[0][2] && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0]){
            return tabuleiro[0][2];
        }
    }

    function criartabuleiroVazio(){
        return [ 
            ['','',''],
            ['','',''],
            ['','','']
        ];
    }

    function jogar(linha:number, coluna:number){
        if (tabuleiro){

        }
    }
}