import { Item } from '../../atoms/Item'

const ItemList = ( { items } ) => {


    return (
        <>
            {/* <div className="row">
                <div className="col-lg-10"> */}
                    <div className="row">
                        {
                            items.map((item) => {
                                return (    
                                    <Item {...item} key={item.id} />
                                    );
                            })
                        }
                    </div>
                {/* </div>
            </div> */}
        </>
    )
}


export { ItemList }