import { Button } from '@material-ui/core'
import { loadStripe } from '@stripe/stripe-js'
import Spinner from 'react-bootstrap/Spinner'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUser } from '../features/userSlice'
import { db } from '../firebase'
import "../Styles/Pricing.css"


function PricingScreen() {
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const user = useSelector(selectUser)

    const load = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 3000)


    }


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
    return (
        <div className="pricing">
            <h2>Our pricing</h2>
            <h3>You can book the following services</h3>
            <div className='pricing__container'>
                {
                    Object.entries(products).slice(0, 3).map(([productId, productData]) => {
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
                                                disabled={loading}
                                                    variant='outlined' color='secondary'>{loading && <Spinner animation="border" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </Spinner>} Book Now </Button>
                                            }
                            </div>
                        )
                    })
                }

            </div>

            <Button color='secondary' variant='outlined' onClick={() => history.push('/pricing')}>View More Pricing</Button>
        </div>
    )
}

export default PricingScreen
