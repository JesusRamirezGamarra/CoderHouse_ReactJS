import React,{useState} from 'react'
import {ItemCounter} from './Counter'

const Item  = ({productoNombre='Sin Nombre',produtoDescripcion='Sin Descripcion',card}) => {

    const defaultImage = 'https://cdn4.iconfinder.com/data/icons/pretty_office_3/256/inventory-maintenance.png'
    const [show,setShow] = useState(false)
    
    const onMoreDetails = () =>{
        console.log(`OnMoreDetails : ${show}`)
        setShow(!show)
    }

    const onAdd = () =>{
        console.log('Agrege al Carrito')
    }

    return (
        <>
            <div className="card col-lg-3" >   
                <div className="card-header">
                    <h6 className="card-title">{productoNombre}</h6>
                    
                </div>            
                <div className="card-body">         
                    <img className="card-img-top" src={card==undefined?defaultImage:card} alt={productoNombre} ></img>
                    { show && <p className="card-text">{produtoDescripcion}</p> }
                    <button className="btn btn-dark" onClick={onMoreDetails}>Ver detalle del producto { show ? '-': '+'} </button>
                    
                </div>
                <ItemCounter stock={8} minUnidadPorPedido={1} onAdd={onAdd}   />
            </div>
        </>        
    )
}

export {Item}
