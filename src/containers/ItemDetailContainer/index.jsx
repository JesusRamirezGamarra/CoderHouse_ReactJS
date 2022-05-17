import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Loading } from "../../components/atoms/loading";
import { Page404 } from "../../pages/error/page404";
import { ItemDetail } from "../../components/atoms/Item/Detail";
import { getItemDetail } from '../../services/getItems'

import { doc } from 'firebase/firestore'



const ItemDetailContainer = () => {
    const [ product, setProduct] = useState({});
    const [ isLoaded, setIsLoaded] = useState(false);
    const [ show, setShow] = useState(true);
    const { itemId } = useParams();


    useEffect(() => {

        getItemDetail(itemId)
        .then((snapshot) => {

            // snapshot ? setProduct(snapshot.docs.map(doc => {
            //     return { ...doc.data(), id: doc.id }
            //     })) : setShow(false)

            snapshot ? setProduct({...snapshot.data(), id: doc.id }) : setShow(false)
        })
        .catch((error) => {
            setShow(false);
            console.log("error : ", error)
        })
        .finally(
            setTimeout(() => {
                setIsLoaded(true);
            }, 800)
        );
    }, [itemId]);


    // useEffect(() => {

    //     getItemDetail(itemId)
    //     .then((response) => {
    //         response ? setProduct(response) : setShow(false)
    //     })
    //     .catch((error) => {
    //         setShow(false);
    //         console.log("error: ", error)
    //     })
    //     .finally(
    //         setTimeout(() => {
    //             setIsLoaded(true);
    //         }, 800)
    //     );
    // }, [itemId]);



    return (
        <>
            {isLoaded ? (
                <div >
                            <div className="row" >   {   show  ? <ItemDetail item={product} key={product.id} /> 
                                        : <Page404 />
                                    }   
                            </div>

                </div>
            ) : ( <Loading /> )}
        </>
    )

}

export { ItemDetailContainer }