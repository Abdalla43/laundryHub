import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { db } from '../firebase'

import '../Styles/Order.css'

function Order() {

    const [order, setOrder] = useState([])
    const user = useSelector(selectUser)
    useEffect(() => {
        db.collection("customers").doc(user?.uid).collection('subscriptions').onSnapshot(snapshot => (
            setOrder(snapshot.docs.map(doc => ({
                id: doc.id,
                product: doc.data().items[0].price.product,
                price: doc.data().items[0].price

            })))
        ))

    }, [user?.uid])

    console.log(order)
    return (

        <div className='order'>
            {
                !user ? <h3>Please Login to see your orders</h3> :
                    <div className='order__container'>
                        <h3>Your orders will appear here</h3>
                        {
                            order.map(({ id, product, price }) => (
                                <div className='order__content' key={id}>
                                    <img src={product.images} alt="" />
                                    <div className='order__items'>
                                        <h3>{product.name}</h3>
                                        <p>${price.unit_amount / 100}</p>
                                    </div>


                                </div>

                            ))
                        }

                    </div>
            }

        </div>

    )




}

export default Order
