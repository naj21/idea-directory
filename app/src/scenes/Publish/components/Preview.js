import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Input from '../../../shared/Input';
import '../publish.scss';
import Button from '../../../shared/Button';
import { bindActionCreators } from 'redux';
import { openPublish, toggleTags, clearTags } from 'services/idea/actions';
import { createIdeaThunk } from 'services/idea/thunks';
import MultiSelect from 'shared/MultiSelect';
import '../publish.scss';
import TextArea from 'shared/TextArea';

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
  }, [openPublish, ref, isOpen]);

  useEffect(() => {
    setIdeaTitle(title);
    setSummary(description.substring(0, 50));
  }, [title, description]);

  return isOpen ? (
    <form onSubmit={handleSubmit} className="preview" ref={ref}>
      <p className="preview-text">Preview</p>
      <section>
        <div>
          <Input
            type="text"
            value={ideaTitle}
            colored
            label="Title"
            name="title"
            onChange={handleIdeaTitle}
            className="title-input"
          />
          <TextArea
            label="Summary"
            maxlength="50"
            value={summary}
            onChange={handleSummary}
            className="summary-field"
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
          <Button className="publish-button" loading={publishData.loading}>
            Publish
          </Button>
        </div>
      </section>
    </form>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.idea.publish.isOpen,
    tags: state.idea.tags.data,
    publishData: state.idea.publish,
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
