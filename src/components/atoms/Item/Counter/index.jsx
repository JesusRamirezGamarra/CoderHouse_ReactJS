import React ,{useState} from 'react'
import { TiShoppingCart } from 'react-icons/ti';

const ItemCounter = ({stock =0, onAdd , count , setCount}) => {
    // const [count,setCount] = useState(minUnidadPorPedido)

    const onIncrease = () =>{
        if(count < stock){
            setCount(count + 1)
        }
        console.log(`Stock disponible : ${stock-count}`)
    }

    const onDecrease = () =>{
        if( count >1){
            setCount(count - 1)
        }
        console.log(`Stock disponible : ${stock-count}`)
    }



    return (
        <>    
            <div className="card-footer text-muted  ">
                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-warning" onClick={onDecrease}>-</button>
                    <span className="align-middle" >    {count}     </span> 
                    <button className="btn btn-outline-warning" onClick={onIncrease}>+</button>
                </div>
            </div>
            <button className="btn btn-outline-warning btn-lg btn-block" 
                    onClick={() => (count <= stock) && onAdd(count)} > Agregar al Carrito <TiShoppingCart />
            </button>
            <div className="card-footer text-muted  ">
            <span className="align-middle" > stock disponible :   {stock-count}     </span> 
            </div>
        </>
    )
}

export { ItemCounter }