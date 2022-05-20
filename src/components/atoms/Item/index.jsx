import React ,{useState, useContext} from 'react'
import { ItemCounter } from './Counter'
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Item  = ( item ) => {

    const { id, image, title, description, descriptionLong, etimology, category, price, Promoprice, stock } = item;
    const defaultImage = 'https://cdn4.iconfinder.com/data/icons/pretty_office_3/256/inventory-maintenance.png'
    
    const [count, setCount] = useState(1);                    
    const [show,setShow] = useState(false);
    const [add,setAdd] = useState(false);
    const { addToCart, isProductInCart, addToExistingProd, limitStock} = useContext( CartContext );

    const productItem = { id, image, title,price,count,stock,description,descriptionLong,etimology,category,Promoprice };

    const pushToCart = async (quantityToAdd) => {
        console.log('pushToCart',quantityToAdd )
        if (!isProductInCart(id)) addToCart(productItem);
        if (isProductInCart(id) && (await limitStock(productItem)))
            addToExistingProd(productItem);
    };


    const onMoreDetails = () =>{
        console.log(`OnMoreDetails : ${show}`)
        setShow(!show)
    }


    const onAdd = (quantityToAdd) =>{
        console.log('Agrege al Carrito',quantityToAdd )
        console.log(add)
        setAdd(true)
    }

        
    return (
        <>
            <div className="card col-lg-2" >   
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
                <div>
                {add ? 
                    <p>"Producto Agregado"</p>
                    :
                    <ItemCounter 
                        id={id} 
                        addToCart={pushToCart} 
                        count={count}
                        setCount={setCount} 
                        stock ={stock}
                    />                   
                }
                </div>
                <Link
                    to={"/cart"}
                >
                    <button className="btn btn-outline-dark btn-lg btn-block" >Ir al carrito</button>
                </Link>                
            </div>

        </>        
    )
}

export { Item }
