
import React,{useState} from "react";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({email:"", password:""});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }
  const handleSumit =async(e)=>{
    e.preventDefault();

    // for connection to the backend
    try{
      const response = await axios.post("https://pranawellnesscenter-backend.onrender.com/api/users/login", form);

      console.log("Login Response", response.data);

      // token saved in local storage
      localStorage.setItem("token", response.data.token);
    

    setStatus({ok:true, message:"Login Successfull!"});
    setForm({email:"",password:""});

    } catch(error){
      console.error(error.response?.data || error.message);
      setStatus({ ok:false, message : error.response?.data?.message || "Login failed"});
    }
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


