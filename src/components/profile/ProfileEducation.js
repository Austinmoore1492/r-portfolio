import React, { Fragment } from 'react';

const ProfileEducation = () => (
  <Fragment>
    <div className="profile-edu bg-white">
      <div>
        <h3 className="text-dark" style={{color: "#34495E"}}>Columbia College</h3>
        <p style={{color: "#000"}}>Jan 2014 - Dec 2018</p>
        <p style={{color: "#41B883"}} >
          <strong>Degree: </strong>Bachelors
        </p>
        <p style={{color: "#34495E"}}>
          <strong>Field Of Study: </strong>Management Information Systems
        </p>
        <p>
          <strong style={{color: "#000"}} >Description: </strong>Educating clients on our platform’s best practices. Troubleshooting client issues. Help maintain the Technical Product queues assisting in the troubleshooting of issues on the Twenty Over Ten website platform. Provide support for solving technical issues by filing, managing, and triaging bugs and updating clients’ custom builds as needed. Help write, organize, and maintain appropriate documentation. Create and upkeep education on support communities and best practices on the Twenty Over Ten platform. Communicating directly with clients.
          <strong >Description: </strong>The Management Information Systems
          program combines theory and practical application so that you’ll
          understand the capabilities and uses of computer technology in a
          business context. You’ll be prepared to work confidently in a variety
          of environments.
        </p>
      </div>
    </div>
  </Fragment>
);

export default ProfileEducation;
