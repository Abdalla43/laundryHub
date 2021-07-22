import React from 'react'
import "../Styles/Service.css"
import {Avatar} from '@material-ui/core'

function Service({ image, name, description }) {
    return (
        <div className='service'>
              <Avatar className='service__avatar'  src={image} alt="" />
            <div className='service__content'>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
          

        </div>
    )
}

export default Service
