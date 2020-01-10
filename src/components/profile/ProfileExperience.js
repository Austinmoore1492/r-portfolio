import React, { Fragment } from "react";

const ProfileEducation = () => (
  <Fragment>
    <div className="profile-exp bg-white p-2">
      <div>
        <h3 className="text-dark">BMA</h3>
        <p>Apr 2019 - Current</p>
        <p>
          <strong>Position: </strong>Knowledge Manager/Web Developer
        </p>
        <p>
          <strong>Description: </strong>Provide critical Knowledge Management &
          Website Development support to the Maneuver Support Center of
          Excellence (MSCoE) in the execution of its mission to analyze, provide
          recommendations, and develop courses of action to integrate
          Counter-Improvised Explosive Device and Explosive Hazard
          considerations across the Warfighting Functions.
        </p>
      </div>
      <div>
        <h3 className="text-dark">AECOM</h3>
        <p>May 2014 - Apr 2019</p>
        <p>
          <strong>Position: </strong>Training Support Technician
        </p>
        <p>
          <strong>Description: </strong>Provides training support to the US Army
          Chemical Biological Radiological and Nuclear (CBRN) School’s only live
          nerve agent toxic training facility.
        </p>
      </div>
    </div>
  </Fragment>
);

export default ProfileEducation;
