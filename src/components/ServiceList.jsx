
import React from "react";
import ServiceCard from "./ServiceCard"
import "./ServiceCard.css";

import facialImg from "../assets/facialImg.jpg";
import januImg from "../assets/januvastImg.jpg";
import massageImg from "../assets/FullBodyMassageImg.jpg";
import ElakizhiImg from "../assets/BolusMassageImg.jpg";
import footImg from "../assets/FootMassageImg.jpg"
import YogaImg from "../assets/YogaImg.jpg"

const services=[
    {
        image: facialImg,
        title:"Ayurvedic Facial",
        description:"Facial with all natural ayurveda products. Designed for skin tightening, anti-bacterial, youthful glowing skin, etc.",
        duration:"60minutes",
        price: 60,

    },
     { image: januImg,
        title:"Janu vasti",
        description:"Beneficial in osteoarthritis and other knee joint pain disorders using herbal oil and massage therapy.",
        duration:"60minutes",
        price: 60,
     },
     
     {  image: massageImg,
        title:"Full-body Massage",
        description:"Massage with herbal oil for stress relief, tension reduction, and improved circulation.",
        duration:"60minutes",
        price: 60,

     },
     {
        image: ElakizhiImg,
        title:"Bolus Massage",
        description:"Massage with warm herbal leaf bundles for pain relief, improved circulation, and deep relaxation.",
        duration:"50minutes",
        price: 50,
     },
     {
     image: footImg,
        title:"Foot Massage",
        description:"Soothing foot massage to relieve tension, improve blood circulation, and promote relaxation.",
        duration:"30minutes",
        price: 30,
    },

        {
       image: YogaImg,
        title:"Yoga",
        description:"Guided yoga sessions to enhance flexibility, reduce stress, and promote overall mind-body wellness.",
        duration:"60minutes",
        price: 100,
        }
];

const ServiceList=()=>{
    const handleBook = (service)=>{
        console.log("Book a Service:", service.title);
    };
    return(
        <div className="service-container">
         
            <div className="service-grid">
                {services.map((service, index)=>(
                    <ServiceCard key={index}{...service} 
                    onBook={()=>handleBook(service)}/>
                ))}

            </div>

        </div>
    );
};
export default ServiceList;