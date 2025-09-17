
import React, {useState} from 'react';
import "./Register.css";

const Register= ()=>{
    const [form, setForm]= useState({
        name: "",
        email: "",
        password: "",
        phone: "",
    });

    const[status, setStatus]= useState(null)

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit =  (e) =>{
        e.preventDefault();// connecting with backend

        setStatus({ok:true, message: "Registration successful!"});
        setForm({
            name: "",
            email: "",
            password: "",
            phone: "",
        });

        return(

            <div className="register-container">
                <h2>Create an Account</h2>

                <form className='register-form' onSubmit={handleSubmit}>
                    {status && (
                        <div className={status.ok ? "success-message" : "error-message"}>
                            {status.message}
                        </div>
                    )}
                    <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    />

                    <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    />

                    <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                    />

                    <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    />
                    <button type="submit">Register</button>
                </form>

            </div>
        );
    }

};
export default Register;