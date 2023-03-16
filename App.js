import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
  Pressable
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
import DropShadow from "react-native-drop-shadow";
import AppButton from './ButtonComponent';
import Ecran from './Ecran.js';






const App = () => {

    const [firstNumber, setFirstNumber] = useState('')
    const [secondNumber, setSecondNumber] = useState('')
    const [operation, setOperation] = useState('')
    const [result, setResult] = useState('0')

function PressTouche(num) {
      console.log("j'ai appuyé sur une des touches:"+ num);
      if(firstNumber != "0"){
      setFirstNumber(firstNumber + num)}
      else{
      setFirstNumber(num)
      }
    }

function OnOff() {
      console.log("j'ai appuyé sur la touche 'on/off'");
    }

function Clear() {
  console.log("j'ai appuyé sur la touche C");
  setFirstNumber("")
  setOperation("")
  setSecondNumber("")
  setResult("0")
}

function operationPress(ope) {
  console.log("j'ai appuyé sur une des touches d'opé"+" "+ope);
  setOperation(ope)
  setSecondNumber(firstNumber)
  setFirstNumber("")
}

function resultPress() {
  console.log("j'ai appuyé sur la touche égale")
  console.log("faire opération de "+secondNumber+" "+operation+" "+firstNumber)
  let resultat;
  switch(operation){
    case "+":
      resultat = parseFloat(firstNumber) + parseFloat(secondNumber);
      setResult(resultat)
      break;
    case "-":
      resultat = parseFloat(firstNumber) - parseFloat(secondNumber);
      setResult(resultat)
      break;
    case "/":
      resultat = parseFloat(secondNumber) / parseFloat(firstNumber);
      setResult(resultat)
      break;
    case "X":
      resultat = parseFloat(secondNumber) * parseFloat(firstNumber);
      setResult(resultat)
      break;
  }
}
  return (
    <>
    <View style={styles.titleCont}>
    <Text style={[styles.title, styles.baseText]}>Calculator</Text>
    </View>
    <View style={styles.screenContainer}>
      <View style={styles.calcContainer}>
      <Ecran firstNumber={firstNumber} secondNumber={secondNumber} operation={operation} result={result}></Ecran>
        
     
      
      <View style={[styles.btnDisplay, styles.elevation]}>
 
        <AppButton onPress={OnOff} title="AC" isOn />  
        <AppButton onPress={()=> {Clear("C")}} isC title="C" />  
        <AppButton onPress={()=>{operationPress("%")}} isOp title="%" />  
        {/* <AppButton onPress={()=> {operationPress("^")}} isOp title="^" /> */}
   
      </View>
      <View style={[styles.btnDisplay,styles.elevation]}>
 
        <AppButton onPress={()=> {PressTouche("7")}} title="7" />
        <AppButton onPress={()=> {PressTouche("8")}} title="8" />
        <AppButton onPress={()=> {PressTouche("9")}} title="9" />
        <AppButton onPress={()=> {operationPress("+")}} isOp title="+" />

      </View>
      <View style={[styles.btnDisplay,styles.elevation]}>
        <AppButton onPress={()=> {PressTouche("4")}} title="4" />
        <AppButton onPress={()=> {PressTouche("5")}} title="5" />
        <AppButton onPress={()=> {PressTouche("6")}} title="6" />
        <AppButton onPress={()=> {operationPress("-")}} isOp title="-" />

      </View>
      <View style={[styles.btnDisplay,styles.elevation]}>
        
        <AppButton onPress={()=> {PressTouche("1")}} title="1" />
        <AppButton onPress={()=> {PressTouche("2")}} title="2" />
        <AppButton onPress={()=> {PressTouche("3")}} title="3" />
        <AppButton onPress={()=>{operationPress("X")}} isOp title="*" />
      </View>

      <View style={[styles.btnDisplay,styles.elevation]}>
        <AppButton onPress={()=> {PressTouche("0")}} title="0" />  
        <AppButton onPress={resultPress} isC title="=" />
        <AppButton onPress={()=>{operationPress(".")}} isOp title="." />
        <AppButton onPress={()=>{operationPress("/")}} isOp title="/" />
      </View>
      {/* <View style={[styles.btnDisplay,styles.elevation]}>
      <AppButton onPress={resultPress} isC title="(" />
      <AppButton onPress={resultPress} isC title=")" />
      </View> */}
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({

  screenContainer: {

    flex: 1,
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#C9C5CB',
   
    
  },
  calcContainer:{

    marginLeft: 'auto',
    marginRight: "auto",
    backgroundColor: 'grey',
    borderWidth: 5,
    borderRadius: 10,
    marginBottom:10,

  },

  btnDisplay: { 

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
   
  },

  btnDisplayOn: { 

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 150

  },
  elevation: {

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    padding: 10,
    shadowColor: 'black',
    borderRadius: 5,
    backgroundColor: '#fff'

  },
  title: {
    marginLeft: 'auto',
    marginRight: "auto",
    backgroundColor: '#C9C5CB',
    color: 'black',
    fontSize: 35,
    marginTop: 10,
    padding: 10,
  },
  baseText:{
    fontFamily: 'fangsong',
    fontWeight: 'bold',
  },
  titleCont: {

    backgroundColor: '#C9C5CB',
  },


});
  


export default App;
