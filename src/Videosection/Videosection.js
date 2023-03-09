import React from 'react'
import ReactPlayer from 'react-player/youtube'
import "./videosection.css"
const Videosection = () => {
    return (
        <div className='container platecontainer'>
            <div>
                <h1>Cognizant can be a great workplace for you</h1>
            </div>
            <div className='row'>
                <div className='col-12 videoplay'>
                    <div>
                        <ReactPlayer url='https://youtu.be/ToHGcLagtHo' width="1080px" height="500px" />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Videosection