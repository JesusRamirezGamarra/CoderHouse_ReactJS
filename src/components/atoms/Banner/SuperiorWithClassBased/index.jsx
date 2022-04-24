import React,{Component} from 'react'
import './SuperiorWithClassBased.css'

class SuperiorWithClassBased extends Component {      
    render(){
        return (
            <div className="BannerSuperiorExtends">
                Aplica al {this.props.promocionPrincipal}% de descuento Coder React  | 🗓️ Ya es marzo, obtén hasta un {this.props.promocionSecundaria}% OFF adicional en categorias de Mujeres y niñas
                <br></br> + 3 cuotas sin interés | Hasta el 19/05 ⏱️ , Gracias a React.Component & this.props.variable
            </div>
        )
    }
}
export default SuperiorWithClassBased
