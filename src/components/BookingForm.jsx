import React, { useState, useEffect } from "react";
import {
  createBooking,
  getMyBookings,
  updateBooking,
  deleteBooking,
} from "../services/bookingService";
import "./BookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    status: "Pending",
  });

  const [message, setMessage] = useState("");
  const [bookings, setBookings] = useState([]);
  const token = localStorage.getItem("token");

  // Fetch bookings for the logged-in user
  const fetchBookings = async () => {
    if (!token) return;
    try {
      const data = await getMyBookings(token);
      setBookings(data);
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await createBooking(formData, token);
      setMessage("Booking successful!");
      setFormData({ service: "", date: "", time: "", status: "Pending" });
      setBookings([...bookings, data]); // add the new booking to the list
    } catch (err) {
      console.error("Error booking:", err);
      setMessage("Something went wrong. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBooking(id, token);
      setBookings(bookings.filter((b) => b._id !== id));
    } catch (err) {
      console.error("Error deleting booking:", err);
    }
  };

  return (
    <div className="booking-form-container">
      <h2>Book a Service</h2>
      {message && <p className="message">{message}</p>}
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>Service</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select a Service</option>
          <option value="Ayurvedic Facial">Ayurvedic Facial</option>
          <option value="Janu Vasti">Janu Vasti</option>
          <option value="Full-body Massage">Full-body Massage</option>
          <option value="Bolus Massage">Bolus Massage</option>
          <option value="Foot Massage">Foot Massage</option>
          <option value="Yoga">Yoga</option>
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

      <h3>My Bookings</h3>
      <ul>
        {bookings.map((booking) => {
          const date = new Date (booking.date);

          return(

          <li key={booking._id}>
            {booking.service} on {new Date(booking.date).toLocaleDateString()} at{" "}
            {booking.time} - {booking.status}
            <button onClick={() => handleDelete(booking._id)}>Delete</button>
          </li>
        );
})}
      </ul>
    </div>
      );
    };

export default BookingForm;
