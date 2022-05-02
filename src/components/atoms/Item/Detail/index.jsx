// import React from 'react'
// import { Item } from '../../atoms/Item'

// const ItemDetail = ( product={product}, item={item} ) => {
import { ItemCounter } from "../Counter";   
const ItemDetail = (  { item } ) => {

    const { id, image, title, description, category, price, Promoprice, stock } = item;

        // console.log(`ItemDetail item :>>`, {item})
        // console.log(`ItemDetail item :>>`, {id})
        // console.log(`ItemDetail item :>>`, {item})


    return (
        <>
            <div>index ItemDetail nnnn</div>
            <div className="card col-lg-6">
                <div className="item">
                    <div className="text">
                        <h2>{title}</h2>
                        <h3>Tipo : {category}</h3>
                        
                        <img src={image} alt={description} ></img> <br></br>
                        <div className="text-danger"><del><span className="card-text">USD {Promoprice}</span></del>
                        </div> 
                        <span className="card-text">USD {price}</span> 
                        <p>{description}</p>
                    </div>
                </div>                    
                <div className="item">
                    <ItemCounter stock={stock} minUnidadPorPedido={1}  />
                </div>
            </div>
        </>
    )
}

export { ItemDetail }