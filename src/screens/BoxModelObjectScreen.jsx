import React from 'react'
import { StyleSheet, Text, Button, View, Alert } from 'react-native';
import '../css/theme'
import { theme } from '../css/theme';

const BoxModelObjectScreen = () => {
    return (
        <View style={styles.container} >
            {/*Asi se ponen varios esilos en linea*/}
            <Text style={[theme.title, { margin: 30 }]}>Hola, esta es mi primera app react native</Text>

            <Text>
                View es un componente que sirve como contenedor
            </Text>

            <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>

    )
}



//Para comentar Ctrl + K +C
//Para descomnentar Ctrl + k + u

const styles = StyleSheet.create(
    {
        title: {
            fontSize: 40,
        },

        container: {
            display: 'flex',
        },
    }
);



export default BoxModelObjectScreen