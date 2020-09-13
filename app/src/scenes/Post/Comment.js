import React, {useState,useEffect,useRef} from 'react';
import Card from 'shared/Card';
import styled from 'styled-components';
import { Close } from '@styled-icons/evil/Close';
import StyledIcon from 'shared/StyledIcon';
import './Post.scss';
import { openComment } from 'services/comment/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addCommentThunk, getCommentsThunk} from 'services/comment/thunk'
import Button from 'shared/Button'
import moment from 'moment';


const Comments = (props) => {
  const { ideaID, openComment, getComments, addCommentThunk,comments,idea} = props;
  console.log(idea)
//  console.log(moment(comment.data.author.created_at.substr(0, 10), "YYYYMMDD").fromNow())
  const [body, setBody] = useState('')
  const handleClose = () => openComment(false);
  const ref = useRef();
  const onChange = (e) => {
    setBody(e.target.value);
    if(ref.current && ref.current.hasAttribute('disabled')){
      ref.current.removeAttribute("disabled")
      ref.current.classList.add("post-comment")
    }else if(ref.current && !ref.current.hasAttribute('disabled') && e.target.value === ''){
      ref.current.setAttribute("disabled", "")
    }
     
  } 

   useEffect(() => {
    getComments(ideaID);
  }, [getComments, ideaID]);


  const handleSubmit = (e) => {
    e.preventDefault();
    e.persist()
    addCommentThunk({body}, ideaID)
    
  }
  
  return (
    <Card className = "comment-card">
      <div class="header">
        <p >Comments</p>
        <StyledIcon className = "close-icon" onClick={handleClose} icon={<Close />}></StyledIcon>
      </div>
      
      <form onSubmit = {handleSubmit}>
      <div className = "comment-input-container">
       <div className = "comment-input-header">
        <div className = "comment-input-avatar">{idea.data && idea.data.author.username.slice(0, 1)}</div>
        <p className = "comment-name">{idea.data && idea.data.author.username}</p>
        </div>
        
      <textarea
        type="text"
        name="body"
        className="comment-textbox"
        placeholder="Input comment to share thought or declare interest"
        required="required"
        onChange = {onChange}
      ></textarea>
     
     <div className = "custom-input-footer">
      <p className = "custom-input-footer-cancel">Cancel</p>
      
      <Button
      className = "post-comment"
      ref = {ref}
      disabled
      >
        Post
      </Button>
      </div>
      </div>
      </form>
      

      <div className = "comment-list">
      {comments && comments.data && comments.data.length && comments.data.map((comment => (
      <div className = "commments">   
      <div className = "comment-author">
      <div className = "comment-avatar">{comment.author.username.slice(0, 1)}</div>
      <div>
      <p className = "comment-name">{comment.author.username}</p>
      <p className = "comment-date"> {comment.author && moment(comment.author.created_at.slice(0, 10), "YYYY-MM-DD").fromNow()}</p>
      </div>
      </div>
     
     <div className = "comment-description">
       <p>{comment.body}</p>
     </div>
     <div className = "comment-break"></div>
      </div>
    )))}
      </div>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    comments: state.comment.commentList,
    idea: state.idea.selectedIdea
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    openComment: bindActionCreators(openComment, dispatch),
    addCommentThunk: bindActionCreators(addCommentThunk, dispatch),
    getComments:bindActionCreators(getCommentsThunk, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
