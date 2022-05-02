import { ItemCounter } from "../Counter";   
const ItemDetail = (  { item } ) => {

    const { id, image, title, description, category, price, Promoprice, stock } = item;

    return (
        <>
            <div className="card col-lg-6">
                <div className="item">
                    <div className="text">
                        <h2>{title}</h2>
                        <h3>Tipo : {category}</h3>
                        
                        <img src={image} alt={description} /><br></br>
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