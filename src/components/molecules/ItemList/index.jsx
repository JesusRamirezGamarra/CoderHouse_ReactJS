import React from 'react'
import {Item} from '../../atoms/Item'

const ItemList = () => {
    return (
        <>
            <div>index ItemList</div>
            <div className="row">
                <Item productoNombre='Producto 01' produtoDescripcion='' />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </>
    )
}


export {ItemList}