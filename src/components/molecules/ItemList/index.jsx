// import React from 'react'
import {Item} from '../../atoms/Item'

const ItemList = ({items}) => {

    return (
        <>
            <div>index ItemList</div>
            <div className="row">

            {
                items.map((product) => {
                    console.log(product);
                    return (    
                        <Item   key={product.id} 
                                image={product.image}
                                title={product.title} 
                                description={product.description}
                                category={product.category}
                                price={product.price}
                                Promoprice={product.Promoprice}
                                stock={product.stock}
                        />  );
                })
            }

                {/* <Item productoNombre='Producto 01' produtoDescripcion='' />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item /> */}
            </div>
        </>
    )
}


export {ItemList}