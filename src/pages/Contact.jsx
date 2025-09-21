
import React, { useState} from "react";
import { submitContact } from "../services/contactService";
import "./Contact.css";


const Contact =()=>{
    const[form, setForm] =useState({
        //form status initially empty
        name:"",
        email:"",
        phone:"",
        message:"",
    
    });
    // to show after the submission of form

    const [status,setStatus]=useState(null);

    // to handle the change in the form, picking the value from the input field and updating with user entry

    const handleChange = (e)=>{
        setForm({...form, [e.target.name]: e.target.value});
    };

    //to prevent the refrshing of the page on sumission

    const handleSubmit=async(e)=>{
        e.preventDefault();

        ///sending form to the database
        // after submission the form should be empty

        
    try {
      const res = await submitContact(form); //  call backend API
      setStatus({ ok: true, message: "Message sent successfully!" });

      // reset form
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({ ok: false, message: "Failed to send message. Please try again." });
    }

        };
    


    return(

        <div className="contact-container">
            <h2>Contact Us</h2>
            <p> Have a  questions or want to book directly ? Fill out the form below an dwe will get back to you soon.</p>

         <form className="contact-form" onSubmit={handleSubmit}>
        {status && (
            <div className={status.ok? "sucess-msg":"error-msg"}>
                {status.message}
                </div>
        )}
        <input type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder=" Your Name"
        required
        />

        <input type="email" 
        name ="email" 
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
        />

        <input type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Your Phone Number"
        required

        />

        <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message"
        required

        />

        <button type="submit">Submit</button>
        
        </form>

        </div>

    );
}


export default Contact;