import React,{ useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import { Loading } from "../../components/atoms/loading"
import { Page404 } from "../../pages/error/page404"
import { getItems } from '../../services/getItems'
import { ItemList } from '../../components/molecules/ItemList'



const ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { category } = useParams();

    console.log("Products before promise", items); // Empty

    useEffect(() => {
        getItems
        .then((response) => setItems(response))
        .catch((error) => console.log("error: ", error))
        .finally(
            setTimeout(() => {
                setIsLoaded(true);
            }, 800)
        );
    }, []);


return (
        <>      
            {isLoaded ? (
                <div>
                    <h3>{greeting}</h3>
                    <ItemList items={items} />
                </div>
            ) : ( <Loading /> )}  
        </>
    )
}

export {ItemListContainer}