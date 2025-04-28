import { Text, TouchableOpacity, } from 'react-native'
import styles from '../components/SelectionStyle'
import { useState } from 'react'

interface SelectionProps{
    tamanho: number;
    valor: string;
    onPress: () => void;
}

export default function Selection({tamanho, valor, onPress}: SelectionProps) {
    return(
        <TouchableOpacity 
            style={[styles.container, {width: tamanho, height: tamanho}]}
            onPress={onPress}    
        >
            <Text style={[styles.text, {width: tamanho, height: tamanho}]}>{valor}</Text>
        </TouchableOpacity>
        
    )
}

