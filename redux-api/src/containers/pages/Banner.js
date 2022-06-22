import React from 'react';
import bannerimg from "../assets/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container">
      <div className="Banner">
        <div className="Banner-content-left">
          <div>
            <h1>Women's</h1>
          </div>
        </div>
        <div className="Banner-content-right">
          <img src={bannerimg} alt="no-image" />
        </div>
      </div>
    </div>
  )
}

export default Banner;