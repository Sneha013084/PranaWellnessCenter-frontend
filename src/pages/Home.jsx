import React from "react";
import "./Home.css";
// import ServiceList from "../components/ServiceList";
// import BookingForm from "../components/BookingForm";
// import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <div className="home-container">
      <section className="intro-section">
        <h2> Welcome to Prana Wellness Cernter </h2>
        <p> Your journey to health and well-being starts here. add some...</p>
        <a href="#booking" className="btn-book">Book a Session</a>
      </section>


      <section className="services-section">
        <h2> Our Services</h2>
        <ServiceList />
        
      </section>

      <section className="gallery-section">
        <h2> Gallery </h2>
        <Gallery />
      </section>
     

      <section className="booking-section" id="booking">
        <h2> Book an Appointment</h2>
        <BookingForm/>
      </section>
    </div>
  );
};
export default Home;
