
import React,{useState} from "react";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({email:"", password:""});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }
  const handleSumit =(e)=>{
    e.preventDefault();

    setStatus({ok:true, message:"Login Successfull!"});
    setForm({email:"",password:""});
  };

  return(
    <div className="login-container">
        <h2>Login to Your Account</h2>

        <form className="login-form" onSubmit={handleSubmit}>
        {status && (
          <div className={status.ok ? "success-msg" : "error-msg"}>
            {status.message}
          </div>
        )}


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

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;


