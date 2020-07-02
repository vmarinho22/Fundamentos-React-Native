import React from 'react'
import {SafeAreaView,Text} from 'react-native'
import Estilo from '../estilo'

import ContadorDisplay from './ContadorDisplay'
import ContadorBotoes from './ContadorBotoes'

export default (props) =>{
    
    const [num,setNum] = React.useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return(
        <React.Fragment>
            <Text style={Estilo.txtG}>
                Contador v2
            </Text>
            <ContadorDisplay num={num}/>
            <ContadorBotoes inc={inc} dec={dec} />
        </React.Fragment>
    )
}