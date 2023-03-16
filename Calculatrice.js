import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Calculatrice() {

    const [firstNumber, setFirstNumber] = useState('0')
    const [secondNumber, setSecondNumber] = useState('0')
    const [operation, setOperation] = useState('0')
    const [result, setResult] = useState('0')

  return (
    <View>
      <Text>Calculatrice</Text>
    </View>
  )
}

const styles = StyleSheet.create({})