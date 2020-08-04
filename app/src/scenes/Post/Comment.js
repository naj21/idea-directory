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

const CommentCard = styled(Card)`
  position: absolute;
  width: 407px;
  height: 950px;
  left: 1032px;
  top: 0px;
  z-index: 1;
  background: #ffffff;
  overflow-x: hidden;

`;

const CloseIcon = styled(StyledIcon)`
  margin-left: 227px;
  cursor: pointer;
`;


const Comments = (props) => {
  const { ideaID, openComment, getComments, addCommentThunk,comments} = props;
  
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
    addCommentThunk({body}, ideaID)
    getComments(ideaID);
    
  }
  
  return (
    <CommentCard>
      <div class="header">
        <p >Comments</p>
        <CloseIcon onClick={handleClose} icon={<Close />}></CloseIcon>
      </div>
      
      <form onSubmit = {handleSubmit}>
      <div className = "comment-input-container">
       <div className = "comment-input-header">
        <div className = "comment-input-avatar">BS</div>
        <p className = "comment-name">Sanya Babatunde</p>
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
      <div className = "comment-avatar">bs</div>
      <div>
      <p className = "comment-name">{comment.author.username}</p>
      <p className = "comment-date"> 2 days ago</p>
      </div>
      </div>
     
     <div className = "comment-description">
       <p>{comment.body}</p>
     </div>
     <div className = "comment-break"></div>
      </div>
    )))}
      </div>
    </CommentCard>
  );
};

function mapStateToProps(state) {
  return {
    comments: state.commentReducer
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
