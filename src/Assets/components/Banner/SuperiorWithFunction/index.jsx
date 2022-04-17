import React from 'react'
import './css/Banner.css'

const SuperiorWithFunction = (props) => {
let {promocionPrincipal , promocionSecundaria} = props;
    return (
        <div className="BannerSuperior">Aplica al {promocionPrincipal}% de descuento Coder React  | 🗓️ Ya es marzo, obtén hasta un {promocionSecundaria}% OFF adicional en categorias de hombres y niños
        <br></br> + 3 cuotas sin interés | Hasta el 19/03 ⏱️</div>
    )
}

export default SuperiorWithFunction