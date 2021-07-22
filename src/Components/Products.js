import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import '../Styles/Products.style.css'
import { addToBasket } from '../features/basketSlice'


function Products({ id, name, image, description, price }) {
    const dispatch = useDispatch()

    const addItemToBasket = () => {
        dispatch(addToBasket({
            id,
            name,
            image,
            price,
            description
        }))

    }
    return (
        <div className='product'>
            <h2>{name}</h2>
            <img src={image} alt="" />
            <p>{description}</p>
            <small>${price}</small>
            <Button onClick={addItemToBasket}>Add to Basket</Button>
        </div>
    )
}

export default Products
