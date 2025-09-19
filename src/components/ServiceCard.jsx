
import React from "react";

import "./ServiceCard.css";

const ServiceCard =({image, title, description,duration,price, onBook })=>{

    return(
        <div className="service-card">
            <img src= {image} alt={title} className="service-img" />
            <h3>{title}</h3>
            <p className="service-description"> {description} </p>
            <p><strong>Duration:</strong> {duration} </p>
            <p><strong>Price:</strong>{price}</p>

            <button onClick={onBook} className="book-btn">Book Now</button>
        </div>
    );
};

export default ServiceCard;