import React from 'react'
import { SafeAreaView,StyleSheet } from 'react-native'

import Comp,{ Comp1, Comp2} from './components/Multi'
import Primeiro from './components/Primeiro'
import MinMax from './components/MinMax'
import Aleatorio from './components/NumAleatorio'
import Titulo from './components/Titulo'
import Botao from './components/Botao'



export default () => (
    <SafeAreaView style={style.App}>
        <Botao></Botao>
        {/* <Aleatorio min={1} max={60}/>
        <Titulo principal="Cadastro Produto" segundario="Tela de cadastro"/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/> */}
        {/* <MinMax min="3" max={20}/> */}
        {/* <Comp/>
        <Comp1/>
        <Comp2/>
        <Primeiro/> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App:{
        backgroundColor: '#fff',
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    }
})


