import React from "react";
import "./Content.scss";
import Banner from "./Banner/Banner";
import image2 from "../../utils/IMG_3273.jpg";
import image3 from "../../utils/IMG_3274.jpg";
import image4 from "../../utils/IMG_3275.jpg";
import image5 from "../../utils/IMG_3276.jpeg";
import family from "../../utils/img/Depositphotos_132307558_xl-2015.jpg"
import approach from "../../utils/img/69102-0010.jpg";
import personal from "../../utils/img/lawyers-1000803_1920-1.jpg"
import emp from "../../utils/img/employment-law-books.jpg";
import bank from "../../utils/img/How-Bankruptcy-Lawyers-Can-Help-Me.jpg"
const Content = () => {
  return (
    <div className="main-content">
      <Banner />
    
      <div className="section">
        <div className="img-section">
          <img
          src={approach}
            alt="sjs"
          />
        </div>
        <div className="content-section">
          <h1>Our Approach</h1>
          <p>
            We're driven by a simple yet powerful philosophy: to deliver
            unparalleled legal excellence, champion our clients' success, and
            cultivate the brightest legal minds. We are dedicated to form an enduring partnership by offering holistic legal solutions with a result oriented approach.
          </p>
        </div>
      </div>
      <div className="area">
        <h1>Our Practice Area</h1>
        <p>
          Through innovative strategies and unwavering dedication, we're
          committed to meeting our clients' needs head-on. Collaboration is key
          - we sync closely with our clients, setting clear objectives, crafting
          budgets, and conducting regular reviews to ensure our progress aligns
          seamlessly with their goals.
        </p>
      </div>
      <div className="card-main">
        <div className="card1">
          <img
            src={emp}
            alt="ee"
          />
          <h2>Employement Law</h2>
        
        </div>
        <div className="card2">
          <img
          src={personal}
            alt="ee"
          />
          <h2>Personal Injury</h2>

        </div>
        <div className="card3">
          <img
            src={family}
            alt="ee"
          />
          <h2>Family Law</h2>

        </div>
        <div className="card4">
          <img
            src={bank}
            alt="ee"
          />
          <h2>Bank & Financial</h2>
         
        </div>
      </div>
      <div className="attorneys">
        <div className="heading">
          <h1>Meet Our Attorneys</h1>
          <p>
            We're a league of lawyers embodying the same standards of
            excellence. Each member of our team shares an unwavering commitment
            to delivering top-tier legal solutions, ensuring our clients' peace
            of mind and success. Welcome to a legal experience defined by
            excellence, dedication, and a relentless pursuit of your success.
          </p>
        </div>
        <div className="attr-main">
          <div className="attr-card1">
            <img src={image2} alt=""></img>
            <h3>Khalid Akhtar</h3>
            <p>Senior Associate - Partner</p>
          </div>
          <div className="attr-card1">
            <img src={image3} alt=""></img>
            <h3>Maaz Akhtar</h3>
            <p>Head of Commercial Litigation</p>
          </div>
          <div className="attr-card1">
            <img src={image4} alt=""></img>
            <h3>Abdullah Akhtar</h3>
            <p>Associate</p>
          </div>
          <div className="attr-card1">
            <img src={image5} alt=""></img>
            <h3>Mohammad Akhtar</h3>
            <p>Research Associate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
