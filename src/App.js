import React from 'react'
import { SafeAreaView,StyleSheet } from 'react-native'

// import Comp,{ Comp1, Comp2} from './components/Multi'
// import Primeiro from './components/Primeiro'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/NumAleatorio'
// import Titulo from './components/Titulo'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pai from './components/direta/Pai'
// import Pai from './components/indireta/Pai'
// import ContadorV2 from './components/contator/ContatoV2'
// import Defirenciar from './components/Diferenciar'
// import ParImpar from './components/ParImpar'
import Familia from './components/relacao/Familia'
import Membro from './components/relacao/Membro'



export default () => (
    <SafeAreaView style={style.App}>
        <Familia>
            <Membro nome="Vinicius" sobrenome="Marinho" />
            <Membro nome="Maria" sobrenome="Marinho" />
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Julia" sobrenome="Silva" />
        </Familia>

        {/* <Contador inicial={100} passo={13}/> */}

        {/* <Aleatorio min={1} max={60}/>
        <ParImpar num={3}/>
        <Defirenciar/>
        <ContadorV2/>
        <Pai/>
        <Botao></Botao>
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


