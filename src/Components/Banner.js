import React from 'react'
import '../Styles/Banner.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {
    return (

        <Carousel className='banner' autoPlay infiniteLoop showIndicators={false} showStatus={false} interval={3000} showThumbs={false}>
            <div className='banner__content'>
                <img alt='' src="../images/image4.jpg" />
                <div className='content__items'>
                    <h3 >Welcome to the laundryHub</h3>
                    <h4>Worry no more.Let us do your chores.Quick. Proper.</h4>
                    <p>Where professionals take their time to lessen your burden</p>
                </div>




            </div>

            <div className='banner__content'>
                <img alt='' src="../images/slider5.png" />
                <div className='content__items'>
                    <h3 >We clean. A lot</h3>
                    <h4>Stop working.Spare some time for real life</h4>
                    <p>Our professional and experienced cleaning staff does the job right the first time</p>
                </div>



            </div>
        </Carousel>

    )
}

export default Banner
