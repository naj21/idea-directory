import React, { useRef, useEffect, useState } from 'react';
import Card from '../../../shared/Card';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Input from '../../../shared/Input';
import '../publish.scss';
import Button from '../../../shared/Button';
import { bindActionCreators } from 'redux';
import { openPublish, toggleTags, clearTags } from 'services/idea/actions';
import { createIdeaThunk } from 'services/idea/thunks';
import MultiSelect from 'shared/MultiSelect';
import themes from 'globals/themes';

const PublishCard = styled(Card)`
  position: absolute;
  width: 1047px;
  height: 558px;
  left: 195px;
  top: 121px;
  background: #ffffff;
  padding: 0 87px 0 95px;
  z-index: 1;

  section {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
  }
`;

const TitleInput = styled(Input)`
  width: 316px;
  height: 40px;
  background: rgba(225, 230, 235, 0.35);
  border-radius: 3px;
  margin-bottom: 40px;
  margin-right: 70px;
`;

const SummaryField = styled.textarea`
  width: 316px;
  height: 82px;
  border-radius: 3px;
  margin-bottom: 40px;
  background: rgba(225, 230, 235, 0.35);
  margin-right: 70px;
  border: ${themes.border.color.normal};
  padding: 10px;
`;

const PublishButton = styled(Button)`
  margin-top: 85px;
`;

const Publish = (props) => {
  const {
    isOpen,
    title,
    description,
    openPublish,
    publishIdea,
    tags,
    toggleTags,
    clearTags,
    publishData,
  } = props;

  const ref = useRef();
  const [ideaTitle, setIdeaTitle] = useState(title);
  const [summary, setSummary] = useState(description.substring(0, 50));

  const handleIdeaTitle = (e) => setIdeaTitle(e.target.value);

  const handleSummary = (e) => {
    if (e.target.value.length <= 50) {
      setSummary(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    publishIdea({ title, description, tags, summary });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref && ref.current && !ref.current.contains(e.target)) {
        openPublish(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
      clearTags(tags);
    };
  }, [openPublish, ref, isOpen, clearTags, tags]);

  useEffect(() => {
    setIdeaTitle(title);
    setSummary(description.substring(0, 50));
  }, [title, description]);

  return (
    <div>
      {isOpen && (
        <form onSubmit={handleSubmit}>
          <PublishCard ref={ref}>
            <p class="preview">Preview</p>
            <section>
              <div>
                <TitleInput
                  type="text"
                  value={ideaTitle}
                  colored
                  label="Title"
                  name="title"
                  onChange={handleIdeaTitle}
                />
                <SummaryField
                  name="summary"
                  maxlength="50"
                  value={summary}
                  onChange={handleSummary}
                />
              </div>
              <div>
                <MultiSelect
                  options={[
                    'tech',
                    'frontend',
                    'backend',
                    'ios',
                    'andriod',
                    'design',
                    'illustration',
                  ]}
                  closeOnSelect={false}
                  selected={tags}
                  placeholder={'Add tags'}
                  onSelectOption={(opt) => toggleTags(opt)}
                  label={'Add tags so readers know what your idea is about'}
                />
                <PublishButton loading={publishData.loading}>Publish</PublishButton>
              </div>
            </section>
          </PublishCard>
        </form>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.idea.publishReducer.isOpen,
    tags: state.idea.tags.data,
    publishData: state.idea.publishReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    openPublish: bindActionCreators(openPublish, dispatch),
    publishIdea: bindActionCreators(createIdeaThunk, dispatch),
    toggleTags: bindActionCreators(toggleTags, dispatch),
    clearTags: bindActionCreators(clearTags, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Publish);
