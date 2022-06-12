import {useState} from 'react'

const Movimiento = ({tipoMovimiento, setTipoMovimiento}) => {

    const ingreso = ['saldo inicial', 'venta', 'otros ingresos', 'sobrante de caja']
    
    const egreso = [ 'compra', 'gasto', 'faltante de caja', 'retiro']
    /*   implementar if para que una vez seleccionado ingreso/egreso le muestre a cada
        tipo movimiento la opciones que tiene [*ingreso>>> saldo ini, venta, etc  *egreso>>> gasto, compra, etc]
    if (tipoMovimiento==='ingreso') {
        let opcion=[]
        ingreso.map(
            (index, item) => {
                return opcion= <option key={index} value={item.value}>{item.name}</option>
            }
        )
        console.log(opcion)
    } else if (tipoMovimiento==='egreso') {
        egreso.map(
            (item, index) => {
                return <option key={index} value={item}>{item}</option>
            }
        )
    }*/

    return (
        <form className='' action="" method="get" >  
            <label className='mr-1' htmlFor="tipoMovimiento">Tipo de movimiento:</label>
                <select 
                    onChange={(e) => setTipoMovimiento(e.target.value)}
                    className='bg-blue-900'
                    name='tipoMovimiento'
                    id="tipoMovimiento">
                        <option className='text-black' value="">--seleccione--</option>
                        <option className='text-blue-700' value='ingreso'>Ingreso</option>
                        <option className='text-red-700' value='egreso'>Egreso</option>
                </select>

            <label className='ml-5 ' htmlFor="concepto">Concepto: </label>
                <input type="text" name="concepto" id="concepto" required />
                {/*<select className='bg-blue-900' name="concepto" id="concepto">
                    <option  value="">--seleccione--</option>
                    <option  value='ingreso'>Ingreso</option>
                    <option  value='egreso'>Egreso</option> 
                    </select>*/}    

            <label className='ml-5' htmlFor="importe">Importe: </label>
                <input type="number" name="importe" id="importe" required />
            
                <button type="submit" className='bg-green-600 rounded ml-5 p-3'>Aceptar</button>
            
        </form>
    )
}

export default Movimiento