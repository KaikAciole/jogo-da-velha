import Tabuleiro from "@/components/Tabuleiro";
import { Dimensions, Text, TextBase, } from "react-native";

const { width, height } = Dimensions.get('window');
const tamanho = Math.min(width, height) * 0.25;

export default function Index() {
  return (
    <>
      <Text style={{textAlign:'center', fontWeight: '900', fontSize: '1rem', margin: tamanho/20}} >Jogo da Velha</Text>
      <Tabuleiro tamanho={tamanho} />
    </>
  );  
}
