import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert } from 'react-native';

export default function History({ route, navigation }) {
  const { data } = route.params; 
 
  return (
    <View style={styles.container}>
        <FlatList
        ListHeaderComponent={<Text>Laskimen käyttöhistoria</Text>}
        data={data}
        keyExtractor={ (item, index) => index }
        //renderItem={({ item }) => {return <Text>{item}</Text>}}
        renderItem={({ item}) => <Text>{item}</Text>}
        />
    </View>
  )
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
      width : '80%',
      marginTop : 10,
    },
    list : {
      marginTop : 15,
  
    }
  });



