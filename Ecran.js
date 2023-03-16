import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'



export default function Ecran() {

  const [textInput,setTextInput] = useState('')

  function RecupInput(enteredNumbers) {
    console.log(enteredNumbers)
    setTextInput(enteredNumbers)
  }

  return (
    <View style={[styles.screen, styles.elevation]}>
    <Text>{textInput}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    screen: {

        width:'auto',
        height:150,
        backgroundColor: "#D7D9D7",
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        borderRadius: 5,
        padding:5
        
      },
      elevation: {
        
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        padding: 10,
        shadowColor: 'black',
        borderRadius: 5,
        
        // backgroundColor: '#fff'

      },
})