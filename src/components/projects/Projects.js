import React, { Fragment } from 'react';
import ProjectsTop from './ProjectsTop';

const Projects = () => (
  <Fragment>
    <ProjectsTop />
    <div className="profileContainer m-auto">
      <div id="projects">

        <div id="img">

          <div className="img">
            <a
              href="https://support-jobs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./img/supportJobs.png" alt="Remote Tech Jobs!" />
            </a>
            <h3>Remote Customer Support Job Board</h3>
            <p>Your one stop shop for all Remote Tech Jobs</p>
            <p className="p-border">Built with React, Node, Express, and Stripe!</p>

            <a
              href="https://support-jobs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </div>

          <div className="img">
            <a
              href="https://flw-connect.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./img/FLW-Connected.png" alt="FLW-Connected" />
            </a>
            <h3>FLW Connected</h3>
            <p>For the Community, From the Community</p>
            <p className="p-border">
              Built with React, Redux, Express, and MongoDB
            </p>
            <a
              href="https://github.com/Austinmoore1492/FLWConnected-Front-End"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
            |
            <a
              href="https://flw-connect.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site(Heroku)
            </a>
          </div>

          <div className="img">
            <a
              href="https://ryo-store.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./img/storePic.png"
                alt="Ecommerce Store Built in React"
              />
            </a>
            <h3>React E-Commerce Store</h3>
            <p>React E-Commerce Store</p>
            <p className="p-border">
              Built with React, Express, Node, and Stripe!
            </p>
            <a
              href="https://github.com/Austinmoore1492/React-Store"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
            |
            <a
              href="https://ryo-store.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site (Heroku)
            </a>
          </div>

          

          <div className="img">
            <a
              href="https://github.com/Austinmoore1492?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./img/other.png" alt="Other Projects" />
            </a>
            <h3>Other Projects</h3>
            <p>GitHub</p>
            <p className="p-border">All Other Projects!</p>
            <a
              href="https://github.com/Austinmoore1492"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Projects;
