import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function App () {
  const botoes = [['LIMPAR', 'DEL'], [7, 8, 9], [4, 5, 6], [1, 2, 3], [0]]

  function renderButtons () {
    let layout = botoes.map((buttonRows, index) => {
      let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
        return <View key={'btn-' + buttonIndex} />
      })
      return (
        <View style={styles.inputRow} key={'row-' + index}>
          {rowItem}
        </View>
      )
    })
    return layout
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoTexto}>0</Text>
        </View>
        
        <View style={styles.botoesContainer}>
          
            {botoes.map((buttonRows, index) => {
              let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
                return <TouchableOpacity style={styles.botoesNucleo} key={'btn-' + buttonIndex} />
              })
              return (
               
                <View style={styles.inputRow} key={'row-' + index}>
                  {rowItem}
                </View>
               
              )
            })}
            
         
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff'
  },
  resultadoContainer: {
    flex: 2,
    backgroundColor: '#1E1240',
    justifyContent: 'center'
  },

  botoesContainer: {
    flex: 8,

    backgroundColor: '#3D0075',
    
    margin: 0.3,
    padding: 5
  },
  resultadoTexto: {
    color: '#FFF',
    fontSize: 80,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'right'
  },
  botoesNucleo: {
    flex: 1,
    margin: 1,
    backgroundColor: 'rgba(255,255,255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputRow: {
    flex:1,
    
    margin:1,
    flexDirection: 'row',
    justifyContent: "space-between"
    
  }
})
