import React, { useState , useEffect} from "react";
import axios from "axios";
import "./BookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    status: "Pending",
  });

  //to show the sucess or error after the submission- message

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // to handle the submission

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token"); //if user logged in

      const response = await axios.post(
        "http://localhost:5000/api/bookings", // axios sends booking details to backend
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Booking successsful");
      setFormData({ service: "", date: "", time: "" , status:"Pending"}); // clear the form
    } catch (error) {
      console.error("Error booking:", error);
      setMessage("Something went wrong .Please try again");
    }
  };
  return (
    <div className="booking-form">
      <h2>Book a Service</h2>
      <form onSubmit={handleSubmit}>
        <label>Service</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value=""> Select a Service</option>
          <option value="Ayurvedic Facial"> Ayurvedic Facial</option>
          <option value="Janu Vasti">Janu Vasti</option>
          <option value="Full-body Massage"> Full-Bbody Massage</option>
          <option value="Bolus Massage"> Bolus Massage</option>
          <option value="Foot Massage"> Foot Massage</option>
          <option value="Yoga"> Yoga</option>
        </select>

        <label>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <label>Time</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
           <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
