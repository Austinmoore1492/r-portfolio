import React, { Fragment } from "react";

const ProfileTop = () => (
  <Fragment>
    <div className="profile-top">
      {/* <img
        className="round-img m-1"
        src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/58939921_2213967395348994_6457749089227374592_n.jpg?_nc_cat=105&_nc_ohc=Rond-dFksWcAQkeVQPNm42WtAIabhqLEBZCl3hCreAObnq50nnPariNxQ&_nc_ht=scontent-ort2-2.xx&oh=a37c5df8eca6f62977109105a76182cf&oe=5E83CD77"
        alt=""
      /> */}
      <div className="profile-info">
        <h1 className="large">Austin Moore</h1>
        <p className="lead">Knowledge Manager/Web Developer</p>
        <p className="lead">at BMA</p>
        <div className="icons my-1">
          <a
            href="https://github.com/Austinmoore1492"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x p-1" />
          </a>
          <a
            href="mailto:austinmoore1492@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
           <i className="fas fa-envelope-open-text fa-2x p-1"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/austin-moore-668807146/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x p-1" />
          </a>
        </div>
      </div>
    </div>
  </Fragment>
);

export default ProfileTop;
