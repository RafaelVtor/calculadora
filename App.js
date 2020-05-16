import React, {useState, } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { isNumber } from 'util';

export default function App () {
  const botoes = [['LIMPAR', 'DEL'], [7, 8, 9, ' x '], [4, 5, 6, ' - '], [1, 2, 3, ' + '], [0]]

  const [display, setDisplay] = useState('0')
  

//função para mapear os botões (não consegui chamar no return)
  /*function renderButtons () {
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
  } */

  //função que pega o valor dos botões e exibe no display
  function handleOnPress(value){

     let num = 0
     if(isNumber(value)){
       console.log(isNumber(num))
       num = display.concat(value).split(" ")
      }
      
      console.log(num)
      console.log(num.length)
      if (num.length > 1) {
        num = num.slice(0, 10) 
      }
            
      setDisplay(display.concat(value));
     
  
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.resultadoContainer}>
  <Text style={styles.resultadoTexto} placeholder="0">{display}</Text>
        </View>

        <View style={styles.botoesContainer}>
          {botoes.map((buttonRows, index) => {
            let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
              return (
                <TouchableOpacity
                  style={styles.botoesNucleo}
                  key={'btn-' + buttonIndex}
                  onPress={()=>handleOnPress(buttonItems)}
                >
                  <Text style={styles.text}>{buttonItems}</Text>
                </TouchableOpacity>
              )
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
    flex: 1,
    margin: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text:{
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'right'
  }
})
