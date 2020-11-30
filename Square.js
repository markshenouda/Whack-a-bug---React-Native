import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import {useStateValue} from './StateProvider'

export default function Square({id}) {
    const [{square}, dispatch] = useStateValue()

    function handlePress() {
        if(square === id) {
            dispatch({
                type: 'ADD_SCORE'
            })
        }
    }

    return (
        <View style={styles.square}>
            <TouchableOpacity style={styles.touchBtn} onPress={handlePress}>
                <Image source={square === id? require('./assets/file-bug.png') : require('./assets/file.png')} style={styles.fileImage} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    square: {
        flex: 1,
        minWidth: 80,
        minHeight: 80,
        margin: 10,
    },
    touchBtn: {
        minWidth: 80,
        minHeight: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fileImage: {
        width: 70,
        height: 70,
        resizeMode: 'contain'
    }
})
