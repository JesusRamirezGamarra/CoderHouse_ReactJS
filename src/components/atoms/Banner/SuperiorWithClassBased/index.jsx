import React,{Component} from 'react'
import './SuperiorWithClassBased.css'

class SuperiorWithClassBased extends Component {      
    render(){
        return (
            <div className="BannerSuperiorExtends">
                Aplica al {this.props.promocionPrincipal}% de descuento Coder React  | 🗓️ Ya es Mayo, obtén hasta un {this.props.promocionSecundaria}% OFF adicional en Poke Tipo Planta y Fuego
                <br></br> + 3 cuotas sin interés | Hasta el 19/05 ⏱️ 
            </div>
        )
    }
}
export default SuperiorWithClassBased
