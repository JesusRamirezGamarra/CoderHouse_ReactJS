import React ,{useState} from 'react'
import { ItemCounter } from "../Counter";   
import { Link } from "react-router-dom";

const ItemDetail = (  { item } ) => {

    const [count, setCount] = useState(1);
    const {  image, title, description, descriptionLong, etimology, category, price, Promoprice, stock } = item;
    // const []

    const onAdd = (quantityToAdd) =>{
        console.log('Agrege al Carrito',quantityToAdd )
    }

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
                        </div>   
                    </div>
                </div>    
            </div>
            <div  className="card col-lg-2"></div>                  
        </>
    )
}

export { ItemDetail }