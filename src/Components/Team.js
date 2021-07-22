import React from 'react'
import '../Styles/Team.css'
import Staff from '../Components/Staff'
function Team() {
    return (
        <div className='team'>
            <h2>Our Team</h2>
            <div className="team__content">
                <Staff image='../images/team.jpg' name='Graham Kavulavu' rank='CEO' description='He has been working for the company for a long time and he is a core member' icons />
                <Staff image='../images/team.jpg' name='Muhaji Abdi' rank='Manager' description='He has been working for the company for a long time and he is a core member' icons />
                <Staff image='../images/team.jpg' name='Abdullahi Sheikh' rank='Manager' description='He has been working for the company for a long time and he is a core member' icons />
            </div>
        </div>
    )
}

export default Team
