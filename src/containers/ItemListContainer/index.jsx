import React,{ useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom"

import { Loading } from "../../components/atoms/loading"
import { Page404 } from "../../pages/error/page404"
import { getItems } from '../../services/getItems'
import { ItemList } from '../../components/molecules/ItemList'

import { CartContext } from "../../context/CartContext";


const ItemListContainer = () => {

    const [ items, setItems] = useState([]);
    const [ isLoaded, setIsLoaded] = useState(false);
    const [ show, setShow] = useState(true);
    const { category } = useParams();
    const { cart } = useContext(CartContext);

    useEffect(() => {
        getItems(category)
        .then((response) => {
            response ? setItems(response) : setShow(false)
        })
        .catch((error) => {
            setShow(false)
            console.log("error: ", error)
        })
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
                        {show ? 
                                        <>      
                                            <ItemList items={items} /> 
                                            {cart.length > 0 && (
                                                <div >
                                                    SideBarCart 
                                                </div>
                                            )}
                                        </>
                                    : <Page404 />
                        }                       
                    </div>
            ) : ( <Loading /> )}  
        </>
    )
}

export {ItemListContainer}