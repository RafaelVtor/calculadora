import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App () {
  return (
    <>
      

      <View style={styles.container}>
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoTexto}>0</Text>
        </View>
        <View style={styles.botoesContainer}>

        <Text style={styles.num}>1</Text>
        <Text style={styles.num}>2</Text>
        <Text style={styles.num}>3</Text>
        <Text style={styles.num}>4</Text>
        <Text style={styles.num}>5</Text>
        <Text style={styles.num}>6</Text>
        <Text style={styles.num}>7</Text>
        <Text style={styles.num}>8</Text>
        <Text style={styles.num}>9</Text>
        <Text style={styles.num}>0</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#fff',
    
  },
  resultadoContainer:{
    flex: 2,
    backgroundColor: '#1E1240',
    justifyContent: "center",
  },
  
  
  botoesContainer:{
    flex:8,
    
    backgroundColor: '#3D0075',
    borderStyle:"dashed",
    margin: 0.3,
    padding: 5,
    
  },
  resultadoTexto:{
    color: '#FFF',
    fontSize: 80,
    fontWeight:'bold',
    padding: 20,
    textAlign: "right",
  }, 
  num:{
    color: '#FFF',
  }
})
