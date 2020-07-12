import React from 'react';
import Button from '../../shared/Button';
import connect from 'globals/images/connect.png';
import share from 'globals/images/share.png';
import build from 'globals/images/build.png';

import './About.scss';

const About = (props) => {
  const { history } = props;
  return (
    <article className="about">
      <div className="about__hero">
        <h1>A penny for your thoughts?</h1>
        <p>Breathe into your imagination, give it life.</p>
        <Button onClick={() => history.push('/signup')}>Get Started</Button>
      </div>
      <section className="about__section">
        <div
          style={{ backgroundImage: `url(${connect})` }}
          alt="connect"
          className="about__section-image"
        />
        <div>
          <h2>Connect</h2>
          <p>Meet people all over the globe.</p>
        </div>
      </section>
      <section className="about__section">
        <div>
          <h2>Share</h2>
          <p>Give context to your thoughts, let your connection contribute.</p>
        </div>
        <div
          style={{ backgroundImage: `url(${share})` }}
          alt="share"
          className="about__section-image"
        />
      </section>
      <section className="about__section">
        <div
          style={{ backgroundImage: `url(${build})` }}
          alt="build"
          className="about__section-image"
        />
        <div>
          <h2>Build</h2>
          <p>You and your connection implement your thoughts.</p>
        </div>
      </section>
      <div className="about__footer">
        <h1>Lectus placerat eu.</h1>
        <h1>Lectus placerat eu.</h1>
        <Button onClick={() => history.push('/signup')}>Get Started</Button>
      </div>
    </article>
  );
};

export default About;
