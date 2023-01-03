import React from 'react'
import '../hojas-de-estilo/Boton.css'

export default function Boton(props) {
  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
  }

  return(
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : '' }`.trimEnd()}>
      {props.children}
    </div>
  )
}