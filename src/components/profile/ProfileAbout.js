import React, { Fragment } from 'react';

const ProfileEducation = () => (
  <Fragment>
    <div className="profile-about bg-light p-2">
      <h2 className="text-primary">Short Bio</h2>
      <p>
        I am a determined and self motivated Developer specializing in
        Languages/Frameworks such as JavaScript, React, Vue, Express, Node,
        MongoDB, Bootstrap, HTML, and CSS.
      </p>
      <div className="line" />
      <h2 className="text-primary">Skill Set</h2>
      <div className="skills">
        <div className="p-1">
          <i className="fab fa-js-square fa-3x" />
        </div>
        <div className="p-1">
          <i className="fab fa-react fa-3x" />
        </div>
        <div className="p-1">
          <i className="fab fa-vuejs fa-3x" />
        </div>
        <div className="p-1">
          <i className="fab fa-node-js fa-3x" />
        </div>
        <div className="p-1">
          <i className="fab fa-git-square fa-3x" />
        </div>
        <div className="p-1">
          <i className="fab fa-bootstrap fa-3x" />
        </div>
        <div className="p-1">
          <i className="fab fa-html5 fa-3x" />
        </div>
        <div className="p-1">
          <i className="fab fa-css3-alt fa-3x" />
        </div>
      </div>
    </div>
  </Fragment>
);

export default ProfileEducation;
