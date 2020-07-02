import React from 'react'
import {SafeAreaView,Text, FlatList} from 'react-native'
import Estilo from '../estilo'

import produtos from './produtos'

export default (props) =>{
    const produtoRender = ({item: p})=>{
        return <Text>{p.id} - {p.nome}</Text>
    }

    return(
        <React.Fragment>
            <Text style={Estilo.txtG}>Lista de Produtos v2</Text>
            <FlatList 
                data={produtos} 
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}
            />
        </React.Fragment>
    )
}