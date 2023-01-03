import React from 'react'
import './App.css';
import freecodecamp from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton'

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freecodecamp}
          className='freecodecamp-logo'
          alt='Logo de freecodecamp'
        />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'>
        <Boton>1</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div></div>


      </div>
   
    </div>
  );
}

export default App;
