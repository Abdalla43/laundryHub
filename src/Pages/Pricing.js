import { Button } from '@material-ui/core'
import { loadStripe } from '@stripe/stripe-js'
import { css } from "@emotion/react";
import Spinner from 'react-bootstrap/Spinner'
import BarLoader from "react-spinners/BarLoader";
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { db } from '../firebase'
import '../Styles/Pricing.css'
import { useHistory } from 'react-router-dom';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


function Pricing() {

    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const user = useSelector(selectUser)

    useEffect(() => {
        setLoading(true)


        setTimeout(() => {
            setLoading(false)

        }, 3000)
    }, [])

    useEffect(() => {
        db.collection('products').where("active", "==", true).get().then(querySnapshot => {
            const products = {};
            querySnapshot.forEach(async (productDoc) => {
                products[productDoc.id] = productDoc.data();

                const priceSnap = await productDoc.ref.collection('prices').get();
                priceSnap.docs.forEach(price => {
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data()
                    }

                })

            })
            setProducts(products)
        })

    }, [])
    console.log(products)

    const loadCheckOut = async (priceId) => {

        const docRef = await db.collection("customers").doc(user?.uid).collection("checkout_sessions").add({
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin
        })
        docRef.onSnapshot(async (snap) => {
            const { error, sessionId } = snap.data();

            if (error) {
                alert(`Error occured at ${error.message}`)
            }
            if (sessionId) {
                const stripe = await loadStripe("pk_test_51JEYJpJa0zMXSN18IBHbwMzqLlJq6jsvxJtD8yfzD7MBFx8FttPSWKsRFJz4BVhjja8PL2j9yadtLTIIYRLdtk7200NeFqEB2J")
                stripe.redirectToCheckout({ sessionId })

            }


        })

    }

    const load = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 3000)


    }



    return (

        <div className='pricing__loader'>

            {
                loading ? <BarLoader loading={loading} css={override} size={150} /> :
                    <div className='pricing'>
                        <h2>pricing</h2>
                        <h3>Book the service you wish</h3>

                        <div className='pricing__container'>


                            {
                                Object.entries(products).map(([productId, productData]) => {
                                    return (

                                        <div key={productId} className='pricing__content'>
                                            <h4>{productData.name}</h4>
                                            <h5>{productData.description}</h5>
                                            <img style={{ marginTop: '40px' }} src={productData.images} alt="" />

                                            {
                                                !user ? <Button onClick={() => history.push('/login')}>sign In to book</Button> : <Button onClick={() => {
                                                    loadCheckOut(productData.prices.priceId);
                                                    load()
                                                }}
                                                    variant='outlined' color='secondary'>{loading && <Spinner animation="border" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </Spinner>} Book Now </Button>
                                            }

                                        </div>

                                    )
                                })
                            }


                        </div>
                    </div>
            }


        </div>
    )
}

export default Pricing
