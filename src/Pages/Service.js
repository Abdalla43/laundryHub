import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import '../Styles/Service.style.css'

function Service() {
    const history=useHistory()
    return (
        <div className='services'>
            <h3>Our company offers the following services</h3>
            <div className='service__container'>
                <div className='services__content'>
                    <img src="../images/image.jpg" alt="" />
                    <div className='services__items'>
                        <h3>Cloth Washing</h3>
                        <p>This package is for customers who want their clothes to be washed only. It has 1 to 2 days of business days</p>
                        <small>$12.00</small>

                    </div>

                </div>
                <div className='services__content'>
                    <img src="../images/cloth.jpg" alt="" />
                    <div className='services__items'>
                        <h3>Cloth Washing And Drying</h3>
                        <p>
                            This package is for customers who want their clothes to be washed as well as dried. The customers receive their goods within one day</p>
                        <small>$15.00</small>
                    </div>
                </div>
                <div className='services__content'>
                    <img src="../images/slider3.webp" alt="" />
                    <div className='services__items'>
                        <h3>Cloth Ironing</h3>
                        <p>
                            This package is for customers who want their clothes to be ironed especially shirts</p>
                        <small>$13.00</small>
                    </div>
                </div>
                <div className='services__content'>
                    <img src="../images/window.jpg" alt="" />
                    <div className='services__items'>
                        <h3>Window Cleaning</h3>
                        <p>
                            This package is for firms and companies that want their facilities to be cleaned
                        </p>
                        <small>$11.00</small>
                    </div>
                </div>
                <div className='services__content'>
                    <img src="../images/carpet.jpg" alt="" />
                    <div className='services__items'>
                        <h3>Carpet Cleaning</h3>
                        <p>

                            Relax and enjoy as we bring our latest service where we clean our customers carpets and coaches at a fairly cheap price.</p>
                        <small>$18.00</small>
                    </div>
                </div>

            </div>
            <Button onClick={()=>history.push('/pricing')} color='secondary' variant='outlined'>Go and Book Now</Button>
        </div>
    )
}

export default Service
