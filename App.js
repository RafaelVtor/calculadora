import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { isNumber } from 'util'
import getValue from './getValue'

export default function App () {
  const botoes = [
    [' LIMPAR ', ' DEL '],
    [7, 8, 9, ' x '],
    [4, 5, 6, ' - '],
    [1, 2, 3, ' + '],
    [0, ' . ', ' / ', ' = ']
  ]

  const [display, setDisplay] = useState('0')
  let resultado = 0

  function handleOnPress (value) {
    let array = []
    if (isNumber(value)) {
      array = display.concat(value).split(' ')
    }

    if (array.length >= 1) {
      array = array.slice(0)
    }

    /*
    array.map(valor => {
      let teste = parseInt(valor)
      let operador = ''
      let igual = ''
      let num1 = 0
      let num2 = result

      if (isNaN(teste)) {
        if (teste == '=') {
          igual = teste
          console.log(igual)
        } else {
          operador = valor
          console.log(operador)
        }
      } if (isNumber(teste)) {
        num1 = teste
        console.log(num1)
        setResult(+num1)
      }
      switch (operador) {
        case '+':
          console.log('soma')
          //result += num1
        //  console.log(result)
          //setResult(+num1)
          break
        case '-':
          console.log('subtração')
          //result = result - num
          break
        case 'x':
          console.log('multiplicação')
          //   result = result * num
          break
        case '/':
          console.log('divisão')
          //   result = result / num
          break
      }
      console.log(result)
    })
    //console.log(result)

    switch (value) {
      case 'LIMPAR':
        this.setDisplay('0')

        break
      case '=':
        console.log('teste')
        
        break
        default:
          
          break
        }
        
        */
       setDisplay(display.concat(value))
        getValue(array)
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoTexto} placeholder='0'>
            {display}
          </Text>
        </View>

        <View style={styles.botoesContainer}>
          {botoes.map((buttonRows, index) => {
            let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
              return (
                <TouchableOpacity
                  style={styles.botoesNucleo}
                  key={'btn-' + buttonIndex}
                  onPress={() => handleOnPress(buttonItems)}
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
  text: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'right'
  }
})
