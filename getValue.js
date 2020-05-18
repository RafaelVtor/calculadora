import React, { useState } from 'react'
import { isNumber } from 'util'


export default function getValue (value) {
  console.log(value)

  let result = 0
  
  value.map(valor => {
    let num = 0
    let operador = null
    let igual = null
    let teste = parseInt(valor)

    if (!isNaN(teste)) {
      num = teste

      console.log(num)
    } else if (valor != '=') {
      operador = valor
    }else if(valor == '='){
      igual = valor
    }

    switch (operador) {
      case '+':
        console.log('soma')
        result += num
        console.log(result)
        break
      case '-':
        console.log('subtração')
        break
      case 'x':
        console.log('multiplicação')
        break
      case '/':
        console.log('divisão')
        
        break
      case 'LIMPAR':
       
       break
      }
      if(igual == '='){
        console.log(result)
      }
      
    
  })
}
