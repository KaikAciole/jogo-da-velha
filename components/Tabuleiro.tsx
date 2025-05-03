import { View, Text } from "react-native";
import Selection from "./Selection";
import style from "./TabuleiroStyle";
import { useState } from "react";
import JogoDaVelha from '../jogo-da-velha-OO/JogoDaVelha';

interface TabuleiroProps {
  tamanho: number;
}

const linhasFixas = Array(3).fill(null);
const blocosFixos = Array(3).fill(null);

export default function Tabuleiro({ tamanho }: TabuleiroProps) {
    
  const [jogo] = useState(new JogoDaVelha());
  const [tabuleiro, setTabuleiro] = useState(jogo.getTabuleiro());
  const [jogador, setJogador] = useState(jogo.getJogadorAtual());
  const [vencedor, setVencedor] = useState<null | string>(jogo.getVencedor());
  const [placar, setPlacar] = useState(jogo.getPlacar());

  function atualizarEstado() {
    setTabuleiro([...jogo.getTabuleiro().map(l => [...l])]);
    setJogador(jogo.getJogadorAtual());
    setVencedor(jogo.getVencedor());
    setPlacar({ ...jogo.getPlacar() });
  }

  function jogar(linha: number, coluna: number) {
    const jogadaValida = jogo.jogar(linha, coluna);
    if (!jogadaValida) return;

    atualizarEstado();

    if (jogo.getVencedor()) {
      setTimeout(() => {
        jogo.reiniciar();
        atualizarEstado();
      }, 1000);
    }
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: tamanho / 15, marginBottom: tamanho / 18 }}>
        Placar — X: {placar.X} | O: {placar.O}
      </Text>

      {vencedor ? (
        <Text style={{ fontSize: tamanho / 15, color: 'green', marginBottom: tamanho / 18 }}>
          Jogador {vencedor} venceu!
        </Text>
      ) : (
        <Text style={{ fontSize: tamanho / 15, marginBottom: tamanho / 18 }}>
          Turno de {jogador}
        </Text>
      )}

      {linhasFixas.map((_, linhaIndex) => renderizarLinha(linhaIndex))}
    </View>
  );

  function renderizarLinha(linhaIndex: number) {
    return (
      <View
        key={linhaIndex}
        style={[
          {
            width: tamanho * 3,
            columnGap: tamanho / 30,
            marginBottom: tamanho / 30,
          },
          style.container,
        ]}
      >
        {blocosFixos.map((_, colunaIndex) => (
          <Selection
            key={colunaIndex}
            tamanho={tamanho}
            valor={tabuleiro[linhaIndex][colunaIndex]}
            onPress={() => jogar(linhaIndex, colunaIndex)}
          />
        ))}
      </View>
    );
  }
}
