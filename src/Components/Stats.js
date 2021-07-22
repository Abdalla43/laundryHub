import React from 'react'
import "../Styles/Stats.css"
import CountUp from 'react-countup';
function Stats() {
    return (
        <div className='stats'>
            <h3>Our Stats</h3>
            <div className="stats__content">
                <div className="stats__container">
                    <h3>Working Hrs</h3>
                    <h4>  <CountUp end={775} duration={5} /> + Hrs</h4>
                </div>
                <div className="stats__container">
                    <h3>Clients</h3>
                    <h4>  <CountUp end={300} duration={5} />+  </h4>
                </div>
                <div className="stats__container">
                    <h3>Services Completed</h3>
                    <h4>  <CountUp end={475} duration={5} />+ </h4>
                </div>
                <div className="stats__container">
                    <h3>Employees</h3>
                    <h4>  <CountUp end={165} duration={5} />+  </h4>
                </div>
            </div>
        </div>
    )
}

export default Stats
