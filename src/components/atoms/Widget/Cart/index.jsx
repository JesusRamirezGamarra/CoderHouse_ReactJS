import React from 'react'
import {Link} from 'react-router-dom'
import imgLogo from  './images/CarritoIcon.png'
export const CartWidget = (props) => {
    let {cantidad} = props;
return (
    <>
        <img src={imgLogo} height="42" alt="Carrito de Compras" />{cantidad==null?0:cantidad}
    </>
)
}

export default CartWidget