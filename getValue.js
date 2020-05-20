import React, { useState, useEffect } from 'react'
import { isNumber } from 'util'



export default function getValue (value, result) {
  
  console.log(result)

  
  let sinal = ''
  
  value.map(valor => {
    let num = 0

    if (isNumber(parseInt(valor))){
      num = valor
    }
    if(!isNumber(parseInt(valor)) ){
      sinal = valor
    }
    switch (sinal) {
      case '+':
        console.log('soma')
          setResult(+ num)
        break;
        case '-':
          result = result - num
        break;
        case 'x':
          result = result * num
        break;
        case '/':
          result = result / num
        break;
    
      default:
        break;
    }
    console.log(result)
      
    
  })
}
