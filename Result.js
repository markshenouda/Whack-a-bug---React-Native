import React from 'react'
import { StyleSheet, Text, ImageBackground, SafeAreaView, Image, Button } from 'react-native'
import { useStateValue } from './StateProvider'

export default function Result() {
    const [{score}, dispatch] = useStateValue()

    function playAgain() {
        dispatch({
            type: 'RESET_SCORE'
        })
        dispatch({
            type: 'SET_SCREEN',
            screen: 'Game'
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('./assets/eXpresso.jpg')} style={styles.image} >
                <Image source={require('./assets/logo.png')} style={styles.logo} />
                <Text style={styles.result}>Your score is {score} </Text>
                <Button color='#ff8000' title='Play again' onPress={playAgain} />
                <Text style={styles.footer}>By Mark S. Shenouda</Text>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "space-around",
        alignItems: 'center',
        width: '100%'
    },
    logo: {
        width: 200,
        height: 300,
        resizeMode: 'contain'
    },
    result: {
        backgroundColor: 'green',
        borderRadius: 5,
        padding: 14,
        fontSize: 20,
        color: 'white',
        fontWeight: '600'
    },
    footer: {
        fontSize: 20,
        color: 'rgba(255, 255, 255, 0.75)',
        fontWeight: '700'
    }
})
