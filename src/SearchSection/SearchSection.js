import React from 'react'
import "./searchsection.css"
const SearchSection = () => {
    return (
        <>
            <div className='container searchbox'>
                <div className='row'>
                    <div className='col-8'>
                        <h1>Meet Cognizant</h1>
                        <h4 className='my-3'>We are Creating Digital Experience</h4>

                        <div className='smallhead'>
                            <h6>Take a Look At Our Job Offering</h6>
                        </div>

                        <div className='inputrow'>
                            <div className="mb-3">

                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Search for keywords" />
                            </div>
                            <div className="mb-3 ms-3">

                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Search for Location" />
                            </div>
                            <div class="mb-3 ms-3">

                                <button type="button" className="btn btn-success">Find Jobs</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchSection