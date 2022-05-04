import { ItemCounter } from "../Counter";   
const ItemDetail = (  { item } ) => {

    const {  image, title, description, category, price, Promoprice, stock } = item;
    const onAdd = () =>{
        console.log('Agrege al Carrito' )
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
                            </div>
                            <div className="item">
                                <ItemCounter stock={stock} minUnidadPorPedido={1} onAdd={onAdd} />
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