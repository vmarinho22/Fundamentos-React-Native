import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

export default (props) =>{
    var numAleatorio = Math.random() *(props.max - props.min) + props.min
    numAleatorio = Math.floor(numAleatorio)

    return (
        <Text style={Estilo.txtG}>O número gerado foi: {numAleatorio}</Text>
    )
}