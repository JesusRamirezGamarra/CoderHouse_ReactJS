import React from 'react'
import './SuperiorWithFunction.css'

const SuperiorWithFunction = (props) => {
let {promocionPrincipal , promocionSecundaria} = props;
    return (
        <div className="BannerSuperior">Aplica al {promocionPrincipal}% de descuento Coder React  | 🗓️ Ya es Mayo, obtén hasta un {promocionSecundaria}% OFF adicional en Poke Tipo Agua
        <br></br> + 6 cuotas sin interés | Hasta el 28/05 ⏱️</div>
    )
}

export default SuperiorWithFunction