import React, { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function Calculator({ navigation }) {
  
  const [result, setResult] = useState("");
  const [resultinfo, setResultinfo] = useState('Syötä numerot ja valitse operaatio');

  const [nro1, setNro1] = useState("");
  const [nro2, setNro2] = useState("");

  const [data, setData] = useState([]);

  const initialFocus = useRef(null);

  const allclear = () => {

    setResult('');
    setResultinfo('Syötä numerot ja valitse operaattori');
  }


  const calculate = operator => {
    console.log(nro1, operator, nro2)

    const [number1, number2] = [Number(nro1), Number(nro2)];

    if (isNaN(number1) || isNaN(number2)) {
      setResult('');
      Alert.alert("Numeroita kiitos!");
      console.log(result);
            
    } else {
      let result = 0;
      switch (operator) {
        case '+':
          result = number1 + number2;
          break;
        case '-':
          result = number1 - number2;
          break;
        case '*':
          result = number1 * number2;
          break;
        case '/':
          if (number2 == 0) {
            Alert.alert("Yritit jakaa nollalla!");
            result = 'ei sallittu';
            break;
          }
          else {      
            result = number1 / number2;
            break;
          }
          
      }
      setResult(result);

      const text =  `${number1} ${operator} ${number2} = ${result}`;
      setData([...data, text]);
    }

    setResultinfo('Result: ');
    setNro1('');
    setNro2('');
    
    initialFocus.current.focus();
  }



  return (
    <View style={styles.container}>      
      <Text style={styles.heading}>{resultinfo} {result}</Text>
      <TextInput 
        style={styles.input} 
        ref={initialFocus}
        keyboardType={'numeric'}
        onChangeText={text => setNro1(text)}
        value={nro1}
        />

      <TextInput
        style={styles.input}
        keyboardType={'numeric'}
        onChangeText={text => setNro2(text)}
        value={nro2}
        />
      <View style={styles.buttons}>
        <Button onPress={() => calculate('+')} title=' + '></Button>
        <Button onPress={() => calculate('-')} title=' - '></Button>
        <Button onPress={() => calculate('*')} title=' * '></Button>
        <Button onPress={() => calculate('/')} title=' / '></Button>
      </View>
      <View style={styles.buttons}>
        <Button onPress={() => allclear()} title=' Clear  '></Button>
        <Button onPress={() => navigation.navigate('History', {data})}
        title="History" />
      </View>
      
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop : 30,
      
    },
    heading: {
      fontSize: 20,
      marginTop: 15,
      marginBottom: 15,
    },
    input: {
      borderColor : 'grey', 
      borderWidth : 1,
      fontSize : 16, 
      marginTop : 10, 
      width : '50%',
    }, 
    buttons: {
      flexDirection : 'row', 
      justifyContent : 'space-evenly',
      height : 50,
      width : '50%',
      marginTop : 10,
    },
    list : {
      marginTop : 15,
  
    }
  });