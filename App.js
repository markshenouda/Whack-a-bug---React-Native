import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StateProvider, useStateValue } from './StateProvider'
import reducer, { initialState } from './reducer'
import Home from './Home'
import Game from './Game'
import Result from './Result'

function App() {
  const [{screen},] = useStateValue()
  
  switch(screen) {
    case 'Home':
      return <Home />

    case 'Game':
      return <Game />

    case 'Result':
      return <Result />

    default:
      return <Home />
  }
}


export default function index() {
  return (
    <StateProvider reducer={reducer} initialState={initialState} >
      <App />
    </StateProvider>
  )
}
