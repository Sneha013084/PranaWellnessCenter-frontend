
import React from "react";
import "./Footer.css";

const Footer =()=>{

    return(
        <footer className="footer">
            <p>&copy;{new Dtae().getFullYear()} Prana Wellness. All rights reserved.</p>

        </footer>
    );
};

export default Footer;