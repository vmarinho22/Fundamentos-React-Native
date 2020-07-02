import React from "react";
import { Text, Button } from "react-native";
import Estilo from "./estilo"

export default({inicial,passo = 1}) => {

    const [numero,setNumero] = React.useState(inicial);

    const inc = () => {
        setNumero(numero + passo)
    }

    const dec = () => {
        setNumero(numero - passo)
    }

    return(
        <React.Fragment>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="+" onPress={inc}></Button>
            <Button title="-" onPress={dec}></Button>
        </React.Fragment>
    )
}