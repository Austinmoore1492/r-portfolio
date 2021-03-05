import React, { Fragment } from "react";

const ProfileEducation = () => (
  <Fragment>
    <div className="profile-exp bg-white">
    <div>
        <h3 className="text-dark" style={{color: "#34495E"}}>Support-Jobs.com</h3>
        <p style={{color: "#000"}}>Sept 2020 - Current</p>
        <p style={{color: "#41B883"}}>
          <strong >Position: </strong>React Developer
        </p>
        <p>
          <strong style={{color: "#000"}} >Description: </strong>Responsible for the product planning and execution throughout the Product Life Cycle,
including: gathering and prioritizing product and customer requirements, and defining
the product vision
Lead developer and systems architect designing and implementing the
infrastructure to handle customer and client engagement.
        </p>
      </div>
      <div>
        <h3 className="text-dark" style={{color: "#34495E"}}>Twenty Over Ten</h3>
        <p style={{color: "#000"}}>Apr 2020 - Current</p>
        <p style={{color: "#41B883"}} > 
          <strong >Position: </strong>Developer Support Specialist
        </p>
        <p>
          <strong style={{color: "#000"}} >Description: </strong>Educating clients on our platform’s best practices. Troubleshooting client issues. Help maintain the Technical Product queues assisting in the troubleshooting of issues on the Twenty Over Ten website platform. Provide support for solving technical issues by filing, managing, and triaging bugs and updating clients’ custom builds as needed. Help write, organize, and maintain appropriate documentation. Create and upkeep education on support communities and best practices on the Twenty Over Ten platform. Communicating directly with clients.
        </p>
      </div>
    </div>
  </Fragment>
);

export default ProfileEducation;
