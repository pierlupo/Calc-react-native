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

    const [firstNumber, setFirstNumber] = useState('0')
    const [secondNumber, setSecondNumber] = useState('0')
    const [operation, setOperation] = useState('0')
    const [result, setResult] = useState('0')

    function PressTouche() {
      console.log("j'ai appuyé sur une des touches 'number'");
    }

function OnOff() {
      console.log("j'ai appuyé sur la touche 'on/off'");
    }

function Clear() {
  console.log("j'ai appuyé sur la touche C");
}

function operationPress() {
  console.log("j'ai appuyé sur une des touches d'opé");
}

function resultPress() {
  console.log("j'ai appuyé sur la touche égale");
}
  return (
    <>
    <View style={styles.titleCont}>
    <Text style={[styles.title, styles.baseText]}>Calculator</Text>
    </View>
    <View style={styles.screenContainer}>
      <View style={styles.calcContainer}>
      <Ecran></Ecran>
        
     
      
      <View style={[styles.btnDisplay, styles.elevation]}>
 
        <AppButton onPress={OnOff} title="On/Off" isOn />  
        <AppButton onPress={()=> {Clear("C")}} isC title="C" />  
        <AppButton onPress={()=> {operationPress("^")}} isOp title="^" />
   
      </View>
      <View style={[styles.btnDisplay,styles.elevation]}>
 
        <AppButton onPress={PressTouche} title="7" />
        <AppButton onPress={PressTouche} title="8" />
        <AppButton onPress={PressTouche} title="9" />
        <AppButton onPress={()=> {operationPress("+")}} isOp title="+" />

      </View>
      <View style={[styles.btnDisplay,styles.elevation]}>
        <AppButton onPress={PressTouche} title="4" />
        <AppButton onPress={PressTouche} title="5" />
        <AppButton onPress={PressTouche} title="6" />
        <AppButton onPress={()=> {operationPress("-")}} isOp title="-" />

      </View>
      <View style={[styles.btnDisplay,styles.elevation]}>
        <AppButton onPress={PressTouche} title="1" />
        <AppButton onPress={PressTouche} title="2" />
        <AppButton onPress={PressTouche} title="3" />
        <AppButton onPress={operationPress} isOp title="*" />
      </View>

      <View style={[styles.btnDisplay,styles.elevation]}>
        <AppButton onPress={PressTouche} isOp title="%" />  
        <AppButton onPress={operationPress} isOp title="/" />
        <AppButton onPress={PressTouche} isOp title="." />  
        <AppButton onPress={resultPress} isC title="=" />
      </View>
      
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
    marginTop: 20,
    padding: 10,
  },
  baseText:{
    fontFamily: 'fangsong',
    fontWeight: 'bold',
  },
  titleCont: {

    backgroundColor: '#C9C5CB',
  }
 

});
  


export default App;
