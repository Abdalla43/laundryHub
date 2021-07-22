import React from 'react'
import '../Styles/Contact.css'
import PinDropIcon from '@material-ui/icons/PinDrop';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Icons from '../Components/Icons'
import { Button } from '@material-ui/core';


function Contact() {
    return (
        <div className='contact'>
            <h3>Contact Us</h3>
            <h5>For more information or need assistance Contact us using the following platforms</h5>
            <div className='contact__container'>
                <div className='contact__content'>
                    <div className='content__items'>
                        <h4> <PinDropIcon />Address</h4>
                        <p>We are located at Nairobi Kenya</p>
                        <small>Moi Avenue</small>

                    </div>
                    <div className='content__items'>
                        <h4> <PhoneIcon />Phone Number</h4>
                        <p>+254 792190357</p>


                    </div>
                    <div className='content__items'>
                        <h4> <EmailIcon />Email</h4>
                        <p>You can email Us </p>
                        <small>abdullahisheikh603@gmail.com</small>

                    </div>
                    <div className='content__items'>
                        <h4>You can also contact Us on Social Media</h4>
                        <Icons />

                    </div>

                </div>

                <div className="contact__form">
                    <h3>Send Message</h3>
                    <form action="">
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Email' />
                        <input type="text" className='input__message' placeholder='Enter Message' />
                        <Button color='secondary' variant='outlined' >Send Message</Button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact
