import React from 'react'
import Card from '../Cards/Card'
import "./readytomake.css"
const ReadyToMake = () => {
    return (
        <>
            <div className='container readymake'>
                <h1>Ready To Make Difference?</h1>
                <div className='row cards'>
                    <div className='  col-md-6'>
                        <Card heading="Student / Early Carrers" para="Chances are you're not looking for business as usual. Neither are we. Find out more about our student and entry level opportunities.." image="https://cdn.phenompeople.com/CareerConnectResources/prod/COGNGLOBAL/images/persona-students-1537179264761.jpg"></Card>
                    </div>
                    <div className='   col-md-6'>
                        <Card heading="Professionals" para="A great workplace thrives on ideas and opportunity. You’ll find both at Cognizant.Choose innovative career tracks. Challenge convention." image="https://cdn.phenompeople.com/CareerConnectResources/prod/COGNGLOBAL/images/persona-professional-1537179243855.jpg"></Card>
                    </div>
                    <div className='   col-md-6'>
                        <Card heading="Executives" para="You’re ready to lead and influence change. You want to make a difference. Discover what we have to offer, and what we can do together." image="https://cdn.phenompeople.com/CareerConnectResources/prod/COGNGLOBAL/images/persona-executives-1537179223748.jpg"></Card>
                    </div>
                    <div className='   col-md-6'>
                        <Card heading="Executives" para="You’re ready to lead and influence change. You want to make a difference. Discover what we have to offer, and what we can do together." image="https://cdn.phenompeople.com/CareerConnectResources/prod/COGNGLOBAL/images/persona-executives-1537179223748.jpg"></Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReadyToMake