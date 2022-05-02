import { Item } from '../../atoms/Item'

const ItemList = ( { items } ) => {


    return (
        <>
            <div className="row">
            {
                items.map((item) => {
                    return (    
                        <Item {...item} key={item.id} />
                        );
                })
            }
            </div>
        </>
    )
}


export { ItemList }