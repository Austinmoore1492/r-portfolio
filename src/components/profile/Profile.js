import React, { Fragment } from "react";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";

const Profile = () => (
  <Fragment>
    <ProfileTop />
    <div className="profileContainer m-auto">
      <div className="profile-grid">
        <ProfileAbout />
        <div className="profile-exp bg-white p-2">
          <h2 className="text-primary">Experience</h2>

          <Fragment>
            <ProfileExperience />
          </Fragment>
        </div>

        <div className="profile-edu bg-white p-2">
          <h2 className="text-primary">Education</h2>

          <Fragment>
            <ProfileEducation />
          </Fragment>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Profile;
