import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'
import Square from './Square'
import {useStateValue} from './StateProvider'

export default function Game() {
    const [{score}, dispatch] = useStateValue()
    const [timeleft, setTimeleft] = useState(10)
    
    useEffect(()=>{
        const timer = setInterval(() => {
            dispatch({
                type: 'SET_SQUARE'
            })
            setTimeleft(timeleft - 1)
        }, 1000)

        if(timeleft === 0) {
            dispatch({
                type: 'SET_SCREEN',
                screen: 'Result'
            })
        }

        return () => clearInterval(timer)
    }, [timeleft])


    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('./assets/eXpresso.jpg')} style={styles.image} >
                <View style={styles.details}>
                    <Text style={styles.timeLeft}>Time left: {timeleft} </Text>
                    <Text style={styles.score}>Score: {score} </Text>
                </View>
                <View style={styles.gameBoard}>
                    <Square id={0} />
                    <Square id={1} />
                    <Square id={2} />
                    <Square id={3} />
                    <Square id={4} />
                    <Square id={5} />
                    <Square id={6} />
                    <Square id={7} />
                    <Square id={8} />
                    <Square id={9} />
                    <Square id={10} />
                    <Square id={11} />
                </View>
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
        justifyContent: "center",
        alignItems: 'center',
        width: '100%'
    },
    gameBoard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 300,
        marginTop: 70
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width : '70%'
    },
    timeLeft: {
        backgroundColor: 'green',
        borderRadius: 5,
        padding: 14,
        fontSize: 14,
        color: 'white',
        fontWeight: '600'
    },
    score: {
        backgroundColor: 'red',
        borderRadius: 5,
        padding: 14,
        fontSize: 14,
        color: 'white',
        fontWeight: '600'
    }
})
