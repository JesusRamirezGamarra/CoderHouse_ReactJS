import { ItemCounter } from "../Counter";   
const ItemDetail = (  { item } ) => {

    const { id, image, title, description, category, price, Promoprice, stock } = item;

    return (
        <>
            <div  className="card col-lg-3"></div>
            <div className="card col-lg-6">
                <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                        <img src={image} alt={description} />
                    </div>
                    <div class="flex-grow-1 ms-3">
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
                                <ItemCounter stock={stock} minUnidadPorPedido={1}  />
                            </div>                    
                        </div>   
                    </div>
                </div>    
            </div>
            <div  className="card col-lg-3"></div>                  
        </>
    )
}

export { ItemDetail }