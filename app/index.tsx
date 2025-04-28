import Selection from "@/components/Selection";
import Tabuleiro from "@/components/Tabuleiro";
import { Dimensions, } from "react-native";

const { width, height } = Dimensions.get('window');
const tamanho = Math.min(width, height) * 0.25;

export default function Index() {
  return (
    <>
      <Tabuleiro tamanho={tamanho} />
    </>
  );
}
