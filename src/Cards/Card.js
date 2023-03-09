import React from 'react'
import "./card.css"
const Card = ({ heading, para, image }) => {
    return (
        <div class="card" style={{ width: "25rem", height: "35rem", marginBottom: "20px" }}>
            <img src={image} alt="..." />
            <div class="card-body">
                <h5 class="card-title">{heading}</h5>
                <p class="card-text">{para}</p>
                <a href="#" class="btn btn-info">Learn More</a>
            </div>
        </div>
    )
}

export default Card