import React from 'react'
import {ItemList} from '../../components/molecules/ItemList'

const ItemListContainer = ({greeting}) => {

return (
    <>      
        <h3>{greeting}</h3>
        <div className="row">
            Productos!!! ItemListContainer
        </div>
        <ItemList />
    </>

)
}

export {ItemListContainer}