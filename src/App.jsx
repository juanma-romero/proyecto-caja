import { useState } from 'react'

import './App.css'
import ListadoMovimientos from './components/ListadoMovimientos'
import Movimiento from './components/Movimiento'



function App() {
  const [fecha, setFecha] = useState('')

  const [tipoMovimiento, setTipoMovimiento] = useState('')
  
  return (
    <>
      <main className='container mx-auto text-white text-center ' >
        <h2 className='text-lg m-5' id='fecha'>
          Caja dia: <input
                      className='rounded'
                      id='fecha'
                      type='date'
                      onChange={(e)=>setFecha(e.target.value)}
                      />
        </h2>
        <hr className='m-3'></hr>
        <Movimiento
          tipoMovimiento={tipoMovimiento}
          setTipoMovimiento={setTipoMovimiento}
        />        
        <hr className='m-3'></hr>
        <ListadoMovimientos />
      </main>
    </>
  )
}

export default App
