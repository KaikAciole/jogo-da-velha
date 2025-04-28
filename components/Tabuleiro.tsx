import { View } from "react-native";
import Selection from "./Selection";

interface TabuleiroProps {
    tamanho: number;
}

export default function Tabuleiro({tamanho}: TabuleiroProps) {

    const numeroDeBlocos = 3;

    return(
        <>
            <View style={[{width: tamanho * 3, display: 'flex', flexDirection: 'row', gap: tamanho / 10}]}>
                
            </View>
            <View>
                
            </View>
            <View>
                
            </View>
        </>
    )
}