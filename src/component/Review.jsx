import React from "react";
import "../style/Review.css"
import Image from "../assets/WhatsApp Image 2025-03-11 at 10.30.01_6ab05359.jpg"

function Review () {
  return (
    <>
    <div className="review-container">
      <div className="review-section">
       <div className="review-image">
        <img src={Image} alt="" />
       </div>

       <div className="review-line">
          <p>Try Paste today and see the difference it can make in streamlining your workflow. <br /> Empower yourself and take control of your productivity journey.</p>
        </div>

       <div className="review-content">
        
        <div className="apple-logo">
          <img src="https://framerusercontent.com/modules/qvgkLgoRjIt5bb9FhrVe/ogn9RsQ5hhjsAj6I17SW/assets/hbMG56UDdBsAaOugIyODdGih8IA.svg" alt="" />
          <p>Download on <br /> App Store</p>
        </div>

        <div className="set-app-logo">
          <img src="https://framerusercontent.com/modules/qvgkLgoRjIt5bb9FhrVe/ogn9RsQ5hhjsAj6I17SW/assets/WgbGvRVdFPqFB713033ODp0cJOI.svg" alt="" />
          <p>Download on <br /> App Store</p>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Review;
