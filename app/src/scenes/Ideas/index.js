import React from 'react';
import NavBar from '../NavBar';
import './idea.scss';

const Idea = () => {
  return (
    <div>
      <NavBar></NavBar>
      <textarea class="title" placeholder="Idea Title"></textarea>
      <textarea class="idea-text" placeholder="Explain Ideas ...."></textarea>
    </div>
  );
};

export default Idea;
