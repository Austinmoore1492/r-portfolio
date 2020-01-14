import React, { Fragment, useEffect } from "react";
import AOS from "aos";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";

const Profile = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
      <ProfileTop />
      <div className="profileContainer m-auto">
        <div className="profile-grid">
          <ProfileAbout />
          <div data-aos="fade-right" className="profile-exp bg-white p-2">
            <h2 className="text-primary">Experience</h2>

            <Fragment>
              <ProfileExperience />
            </Fragment>
          </div>

          <div data-aos="fade-left" className="profile-edu bg-white p-2">
            <h2 className="text-primary">Education</h2>

            <Fragment>
              <ProfileEducation />
            </Fragment>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
