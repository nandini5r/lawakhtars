import React from "react";
import "./Services.scss"; // Import the SCSS file
import corporate from "../../utils/img/shutterstock_650042107-2048x1364.jpg";
import employment from "../../utils/img/employment-law.png";
import criminal from "../../utils/img/How-Bankruptcy-Lawyers-Can-Help-Me.jpg";
import diligence from "../../utils/img/shutterstock_1523975576-scaled.jpg";
import family from "../../utils/img/Depositphotos_132307558_xl-2015.jpg";
import insurance from "../../utils/img/Insurance-Claims.jpg";
import intellectual from "../../utils/img/i (1).webp";
import matrimonial from "../../utils/img/divorce-law-1536x1024.jpg";
import privatelaw from "../../utils/img/shutterstock_1236087745-scaled.jpg";
import property from "../../utils/img/brkmarketing-create-an-image-of-property-laws-have-the-justice-69b1c109-ddda-4003-bab0-97000ff33b22-1.png";
import DialogBox from "../Dialog/Dialog";
import { useState } from "react";
const Services = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    title: "",
    content: "",
  });

  const handleDialogOpen = (title, content) => {
    setDialogContent({ title, content });
    setDialogOpen(true);
  };
 
  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const dialogActions = [
    { label: 'Cancel', color: 'primary', handler: handleDialogClose },
  ];
  return (
    <div className="service-page">
      <div className="cover-image">
        <h1>Our Practice Areas</h1>
      </div>

      <div className="practice-area">
        <h1 className="page-title">Our Practice Areas</h1>
        <p className="intro-text">
          Explore our diverse practice areas to find the legal expertise you
          need. Our dedicated team is here to help you navigate through legal
          challenges and provide effective solutions.
        </p>
      </div>

      <div className="practice-cards">
        {/* Example Cards */}
        <div
          className="practice-card"
          onClick={() =>
            handleDialogOpen("CORPORATE LAWS", "Content for Corporate Laws")
          }
        >
          <img src={corporate} alt="Employment Law" />
          <h3>CORPORATE LAWS</h3>
        </div>

        <div
          className="practice-card"
          onClick={() =>
            handleDialogOpen("Employment Law", "Content for Employment Laws")
          }
        >
          <img src={employment} alt="Family Law" />
          <h3>EMPLOYMENT LAWS</h3>
        </div>

        <div className="practice-card">
          <img src={insurance} alt="Family Law" />
          <h3>INTERNATIONAL INSURANCE CLAIMS</h3>
        </div>

        <div className="practice-card">
          <img src={criminal} alt="Family Law" />
          <h3>CRIMINAL LAWS</h3>
        </div>

        <div className="practice-card">
          <img src={privatelaw} alt="Family Law" />
          <h3>PRIVATE INJURY</h3>
        </div>

        <div className="practice-card">
          <img src={intellectual} alt="Family Law" />
          <h3>INTELLECTUAL PROPERTY RIGHTS</h3>
        </div>

        <div className="practice-card">
          <img src={diligence} alt="Family Law" />
          <h3>DUE DELIGENCE & COMPLIANCE</h3>
        </div>
        <div className="practice-card">
          <img src={matrimonial} alt="Family Law" />
          <h3>MATRIMONIAL DISPUTES</h3>
        </div>
        <div className="practice-card">
          <img src={family} alt="Family Law" />
          <h3> FAMILY LAWS</h3>
        </div>
        <div className="practice-card">
          <img src={property} alt="Family Law" />
          <h3>PROPERTY LAWS</h3>
        </div>
        {/* Add more cards as needed */}
      </div>
      <DialogBox
        open={dialogOpen}
        handleClose={handleDialogClose}
        title={dialogContent.title}
        content={dialogContent.content}
        actions={dialogActions}

      />
    </div>
  );
};

export default Services;
