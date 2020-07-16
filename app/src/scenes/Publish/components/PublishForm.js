import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import '../publish.scss';
import Preview from './Preview';

const Idea = ({ isOpen }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const ref = useRef();

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleIdeaChange = (e) => setDescription(e.target.value);

  if (isOpen === true) {
    ref.current.classList.add('overlay');
  } else if (ref.current && ref.current.classList.contains('overlay')) {
    ref.current.classList.remove('overlay');
  }

  return (
    <div>
      <div ref={ref}>
        <form>
          <textarea
            onChange={handleTitleChange}
            type="text"
            name="title"
            value={title}
            class="title"
            placeholder="Idea Title"
            required="required"
          ></textarea>
          <textarea
            onChange={handleIdeaChange}
            type="text"
            name="idea"
            value={description}
            class="idea-text"
            placeholder="Explain Ideas ...."
            required="required"
          ></textarea>
        </form>
      </div>
      <Preview title={title} description={description}></Preview>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.publish.reducer.isOpen,
  };
};

export default connect(mapStateToProps)(Idea);
