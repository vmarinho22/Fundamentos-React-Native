import React from 'react'
import {SafeAreaView,Text, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'


export default (props) =>{
    return(
        <SafeAreaView style={style.FlexV2}>
            <Quadrado cor='#ff801a'/>
            <Quadrado cor='#50d1f6'/>
            <Quadrado cor='#dd22c1'/>
            <Quadrado cor='#8312ed'/>
            <Quadrado cor='#36c9a7'/>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV2:{
        flex: 1,
        width: '100%',
        justifyContent: "space-between",
        alignItems: 'flex-end',
        backgroundColor: '#000'
    }
})