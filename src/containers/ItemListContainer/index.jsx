import React,{ useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import { Loading } from "../../components/atoms/loading"
import { Page404 } from "../../pages/error/page404"
import { getItems } from '../../services/getItems'
import { ItemList } from '../../components/molecules/ItemList'

const ItemListContainer = () => {

    const [ items, setItems] = useState([]);
    const [ isLoaded, setIsLoaded] = useState(false);
    const [ show, setShow] = useState(true);
    const { category } = useParams();

    useEffect(() => {
        getItems(category)
        .then((response) => {
            response ? setItems(response) : setShow(false)
        })
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
                    {   show    ? <ItemList items={items} /> 
                                : <Page404 />
                    }                       
                </div>
            ) : ( <Loading /> )}  
        </>
    )
}

export {ItemListContainer}