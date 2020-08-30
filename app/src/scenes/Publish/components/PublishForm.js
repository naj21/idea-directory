import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import ReactDOM from "react-dom";
import '../publish.scss';
import Preview from './Preview';

const Idea = ({ isOpen, publishData, history }) => {
  const portalContainer = useRef();
  const previewPortalContainer = document.createElement('div');
  const previewPortalElement = document.getElementById('preview-modal');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
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
      history.push(`/ideas/${publishData.data.id}`)
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
    portalContainer.current && portalContainer.current.classList.add('overlay');
    previewPortalElement.appendChild(previewPortalContainer)
  } else if (
    portalContainer.current &&
    portalContainer.current.classList.contains('overlay')
  ) {
    portalContainer.current.classList.remove('overlay');
    previewPortalElement.appendChild(previewPortalContainer)
  }

  return (
    <div className="post">
      <form>
        <textarea
          onChange={handleTitleChange}
          type="text"
          name="title"
          value={title}
          className="title"
          placeholder="Idea Title"
          required="required"
        ></textarea>
        <textarea
          onChange={handleIdeaChange}
          type="text"
          name="idea"
          value={description}
          className="idea-text"
          placeholder="Explain Ideas ...."
          required="required"
        ></textarea>
      </form>
      {ReactDOM.createPortal(<Preview title={title} description={description} />, previewPortalContainer)}
      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.idea.publish.isOpen,
    publishData: state.idea.publish,
  };
};

export default connect(mapStateToProps)(Idea);
