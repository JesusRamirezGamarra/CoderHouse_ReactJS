// import React from 'react'
import { Item } from '../../atoms/Item'

const ItemList = ( { items } ) => {


    return (
        <>
            <div className="row">

            {
                items.map((item) => {
                    // console.log(item);
                    return (    
                        // <Item   key={item.id} 
                        //         image={item.image}
                        //         title={item.title} 
                        //         description={item.description}
                        //         category={item.category}
                        //         price={item.price}
                        //         Promoprice={item.Promoprice}
                        //         stock={item.stock}
                        // />  
                        <Item {...item} key={item.id} />
                        );
                })
            }
            </div>
        </>
    )
}


export { ItemList }