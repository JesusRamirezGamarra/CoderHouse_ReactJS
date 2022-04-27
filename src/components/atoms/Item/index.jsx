import React,{useState} from 'react'
import {ItemCounter} from './Counter'
// import CurrencyFormat from 'react-currency-format';

const Item  = ({
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

    const onAdd = (count) =>{
        const message = `Agregaste ${count} producto`;
        count === 1 ? alert(message) : alert(`${message}s`);
        console.log('Agrege al Carrito')
    }
    // var CurrencyFormat = require('react-currency-format');
    
    return (
        <>
            <div className="card col-lg-3" >   
                <div className="card-header">
                    <h4 className="card-title">{title}</h4>
                    <h6 className="card-title">{category}</h6>
                    <div className="text-danger"><del><span className="card-text">{Promoprice}</span></del>
                    </div> 
                    <span className="card-text">{price}</span> 
                    {/* <CurrencyFormat value={2456981} displayType={'text'}  thousandSeparator={true} prefix={'$'} /> */}
                    
                </div>            
                <div className="card-body">         
                    <img className="card-img-top" src={image==undefined?defaultImage:image} alt={title} ></img>
                    { show && <p className="card-text">{description}</p> }

                    
                </div>
                <button className="btn btn-dark" onClick={onMoreDetails}>Ver detalle del producto { show ? '-': '+'} </button>
                <ItemCounter stock={stock} minUnidadPorPedido={1} onAdd={onAdd}   />
            </div>
        </>        
    )
}

export {Item}
