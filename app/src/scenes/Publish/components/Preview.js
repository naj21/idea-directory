import React, { useRef, useEffect, useState } from 'react';
import Card from '../../../shared/Card';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Input from '../../../shared/Input';
import '../publish.scss';
import Button from '../../../shared/Button';
import { bindActionCreators } from 'redux';
import { openPublish } from 'services/actions';
import { publishIdeaThunk } from 'services/thunks';

const PublishCard = styled(Card)`
  position: absolute;
  width: 1047px;
  height: 558px;
  left: 195px;
  top: 121px;
  background: #ffffff;
  padding-left: 87px;
`;

const TitleInput = styled(Input)`
  width: 316px;
  height: 40px;
  background: rgba(225, 230, 235, 0.35);
  border-radius: 3px;
  margin-bottom: 40px;
  margin-right: 70px;
`;

const SummaryInput = styled(Input)`
  width: 316px;
  height: 82px;
  border-radius: 3px;
  margin-bottom: 40px;
  background: rgba(225, 230, 235, 0.35);
  margin-right: 70px;
`;
const PublishButton = styled(Button)`
  margin-top: 35px;
`;

const Publish = ({ isOpen, title, description, openPublish, publishIdea }) => {
  const ref = useRef();
  const [ideaTitle, setIdeaTitle] = useState(title);
  const summary = description.split('.')[0];
  const [tags, setTags] = useState('');

  const handleIdeaTitle = (e) => setIdeaTitle(e.target.value);
  const handleTags = (e) => setTags(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    publishIdea({ title, description, summary, tags });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref && ref.current && !ref.current.contains(e.target)) {
        openPublish(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openPublish, ref]);

  useEffect(() => {
    setIdeaTitle(title);
  }, [title]);
  return (
    <div>
      {isOpen && (
        <form onSubmit={handleSubmit}>
          <PublishCard ref={ref}>
            <p class="preview">Preview</p>
            <div style={{ float: 'left' }}>
              <TitleInput
                type="text"
                value={ideaTitle}
                colored
                label="Title"
                name="title"
                onChange={handleIdeaTitle}
              />
            </div>

            <div style={{ float: 'left' }}>{/* this is for the tags */}</div>

            <div style={{ float: 'left' }}>
              <SummaryInput
                value={summary}
                type="text"
                label="Summary"
                name="summary"
              />
            </div>

            <div style={{ float: 'left' }}>
              <PublishButton>Publish</PublishButton>
            </div>
          </PublishCard>
        </form>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.reducer.isOpen,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    openPublish: bindActionCreators(openPublish, dispatch),
    publishIdea: bindActionCreators(publishIdeaThunk, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Publish);
