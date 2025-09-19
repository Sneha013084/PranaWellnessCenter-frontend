import React from "react";
import "./Home.css";
import ServiceList from "../components/ServiceList";
import BookingForm from "../components/BookingForm";

const Home = () => {
  return (
    <div className="home-container">
      <section className="intro-section">
        <h2> Welcome to Prana Wellness Cernter </h2>
        <p>
          {" "}
          Your journey to health and well-being starts here. Ayurveda focuses on
          balancing mind, body, and spirit for overall wellness.Uses herbs,
          oils, and natural therapies for health and rejuvenation. Through
          natural remedies and lifestyle guidance, Ayurveda strengthens immunity
          and supports long-term health. Ayurvedic skincare and massage
          treatments enhance your natural beauty while promoting deep
          relaxation. Yoga and meditation, combined with Ayurvedic practices,
          help maintain mental clarity and emotional balance.
        </p>
        <p>
          Prana Wellness Center is your sanctuary for holistic health and
          rejuvenation. We combine ancient Ayurvedic therapies, personalized
          wellness treatments, and guided yoga sessions to restore balance to
          your mind, body, and spirit. Our expert practitioners focus on natural
          healing, stress relief, and overall well-being, helping you achieve
          vitality, relaxation, and inner harmony in a serene and nurturing
          environment.”
        </p>
        <a href="#booking" className="btn-book">
          Book a Session
        </a>
      </section>

      <section className="services-section">
        // // <h2> Our Services</h2>
        // // <ServiceList />
      </section>

      <section className="booking-section" id="booking">
        <BookingForm />
      </section>
    </div>
  );
};
export default Home;
