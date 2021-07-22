import React from 'react'
import '../Styles/HomeAbout.css'
function HomeAbout() {
    return (
        <div className='home__about'>
            <h2>How we work</h2>
            <div className="home__about-container">
                <div className="home__about-content">
                    <h3>Packages</h3>
                    <p>Choose the package you want from the services we offer</p>
                </div>
                <div className="home__about-content">
                    <h3>Contact Us</h3>
                    <p>You can contact Us via message through the app or call us</p>
                </div>
                <div className="home__about-content">
                    <h3>Just Relax</h3>
                    <p>We will come and pick the laundry and clean it for you</p>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout
