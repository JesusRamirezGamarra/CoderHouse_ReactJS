import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Loading } from "../../components/atoms/loading";
import { Page404 } from "../../pages/error/page404";
import { ItemDetail } from "../../components/atoms/Item/Detail";
import { getItemDetail } from '../../services/getItems'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    // const [item,setItem] =useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [show, setShow] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        // console.log('itemId', itemId)

        getItemDetail(itemId)
        .then((response) => {
            // console.log('ItemDetailContainer : getItemDetail')
            // console.log('response',response)
            // setProductId(response)
            // response ? setProductId(response) : setShow(false);
            // response ? setItem(response) : setShow(false);
            // console.log('item',item)
            response ? setProduct(response) : setShow(false)
            // setItem(response)
            // // console.log('item',item)
            // // console.log('show',show)
            // console.log('ItemDetailContainer :: response :::: ',response)
            // console.log('item',item)
            // console.log(productId)

            }
        )
        .catch((error) => {
            setShow(false);
            console.log("error: ", error)
        })
        .finally(
            setTimeout(() => {
                setIsLoaded(true);
            }, 800)
        );
    }, [itemId]);


    return (
        <>
            {isLoaded ? (
                <div>
                            <div>   {   show  ? <ItemDetail item={product} key={product.id} /> 
                                        : <Page404 />
                                    }   
                            </div>

                </div>
            ) : ( <Loading /> )}
        </>
    )

}

export { ItemDetailContainer }