import React, { useState, useEffect } from 'react'
import { isNumber } from 'util'

export default function getValue (value) {
  console.log(value)

  let sinal = ''
  let tamanho = value.length

  let result = 0
  let num1 = 0
  let num2 = 0

  value.map(valor => {
    console.log(valor)

    //   if(tamanho >= 3){
    //    num1 = parseInt(value[tamanho - 2])
    //    num2 = parseInt(value[tamanho])
    //    console.log(num1 + num2)
    //   }

    if (isNaN(parseInt(valor))) {
      sinal = valor
      console.log('sinal')
    }
    if (!isNaN(parseInt(valor))) {
      num1 = parseInt(valor)
      if(result == 0){
        result = num1
      }else{
        num2 = result

      }

      if (sinal == '+') {
        result = num1 + num2
        console.log(result)
      }
      if (sinal == '-') {
        result = (num2 - num1)  // Tive que multiplicar o resultado por -1 porque só estava retornando o número correto porem com o sinal invertido.
        console.log(result)
      }
      if (sinal == 'x') {
        result = num1 * num2
        console.log(result)
      }
      if (sinal == '/') {
        result = num2 / num1
        console.log(result)
      }
    }
  })
}
