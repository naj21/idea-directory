import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import '../publish.scss';
import Preview from './Preview';

const Idea = ({ isOpen, publishData }) => {
  const portalContainer = useRef();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const ref = useRef();
  const portalElement = document.getElementById('overlay-container');
  const prevPublishRef = useRef();

  useEffect(() => {
    prevPublishRef.current = publishData;
  }, [publishData]);
  const prevPublish = prevPublishRef.current;

  useEffect(() => {
    if (
      prevPublish &&
      prevPublish.loading &&
      !publishData.loading &&
      publishData.data
    ) {
      setTitle('');
      setDescription('');
    }
  }, [prevPublish, publishData]);

  useEffect(() => {
    portalContainer.current = document.createElement('div');
    portalElement.appendChild(portalContainer.current);
    return () => {
      portalElement.removeChild(portalContainer.current);
    };
  }, [portalElement]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleIdeaChange = (e) => setDescription(e.target.value);

  if (isOpen === true) {
    portalContainer.current.classList.add('overlay');
  } else if (
    portalContainer.current &&
    portalContainer.current.classList.contains('overlay')
  ) {
    portalContainer.current.classList.remove('overlay');
  }

  return (
    <div>
      <div>
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
    isOpen: state.publish.publishReducer.isOpen,
    publishData: state.publish.publishReducer,
  };
};

export default connect(mapStateToProps)(Idea);
