import React, { useState, useEffect, useRef } from 'react';
import Card from 'shared/Card';
import { Close } from '@styled-icons/evil/Close';
import StyledIcon from 'shared/StyledIcon';
import './Post.scss';
import { openComment } from 'services/comment/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCommentThunk, getCommentsThunk } from 'services/comment/thunk';
import Button from 'shared/Button';
import { finishedSuccessfully } from 'globals/utils/functions';

const Comments = (props) => {
  const {
    ideaID,
    openComment,
    getComments,
    addComment,
    comments,
    createdComment,
  } = props;
  const [body, setBody] = useState('');
  const prevCreatedCommentRef = useRef();
  const handleClose = () => openComment(false);

  const onChange = (e) => {
    setBody(e.target.value);
  };

  useEffect(() => {
    getComments(ideaID);
  }, [getComments, ideaID]);

  useEffect(() => {
    prevCreatedCommentRef.current = createdComment;
  }, [createdComment]);
  const prevCreatedComment = prevCreatedCommentRef.current;

  useEffect(() => {
    if (finishedSuccessfully(prevCreatedComment, createdComment)) {
      setBody('');
    }
  }, [createdComment, prevCreatedComment]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment({ body }, ideaID);
    getComments(ideaID);
  };

  return (
    <Card className="comment-card">
      <div class="header">
        <p>Comments</p>
        <StyledIcon
          className="close-icon"
          onClick={handleClose}
          icon={<Close />}
        ></StyledIcon>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="comment-input-container">
          <div className="comment-input-header">
            <div className="comment-input-avatar">BS</div>
            <p className="comment-name">Sanya Babatunde</p>
          </div>

          <textarea
            name="body"
            value={body}
            className="comment-textbox"
            placeholder="Input comment to share thought or declare interest"
            required="required"
            onChange={onChange}
          ></textarea>

          <div className="custom-input-footer">
            <p className="custom-input-footer-cancel" onClick={() => setBody('')}>
              Cancel
            </p>
            <Button className="post-comment" disabled={!body}>
              Post
            </Button>
          </div>
        </div>
      </form>

      {comments.data.length ? (
        <div className="comment-list">
          {comments.data.map((comment) => (
            <div className="comment">
              <div className="comment-author">
                <div className="comment-avatar">bs</div>
                <div>
                  <p className="comment-name">{comment.author.username}</p>
                  <p className="comment-date"> 2 days ago</p>
                </div>
              </div>

              <div className="comment-description">
                <p>{comment.body}</p>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    comments: state.comment.commentList,
    createdComment: state.comment.createdComment,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    openComment: bindActionCreators(openComment, dispatch),
    addComment: bindActionCreators(addCommentThunk, dispatch),
    getComments: bindActionCreators(getCommentsThunk, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
