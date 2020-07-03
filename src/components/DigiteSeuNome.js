import React from 'react'
import {SafeAreaView,Text, TextInput, View} from 'react-native'
import Estilo from './estilo'

export default (props) =>{
    const [nome,setNome] = React.useState('')
    return(
        <View>
            <Text style={Estilo.txtG}>Primeiro uso de text input</Text>
            <TextInput 
                placeholder="Digite seu Nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
            <Text>O que foi digitado na caixa foi: {nome}</Text>
        </View>
    )
}