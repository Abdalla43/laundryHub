import React from 'react'
import { Button } from 'react-bootstrap'
import Banner from '../Components/Banner'
import HomeAbout from '../Components/HomeAbout'
import Team from '../Components/Team'
import Service from '../Components/Service'
import Stats from '../Components/Stats'
import '../Styles/Home.css'
import PricingScreen from '../Components/PricingScreen'
import Testimonial from '../Components/Testimonial'
import { useHistory } from 'react-router-dom'

function Home() {
    const history=useHistory()
    return (
        <div className='home'>
            <Banner />
            <HomeAbout />

            <div className="home__service">
                <h2>Services</h2>
                <h4>Our laundryHub offers the following services</h4>
                <div className="home__container">
                    <div className="home__content">
                        <Service image="../images/cloth.jpg" name='Cloth washing' description='Your clothes are our priority and are washed to our best quality' />
                        <Service image="../images/carpet.jpg" name='Carpet washing' description='Your carpets are our priority and are washed to our best quality' />
                        <Service image="../images/window.jpg" name='Window Cleaning' description='Your windows are our priority and are washed to our best quality' />
                    </div>
                    <img src="../images/image4.jpg" alt="" />
                    <div className="home__content">
                        <Service image="../images/cloth.jpg" name='Cloth washing and Drying' description='Your clothes are our priority and are washed to our best quality' />
                        <Service image="../images/image6.jpg" name='Cloth Ironing' description='Your clothes are our priority and are washed to our best quality' />
                        
                    </div>

                </div>
                <Button onClick={()=>history.push('/service')} color='primary'>View More</Button>
            </div>
            <Team />
            <Stats />
            <PricingScreen/>
            <div className='home__testimonial'>
                <h3>What our customers are saying</h3>
            <Testimonial/>
            </div>
           
        </div>
    )
}

export default Home
