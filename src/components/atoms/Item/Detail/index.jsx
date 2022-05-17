import React ,{useState, useContext} from 'react'
import { ItemCounter } from "../Counter";   
import { Link } from "react-router-dom";
import { CartContext } from "../../../../context/CartContext";

const ItemDetail = (  { item } ) => {

    const { id, image, title, description, descriptionLong, etimology, category, price, Promoprice, stock} = item;

    const [quantity, setQuantity] = useState(0);
    const [count, setCount] = useState(1);
    const [add,setAdd] = useState(false);    

    const { addToCart, isProductInCart, addToExistingProd, limitStock} = useContext( CartContext );

    // const { agregarAlCarrito } = CartContext();
    // const Swal = require("sweetalert2");


    const productItem = { id, image, title,price,count,stock,description,descriptionLong,etimology,category,Promoprice };


    const pushToCart = async (quantityToAdd) => {
        console.log('pushToCart',quantityToAdd )
        if (!isProductInCart(id)) addToCart(productItem);
        if (isProductInCart(id) && (await limitStock(productItem)))
            addToExistingProd(productItem);
    };

    // const onAdd = (quantityToAdd) =>{
    //     console.log('Agrege al Carrito',quantityToAdd )
    //     console.log(add)
    //     setQuantity(quantityToAdd);
    //     setAdd(true)
    //     // agregarAlCarrito(item, count, quantity);
    //     // Swal.fire("Producto Agregado", "Seguir comprando!", "success");

    // }

    return (
        <>
            <div  className="card col-lg-2"></div>
            <div className="card col-lg-8">
                <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                        <img src={image} alt={description} />
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <div className="item ">
                            <div className="text">
                                <h2>{title}</h2>
                                    <h4>Tipo : {category}</h4>
                                <div className="text-danger"><del><span className="card-text">USD {Promoprice}</span></del>
                                </div> 
                                <span className="card-text">USD {price}</span> 
                                <p>{description}</p>
                                {/* <p>{descriptionLong}</p> */}
                                <h3>Etimologia :</h3>
                                <p>{etimology}</p>
                            </div>
                            <div className="item">
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
                            {isProductInCart(id) ? (
                                <Link
                                    to={"/cart"}

                                >
                                    <button className="btn btn-outline-dark btn-lg btn-block" >Ir al carrito</button>
                                </Link>
                            ) : (
                            <></>
                            )}
                            </div>                    
                        </div>   
                    </div>
                </div>    
            </div>
            <div  className="card col-lg-2"></div>                  
        </>
    )
}

export { ItemDetail }