import React ,{ useState, useEffect } from 'react'
import { TiShoppingCart } from 'react-icons/ti';
import { getItemStock } from "../../../../services/getItems";


const ItemCounter = ({id, addToCart , count , setCount , stock }) => {
    // const [count,setCount] = useState(minUnidadPorPedido)
    //let stock = 10;//getItemStock(id);
    // let stock = getItemStock(id)
    //  const [ stock, setStock] = useState(0);

    // useEffect(() => {
    //     getItemStock(id)
    //     .then((response) => {
    //         console.log('response',response)
    //         // setStock(response);
    //     })
    //     .catch((error) => console.log("error: ", error))
    //     // .finally(
    //     //     setTimeout(() => {
    //     //         setIsLoaded(true);
    //     //     }, 800)
    //     // );
    // }, 0);

    


    const onIncrease = async() =>{
        
        if(count <  stock){
            setCount(count + 1)
            console.log('stock Transaction: ',stock)
            console.log('Unidades Solicitadas: ',count + 1 )
        }
    }

    const onDecrease = async() =>{
        if( count >1){
            setCount(count - 1)
            console.log('stock Transaction: ',stock)
            console.log('Unidades Solicitadas: ', count - 1)            
        }
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
                    onClick={() => (count <= stock) && addToCart(count)} > Agregar al Carrito <TiShoppingCart />
            </button>
            <div className="card-footer text-muted  ">
            <span className="align-middle" > stock disponible :   {stock-count}     </span> 
            </div>
        </>
    )
}

export { ItemCounter }