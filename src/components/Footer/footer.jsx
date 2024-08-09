import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import ArrowUp from "@iconscout/react-unicons/icons/uil-arrow-up"; // Round arrow icon

const Footer = () => {
    const handleGoToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="footer">
            <div className="blue-bar"></div> {/* Blue bar */}
            <div className="f-content">
                <div className="f-icons">
                    <Insta color="white" size={"2rem"}  />
                    <Facebook color="white" size={"2rem"}  />
                    <Gitub color="white" size={"2rem"}  />
                    <LinkedIn color="white" size={"2rem"}  />
                    {/* Correct usage of Twitter as a link */}
                    <a href="https://twitter.com/SupunTd" target="_blank" rel="noopener noreferrer">
                        <Twitter color="white" size={"2rem"} />
                    </a>
                </div>
                <button className="go-to-top-button" onClick={handleGoToTop}>
                    <ArrowUp  size={"1rem"} />
                </button>
                <p className="copyright">All rights reserved &copy; {new Date().getFullYear()} Supun Thilakshana</p>
            </div>
        </div>
    );
};

export default Footer;
