import React from 'react'
import { Button,View, StyleSheet } from 'react-native'


export default (props) =>{
    return(
        <React.Fragment>
            <View style={style.Botoes}>
                <Button title="+" onPress={props.inc}/>
                <Button title="-" onPress={props.dec}/>
            </View>
        </React.Fragment>
    )
}

const style = StyleSheet.create({
    Botoes:{
        flexDirection: "row"
    }
})