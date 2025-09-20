
import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {

    // fetch user profile data from backend
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token"); // get token from local storage

        // await axios.get 

        const response = await axios.get("https://pranawellnesscenter-backend.onrender.com/api/users/profile", {

          headers: {
            Authorization: `Bearer ${token}`, // send token in Authorization header
          },
        });

        // response contains 

        setUser(response.data); 
      } catch (error) {
        setStatus({ ok: false, message: "Failed to fetch profile data." });
      }
    };

    fetchProfile();
  }, []);


  // if user data is not yet loaded
    if (!user) {
        return<p>Loading profile...</p>;
    }

    //if loading - comes with these details
    return(
        <div className="profile-container">
            <h2>Your Profile</h2>

            {status && !status.ok &&(
                <div className="error-msg">{status.message}</div>

            )}

            <div className="profile-card">
                <p><strong>Name:</strong>{user.name}</p>
                  <p><strong>Email:</strong>{user.email}</p>
                    <p><strong>Phone:</strong>{user.phone || "N/A"} </p>
                      <p><strong>Role:</strong>{user.role || "User"}</p>

            </div>

        </div>
    )
};
export default Profile;