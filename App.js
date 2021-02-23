import React, { useEffect, useState } from 'react';
import {Text, View, Image, TextInput, Button, ScrollView, RefreshControl } from 'react-native';

const App= () =>{
  const [saludo,setSaludo]=useState(false);
  const [misAmigos,setMisamigos]=useState([]);
  const [numero,setNumero]=useState(0)
  return (
    <View style={styles.cajaGrande}>
      <TextInput defaultValue="nombre de tu gato" style={styles.inputNombre}/>
      <Text style={styles.texto}>{saludo? "miauuuu :3": "grrrrr -.-"}</Text>
      {saludo
      ?<Button onPress={()=>setSaludo(!saludo)} title="tocar la panza al gato"/>
      :<Button onPress={()=>setSaludo(!saludo)} title="saludar al gato"/>
    }
    <Image source={{uri:"https://reactnative.dev/docs/assets/p_cat2.png"}} style={styles.imgGato}/>
      <Text>{numero}</Text>
    </View>
  )
}

const styles={
  cajaGrande:{
    backgroundColor: "green",
    flex: 1,
    alignItems: "center",
    justifyContent: "center" 
  },
  texto:{
    fontSize:50,
    color: "white",
  },
  imgGato:{
    width: 200,
    height: 200
  },
  inputNombre:{
    height: 50,
    width: 130,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    padding: 5
  }
}

export default App;