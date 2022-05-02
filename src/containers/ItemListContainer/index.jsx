import React,{ useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import { Loading } from "../../components/atoms/loading"
import { Page404 } from "../../pages/error/page404"
import { getItems } from '../../services/getItems'
import { ItemList } from '../../components/molecules/ItemList'



const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { category } = useParams();

    useEffect(() => {
        getItems(category)
        .then((response) => setItems(response))
        .catch((error) => console.log("error: ", error))
        .finally(
            setTimeout(() => {
                setIsLoaded(true);
            }, 800)
        );
    }, [category]);


return (
        <>      
            {isLoaded ? (
                <div>
                    <ItemList items={items} />
                </div>
            ) : ( <Loading /> )}  
        </>
    )
}

export {ItemListContainer}