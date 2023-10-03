import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FlexBoxScreen = () => {

    //Flexbox trabaja sobre el total de la pantalla

  return (
    <View style={styles.container}>
        <Text style={styles.caja1}>
        Caja        1
        </Text>
        <Text style={styles.caja2}>
        Caja       2 
        </Text>
        <Text style={styles.caja3}>
        Caja        3
        </Text>
    </View>

  )
}

export default FlexBoxScreen

const styles = StyleSheet.create(
    {
        container :{
            flex:1 ,
            flexDirection:'column',
            backgroundColor:'green',
        },
        caja1:{
            flex: 1,
            fontSize:25,
            borderWidth:2,
            borderColor:'white'
        },
        caja2:{
            flex: 2,
            fontSize:25,
            borderWidth:2,
            borderColor:'white'
        },
        caja3:{
            flex: 3,
            fontSize:25,
            borderWidth:2,
            borderColor:'white'
        },
    }
)
