import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="call_now2">
                <h3>Free Multipurpose Responsive </h3>
                <span>Landing Page 2023</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="call_now">
                <h3>Call Now</h3>
                <span>(+91)76-983-42723</span>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <p>
              © 2023 All Rights Reserved.{" "}
              <a
                href="https://github.com/dhruveshborad/gatsby-tamplate/tree/main"
                target="_blank"
              >
                Free html Templates
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
