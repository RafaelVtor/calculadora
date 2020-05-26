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
  const [displayResult, setDisplayResult] = useState('0')
  let resultado = 0
  let teste

  function handleOnPress (value) {
    let array = []

    if (value == ' DEL ') {
      //retia o ultimo caractere da string do display
      setDisplay(display.substring(0, display.length - 1))
    } else if (value == ' LIMPAR ') {
      //reseta o display para 0
      setDisplay('0')
    } else if( value != ' = ') {
      if (isNumber(value)) {
        //separa a string do display em numeros e simbolos atravas do espeço nos vaores não númericos
        array = display.concat(value).split(' ')
      }

      setDisplay(display.concat(value))
      if (value != ' = ') {
        teste = getValue(array)
        console.log(teste)
      }
      getValue(array)
    }
    if(value == ' = '){
      setDisplayResult(teste)

    }
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.resultadoContainer}>
          <View style={styles.resultado}>
            <Text style={styles.resultadoTexto} placeholder='0'>
              {displayResult}
            </Text>
            <Text style={styles.resultadoTexto} placeholder='0'>
              {display}
            </Text>
          </View>
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
    backgroundColor: '#1E1240'
  },
  resultado: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
