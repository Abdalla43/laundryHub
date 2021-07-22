import React from 'react'
import '../Styles/Banner.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Testimonial() {
    return (

        <Carousel className='banner testimonial__banner' autoPlay infiniteLoop showIndicators={false} showStatus={false} interval={3000} showThumbs={false}>




            <div className='content__items testimonial__item'>
                <h3 >Danny Musau</h3>
                <h4>danny@gmail.com</h4>
                <p>The company has lessened my work by providing quality services to me.To be honest its cheaper than i Expected</p>
            </div>





            <div className='content__items  testimonial__item'>
                <h3 >Graham Kavulavu</h3>
                <h4>graham@gmail.com</h4>
                <p>The company has lessened my work by providing quality services to me.To be honest its cheaper than i Expected</p>
            </div>
            <div className='content__items  testimonial__item'>
                <h3 >Muhaji Abdi</h3>
                <h4>abdi@gmail.com</h4>
                <p>The company has lessened my work by providing quality services to me.To be honest its cheaper than i Expected</p>
            </div>




        </Carousel>

    )
}

export default Testimonial
