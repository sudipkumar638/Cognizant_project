import React from 'react'
import SearchSection from '../SearchSection/SearchSection'
import "./findjob.css"
const FindJob = () => {
    return (
        <>
            <div className='container-fluid findjobsection'>
                <img src="https://cdn.phenompeople.com/CareerConnectResources/COGNGLOBAL/images/India_Hero_1440x400-1675776587028.jpg" alt="firstsection">

                </img>
                <div className='searchsection container'>
                    <SearchSection></SearchSection>
                </div>

            </div>

        </>


    )
}

export default FindJob