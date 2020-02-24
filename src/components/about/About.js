import React, { Fragment, useEffect } from 'react';
import AOS from 'aos';

import AboutTop from './AboutTop';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
      <AboutTop />
      <div className="profileContainer m-auto">
        <div className="profile-about bg-light p-2">
          <h2 className="text-primary">Who I am</h2>
          <p className="lead">
            Hello, my name is Austin. As said in my short bio I am a Determined
            and Confident developer. Taking something from absolutely nothing
            and building out amazing intricate applications is my lifes goal.
          </p>
          <div className="line" />
          <h2 className="text-primary">Started From Nothing</h2>
          <p className="py">
            From the first time I wrote a Hello World program, at that time is
            was C++, I knew I was hooked. That began a long road of learning and
            creating. However, I never would have dreamed I would've been a
            developer.
          </p>
          <p className="py">
            From there I just kept learning new technologies and new techniques.
            From building a simple hangman game to launching my first mobile
            game on the Google Play Store. After that I wanted to learn even
            more and dug deep into JavaScript.
          </p>
          <div className="line" />
          <h2 className="text-primary">Where I Am Today</h2>
          <p className="py">
            Now, having built many applications with Vanilla JS, React, Vue, and
            using Express and Node, I still crave that learning feeling I had
            from the beginning. Building even more complex and amazing things is
            my passion and I look forward to continuing this journey for the
            rest of my life.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
