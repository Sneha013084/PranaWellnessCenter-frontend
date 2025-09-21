
import axios from "axios";
import { BASE_URL } from "./api";



// Create a new booking

export const createBooking = async (bookingData, token) => {
  const res = await fetch(`${BASE_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(bookingData),
  });
  return await res.json();
};

// Get all bookings for the logged-in user

export const getMyBookings = async (token) => {
  const res = await fetch(`${BASE_URL}/bookings/my`, {
    method: "GET",
    headers: { "Authorization": `Bearer ${token}` },
  });
  return await res.json();
};

// Update a booking

export const updateBooking = async (id, bookingData, token) => {
  const res = await fetch(`${BASE_URL}/bookings/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(bookingData),
  });
  return await res.json();
};

// Delete a booking

export const deleteBooking = async (id, token) => {
  const res = await fetch(`${BASE_URL}/bookings/${id}`, {
    method: "DELETE",
    headers: { "Authorization": `Bearer ${token}` },
  });
  return await res.json();
};