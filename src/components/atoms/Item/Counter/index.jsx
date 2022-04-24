import React ,{useState} from 'react'
import { TiShoppingCart } from 'react-icons/ti';

const ItemCounter = ({stock =0,minUnidadPorPedido=1,onAdd}) => {
    const [contador,setContador] = useState(minUnidadPorPedido)

    const onClickSumar = () =>{
        if(contador < stock){
            setContador(contador + 1)
        }
        console.log(`Stock disponible : ${stock-contador}`)
    }

    const onClickRestar = () =>{
        if( contador >0){
            setContador(contador - 1)
        }
        console.log(`Stock disponible : ${stock-contador}`)
    }


    return (
        <>    
            <div className="card-footer text-muted  ">
                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-warning" onClick={onClickRestar}>-</button>
                    <span className="align-middle" >    {contador}     </span> 
                    {/* <div className="align-middle" > {contador}  </div> */}
                    <button className="btn btn-outline-warning" onClick={onClickSumar}>+</button>
                </div>
            </div>
            <button className="btn btn-outline-warning btn-lg btn-block" onClick={onAdd}> Agregar al Carrito <TiShoppingCart /></button>
            <div className="card-footer text-muted  ">
            <span className="align-middle" > stock disponible :   {stock-contador}     </span> 
            </div>
        </>
    )
}

export {ItemCounter}