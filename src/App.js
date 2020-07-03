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
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
// import UsuarioLogado from './components/UsuarioLogado'
// import ListaProdutos from './components/produtos/ListaProdutos'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import FlexBoxV1 from './components/layout/FlexboxV1'
// import FlexboxV1 from './components/layout/FlexboxV1'
// import FlexboxV2 from './components/layout/FlexboxV2'
// import FlexboxV3 from './components/layout/FlexboxV3'
// import FlexboxV4 from './components/layout/FlexboxV4'
import Mega from './components/mega/Mega'


export default () => (
    <SafeAreaView style={style.App}>

        <Mega qtdeNumeros={7}/>
        {/* <Contador inicial={100} passo={13}/> */}

        {/* <Aleatorio min={1} max={60}/>
        <FlexboxV4/>
        <FlexboxV3/>
        <FlexboxV2/>
        <FlexboxV1/>
        <DigiteSeuNome/>
        <ListaProdutosV2/>
        <ListaProdutos/>
        <UsuarioLogado usuario={{nome: 'Vini', email: 'vinicius@abc.com'}}/>
        <Familia>
            <Membro nome="Vinicius" sobrenome="Marinho" />
            <Membro nome="Maria" sobrenome="Marinho" />
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Julia" sobrenome="Silva" />
        </Familia>
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


