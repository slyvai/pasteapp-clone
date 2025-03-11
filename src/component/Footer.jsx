import React from "react";
import "../style/Footer.css"

function Footer () {
  return (
    <>
    <div className="footer-container">
    <div className="footer-section">

      <div className="logo-video"><video src="https://framerusercontent.com/assets/RsAriLZGy8MSNSNwh3jj19nfjw.mp4" style={{width: "50px", height: "50px"}}/></div>
      
      <div className="footer-content">
        <h1>Paste</h1>
        <div className="footer-links">
          <p>Try for free</p>
          <p>Get on Setapp</p>
          <p>Usecases</p>
          <p>Updates</p>
          <p>Pricing</p>
        </div>
      </div>

      <div className="footer-content">
        <h1>Resource</h1>
        <div className="footer-links">
          <p>Help & Support</p>
          <p>Blog</p>
          <p>Terms of use</p>
          <p>Privacy policy</p>
        </div>
      </div>

      <div className="footer-content">
        <h1>More</h1>
        <div className="footer-links">
          <p>About</p>
          <p>Contact</p>
          <p>Beta program</p>
          <p>Suggest a feature</p>
        </div>
      </div>

      <div className="footer-content">
        <h1>Follow us</h1>
        <div className="footer-links">
         <img src="https://framerusercontent.com/modules/Ha5LC44Kej1N9mT588s8/Fg0PGPIS9yiHmX80vQVX/assets/0r6IHdgzqImGvEMg7sgrAE8ZkQ.svg" alt="twitter.png" />
         <img src="https://framerusercontent.com/modules/Ha5LC44Kej1N9mT588s8/Fg0PGPIS9yiHmX80vQVX/assets/TSw0SN3gJzyYIUBFqbAhSN2ss.svg" alt="facebook.png" />
        </div>
      </div>
    </div>
    <div className="footer-line"></div>
    <div className="footer-copyright"><p>© 2025 Paste Team ApS. All rights reserved.</p> <p>All trademarks are the property of their respective owners.</p></div>
    </div>
    </>
  )
}

export default Footer