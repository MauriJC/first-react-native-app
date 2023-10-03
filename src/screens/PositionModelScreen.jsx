import { StyleSheet, View, Text, Dimensions, useWindowDimensions } from "react-native"


const PositionModelScreen = () => {

    const { width, height } = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.cajaRoja}></Text>
                <Text style={styles.cajaAzul}></Text>
            </View>
            <Text>
                H:{height}
                W:{width}
            </Text>
        </View>
    )




}

export default PositionModelScreen


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        height: 600,

    },

    cajaRoja: {
        backgroundColor: 'red',
        width: '20%',
        height: '20%',
        borderColor: 'white',
        borderWidth: 5,
    },

    cajaAzul: {
        backgroundColor: 'blue',
        width: '20%',
        height: '20%',
        borderColor: 'white',
        borderWidth: 5,
    }
})
