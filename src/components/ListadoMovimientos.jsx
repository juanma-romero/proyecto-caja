import React from 'react'

const ListadoMovimientos = () => {
  return (
    <table className='border-separate border border-slate-500 bg-slate-700'>
          <thead>
            <tr>
              <th className='tracking-wide border border-slate-600'>Concepto</th>
              <th className='tracking-wide border border-slate-600'>Entrada</th>
              <th className='tracking-wide border border-slate-600'>Salida</th>
              <th className='tracking-wide border border-slate-600'>Saldo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-slate-700'>Saldo inicial</td>
              <td className='border border-slate-700'>100</td>
              <td className='border border-slate-700'>0</td>
              <td className='border border-slate-700'>100</td>
            </tr>
            <tr>
            <td className='border border-slate-700'>pan</td>
              <td className='border border-slate-700'>0</td>
              <td className='border border-slate-700'>10</td>
              <td className='border border-slate-700'>90</td>
            </tr>
          </tbody>
        </table>
  )
}

export default ListadoMovimientos