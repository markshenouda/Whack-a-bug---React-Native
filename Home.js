import React from 'react'
import { Button, StyleSheet, Text, View, ImageBackground, SafeAreaView, Image } from 'react-native'
import { useStateValue } from './StateProvider'

export default function Home() {
    const [{}, dispatch] = useStateValue()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <ImageBackground source={require('./assets/eXpresso.jpg')} style={styles.image}>
                    <Image source={require('./assets/logo.png')} style={styles.logo} />
                    <Button color='#ff8000' title='Start game' onPress={() => dispatch({type: 'SET_SCREEN', screen: 'Game'})} />
                    <Text style={styles.footer}>By Mark S. Shenouda</Text>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        width: '100%'
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
    footer: {
        fontSize: 20,
        color: 'rgba(255, 255, 255, 0.75)',
        fontWeight: '700'
    }
})
