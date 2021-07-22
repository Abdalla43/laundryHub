import React from 'react'
import '../Styles/Staff.css'
import Icons from './Icons'

function Staff({ image, name, description, icons,rank }) {
    return (
        <div className='staff'>
            <div className="staff__container">
                <div className='staff__content'>
                    <img src={image} alt="" />
                    <h3>{name}</h3>
                    <h4>{rank}</h4>
                    <p>{description}</p>
                    {
                        icons ? <Icons /> : !<Icons/>
                    }

                </div>

            </div>
        </div>


    )
}

export default Staff
