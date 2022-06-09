import React,{ useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom"

import { Loading } from "../../components/atoms/loading"
import { Page404 } from "../../pages/error/page404"
import { getItems } from '../../services/getItems'
import { ItemList } from '../../components/molecules/ItemList'
import { SideBarCart } from "../../components/atoms/SideBarCart";


import { CartContext } from "../../context/CartContext";

// import { collection, getDocs, getFirestore, query, where, limit  } from 'firebase/firestore'


const ItemListContainer = () => {

    const [ items, setItems] = useState([]);
    const [ isLoaded, setIsLoaded] = useState(false);
    const [ show, setShow] = useState(true);
    const { category } = useParams();
    const { cart } = useContext(CartContext);

    useEffect(() => {
        getItems(category)
        .then(snapshot => {
            setItems(snapshot.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
                }))
            console.log(snapshot.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
                }))
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
                                    <div className="row">
                                        <div className="col-lg-1">                                            
                                        </div>
                                        <div className="col-lg-9">                                            
                                            <ItemList items={items} /> 
                                        </div>
                                        <div className="col-lg-2">                                            
                                            {cart.length > 0 && (
                                                <div > 
                                                    <SideBarCart products={items} />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </>
                            : <Page404 />
                        }                       
                    </div>
            ) : ( <Loading /> )}  
        </>
    )
}

export {ItemListContainer}

