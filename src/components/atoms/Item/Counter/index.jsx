import React ,{useState} from 'react'
import { TiShoppingCart } from 'react-icons/ti';

const ItemCounter = ({stock =0,minUnidadPorPedido=1,onAdd}) => {
    const [contador,setContador] = useState(minUnidadPorPedido)

    const onIncrease = () =>{
        if(contador < stock){
            setContador(contador + 1)
        }
        console.log(`Stock disponible : ${stock-contador}`)
    }

    const onDecrease = () =>{
        if( contador >1){
            setContador(contador - 1)
        }
        console.log(`Stock disponible : ${stock-contador}`)
    }



    return (
        <>    
            <div className="card-footer text-muted  ">
                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-warning" onClick={onDecrease}>-</button>
                    <span className="align-middle" >    {contador}     </span> 
                    {/* <div className="align-middle" > {contador}  </div> */}
                    <button className="btn btn-outline-warning" onClick={onIncrease}>+</button>
                </div>
            </div>
            <button className="btn btn-outline-warning btn-lg btn-block" onClick={onAdd} > Agregar al Carrito <TiShoppingCart /></button>
            <div className="card-footer text-muted  ">
            <span className="align-middle" > stock disponible :   {stock-contador}     </span> 
            </div>
        </>
    )
}

export {ItemCounter}