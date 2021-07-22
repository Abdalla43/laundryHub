import React from 'react'
import { ReactVideo } from "reactjs-media";
import '../Styles/About.css'
import Icons from '../Components/Icons';
import Staff from '../Components/Staff';

function About() {
    return (
        <div className='about'>
            <h3>About Our laundryHub</h3>
            <div className="about__container">
                <div className="about__us">
                    <ReactVideo
                        className='about__video'
                        src="../video/advert.mp4"
                        poster="../images/image4.jpg"
                        primaryColor="red"
                    // other props
                    />
                    <div className="about__us-content">
                        <p>laundryHub is a professional  cleaning and pressing service provider, who caters for the personal and family wardrobes of men, women and children. We also serve to ensure clean and presentable hotel staff work wear.
                            Our state of the art Laundry machinery and equipment, coupled with professionally trained staff strives to ensure great results at competitive rates.</p>
                        <h2>Why choose laundryHub</h2>
                        <h3>1.High quality Services provided</h3>
                        <h3>2.Faster rate of goods deliverd</h3>
                        <h3>1.High offers and cheap prices</h3>

                        <div className="about__us-icons">
                            <Icons />
                        </div>

                    </div>

                </div>
                <div className="about__quality">
                    <h2>qualites</h2>
                    <div className='quality__container'>
                        <div className='about__quality-content'>
                            <h3>Time</h3>
                            <p>We provide our services with the least of time.Delivery is done immediately after cleaning the laundries.Order anything and we will be with you at any</p>
                        </div>
                        <div className='about__quality-content'>
                            <h3>Staff</h3>
                            <p>We have highly trained staff and professionals who are willing to do any work for you. It would be done in the best way possible</p>
                        </div>
                        <div className='about__quality-content'>
                            <h3>Our platforms</h3>
                            <p>You can choose your services from our app or the website.Choose items from our price list or skip ahead with "Instant Order" and we'll bring an empty laundry bag for you to fill up.</p>
                        </div>
                        <div className='about__quality-content'>
                            <h3>Stuck??</h3>
                            <p>Feel free to send us Email or call Us. We will be there to assist you in every way possible.Just sit and enjoy while we simplify your work</p>

                        </div>
                    </div>
                </div>
                <div className="about__team">
                    <h3>Our professional staffs</h3>
                    <div className='about__team-content'>
                        <Staff image='../images/team.jpg' name='Abdalla' description='A staff with the best quality who is willing to do anything for the company.We are glad to have such a person in our team . We are blessed' />
                        <Staff image='../images/team.jpg' name='Abdalla' description='A staff with the best quality who is willing to do anything for the company.We are glad to have such a person in our team . We are blessed' />
                        <Staff image='../images/team.jpg' name='Abdalla' description='A staff with the best quality who is willing to do anything for the company.We are glad to have such a person in our team . We are blessed' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
