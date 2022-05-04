import React,{ useState } from 'react'
import { ItemCounter } from './Counter'
import { Link } from "react-router-dom";

const Item  = ({
                id,
                image,
                title='Sin Descripcion',
                description='Sin Descripcion',
                category='Sin Descripcion',
                price,
                Promoprice,
                stock='Sin Descripcion'
                }) => {

    const defaultImage = 'https://cdn4.iconfinder.com/data/icons/pretty_office_3/256/inventory-maintenance.png'
    const [show,setShow] = useState(false)
    
    const onMoreDetails = () =>{
        console.log(`OnMoreDetails : ${show}`)
        setShow(!show)
    }

    const onAdd = () =>{
        console.log('Agrege al Carrito' )
    }
        
    return (
        <>
            <div className="card col-lg-3" >   
                <div className="card-header">
                    <h4 className="card-title">{title}</h4>
                    <h6 className="card-title">{category}</h6>
                    <div className="text-danger"><del><span className="card-text">USD {Promoprice}</span></del>
                    </div> 
                    <span className="card-text">USD {price}</span>                    
                </div>            
                <div className="card-body">       
                    <Link to={`/store/detail/${id}`}>   
                        <img className="card-img-top" src={image==undefined?defaultImage:image} alt={title} />
                    </Link>
                    { show &&   <div>
                                    <p className="card-text">{description}</p>
                                    <Link to={`/store/detail/${id}`}> 
                                        <button className="btn btn-dark">Ver Mas</button>
                                    </Link>
                                </div> 
                    }

                    
                </div>
                <button className="btn btn-dark" onClick={onMoreDetails}>Ver Descripcion producto { show ? '-': '+'} </button>
                <ItemCounter stock={stock} minUnidadPorPedido={1} onAdd={onAdd}   />
            </div>
        </>        
    )
}

export {Item}
