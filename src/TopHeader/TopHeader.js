import React from 'react'
import "./topheader.css"

const TopHeader = () => {
    return (
        <div className='container-fluid topheadernav'>

            <div className="menus">
                <ul>

                    <li>Cogniant.com  |</li>
                    <li>Industries </li>
                    <div className='dot'>

                    </div>
                    <li>Services</li>
                    <div className='dot'>

                    </div>
                    <li>Latest Thinking</li>
                    <div className='dot'>

                    </div>
                    <li>About Cognizant</li>
                </ul>
            </div>

            <div>
                India
            </div>
        </div>
    )
}

export default TopHeader