import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const tamanho = Math.min(width, height) * 0.2;

export default StyleSheet.create({
    

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'green',        
    },

    text: {
        textDecorationColor: 'none',
        backgroundColor: 'red',
        borderBlockColor: 'none',
        textAlign: 'center',
        alignContent: 'center',
        borderBlockStartColor: 'rgb(0,0,0)' ,
        
    }
})