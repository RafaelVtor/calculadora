import React, { useState, useEffect } from 'react'
import { isNumber } from 'util'

export default function getValue (value) {
  console.log(value)

  let sinal = ''
  //let tamanho = value.length

  let result = 0
  let num1 = 0
  let num2 = 0
  let igual = ''
  let displayResult = 0
  const zerar = 0

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
  
  let tamanhoResult = displayResult.length

  
  
  console.log(value.lastIndexOf('=')); 
  
  if(sinal == '='){
    console.log('teae')
  }
  
  return displayResult[tamanhoResult-1];
}
