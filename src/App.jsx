// App.jsx - for layout ,routing
import React from "react";
// import { Routes, Route } from "react-router-dom";

// for creating a layout in every page// import header and footer so that they appear on every page

import Header from "./components/Header";
import Footer from "./components/Footer";

// my pages

// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import Register from "./pages/Login";
// import Profile from "./pages/Profile";

//app- container = in a div, below- header, then main- naviagtion, then footer
// Routes - Home , contact, register, login and profile

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <h2 className="text-center text-2xl font-bold my-4">Hello</h2>
{/* 
       <main className="main-content"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      
    </main>  */}
      <Footer /> 
    </div>
  );
};
export default App;
