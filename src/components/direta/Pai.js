import React from 'react'
import {SafeAreaView,Text} from 'react-native'
import Estilo from '../estilo'

import Filho from './Filho'

export default (props) =>{
    let x = 13
    let y = 100
    return(
        <React.Fragment>
            <Filho a={x + 100} b={y + 100} />
        </React.Fragment>
    )
}