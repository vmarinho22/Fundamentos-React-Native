import React from 'react'
import {SafeAreaView,Text} from 'react-native'
import Estilo from '../estilo'
import Filho from './Filho'

export default (props) =>{
    const [num,setNum] = React.useState(0)

    function exibirValor(numero){
        setNum(numero)
    }

    return(
        <React.Fragment>
            <Text style={Estilo.txtG}>{num}</Text>
            <Filho min={1} max={60} funcao={exibirValor} />
        </React.Fragment>
    )
}