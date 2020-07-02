import React from 'react'
import {SafeAreaView,Text, Platform} from 'react-native'
import Estilo from './estilo'

export default (props) =>{
    if(Platform.OS === 'android'){
        return  (
            <Text style={Estilo.txtG}>Android</Text>
        )
    }else if(Platform.OS === 'ios'){
        return  (
            <Text style={Estilo.txtG}>IOS</Text>
        )
    }else{
        <Text style={Estilo.txtG}>Sistema Operacional não idenficado</Text>
    }
    
}