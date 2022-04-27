import React,{useState,useEffect} from 'react'
import {getData} from '../../services/getData'

import {ItemList} from '../../components/molecules/ItemList'



const ItemListContainer = ({greeting}) => {

    const [items, setProducts] = useState([]);
    console.log("Products before promise", items); // Empty

    useEffect(() => {
        getData
        .then((response) => setProducts(response))
        .catch((error) => console.log("error: ", error));
    }, []);


return (
    <>      
        <h3>{greeting}</h3>
        <div className="row">
            Productos!!! ItemListContainer
        </div>
        <ItemList items={items} />
    </>

)
}

export {ItemListContainer}