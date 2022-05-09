import React,{ useState } from 'react'
import { ItemCounter } from './Counter'
import { Link } from "react-router-dom";

const Item  = ({
                id,
                image,
                title='Sin Descripcion',
                description='Sin Descripcion',
                descriptionLong='Sin Descripcion',
                etimology='Sin Descripcion',
                category='Sin Descripcion',
                price,
                Promoprice,
                stock='Sin Descripcion'
                }) => {

    const defaultImage = 'https://cdn4.iconfinder.com/data/icons/pretty_office_3/256/inventory-maintenance.png'
    
    const [count, setCount] = useState(1);                    
    const [show,setShow] = useState(false)
    
    const onMoreDetails = () =>{
        console.log(`OnMoreDetails : ${show}`)
        setShow(!show)
    }


    const onAdd = (quantityToAdd) =>{
        console.log('Agrege al Carrito',quantityToAdd )
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
                        <img className="card-img-top" src={image===undefined?defaultImage:image} alt={title} />
                    </Link>
                    <p className="card-text">{description}</p>
                    {/* { show &&   <div>
                                    <p className="card-text">{description}</p> */}
                                    {/* <Link to={`/store/detail/${id}`}> 
                                        <button className="btn btn-dark">Ver Mas</button>
                                    </Link> */}
                                {/* </div>  */}
                    {/* } */}

                    
                </div>
                <Link to={`/store/detail/${id}`}> 
                                        <button className="btn btn-dark">Ver Mas</button>
                                    </Link>                
                {/* <button className="btn btn-dark" onClick={onMoreDetails}>Ver Descripcion producto { show ? '-': '+'} </button> */}
                <ItemCounter 
                    stock={stock} 
                    onAdd={onAdd} 
                    count={count}
                    setCount={setCount} 
                />
                <Link
                    to={"/cart"}
                >
                    <button className="btn btn-outline-dark btn-lg btn-block" >Ir al carrito</button>
                </Link>                
            </div>

        </>        
    )
}

export {Item}
