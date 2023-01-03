import React from 'react'

export default function Boton(props) {
  return(
    <div className={`boton-contenedor ${}`}>
      {props.children}
    </div>
  )
}