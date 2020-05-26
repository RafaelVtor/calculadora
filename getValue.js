import React, { useState, useEffect } from 'react'
import { isNumber } from 'util'

export default function getValue (value, igual) {
  console.log(value)

  let sinal = ''
  //let tamanho = value.length

  let result = 0
  let num1 = 0
  let num2 = 0

  let displayResult = 0
  const zerar = 0
  if (igual != ' = ') {
    displayResult = value.map(valor => {
      if (isNaN(parseInt(valor)) && valor != '=') {
        sinal = valor
        console.log('sinal')
      }
      if (!isNaN(parseInt(valor))) {
        num1 = parseInt(valor)
        if (result == 0) {
          result = num1
        } else {
          num2 = result
        }

        if (sinal == '+') {
          result = num1 + num2
          return result
        }
        if (sinal == '-') {
          result = num2 - num1 // Tive que multiplicar o resultado por -1 porque só estava retornando o número correto porem com o sinal invertido.
          return result
        }
        if (sinal == 'x') {
          result = num1 * num2
          return result
        }
        if (sinal == '/') {
          result = num2 / num1
          return result
        }
      }
    })
    console.log(displayResult)

    
    console.log(value.lastIndexOf('='))
    
  }
  let tamanhoResult = displayResult.length
  if(igual == ' = '){
    let teste = toString(displayResult[tamanhoResult - 1])
    console.log(displayResult[tamanhoResult - 1])
    console.log(teste)
    return teste
  }
  console.log(displayResult[tamanhoResult - 1])
  return displayResult[tamanhoResult - 1]
}
