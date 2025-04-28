import { Text, TouchableOpacity, } from 'react-native'
import styles from '../components/SelectionStyle'
import { useState } from 'react'

interface SelectionProps{
    tamanho: number;
}

export default function Selection({tamanho}: SelectionProps) {
    const [text, setText] = useState('x');

    return(
        <TouchableOpacity style={[styles.container, {width: tamanho, height: tamanho}]}>
            <Text style={[styles.text, {width: tamanho, height: tamanho}]}>{text}</Text>
        </TouchableOpacity>
        
    )
}

