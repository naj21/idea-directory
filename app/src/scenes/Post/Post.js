import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Heart } from '@styled-icons/feather/Heart';
import { Heart as SolidHeart } from '@styled-icons/boxicons-solid/Heart';
import { Comment } from '@styled-icons/evil/Comment';
import StyledIcon from '../../shared/StyledIcon';
import Comments from './Comment';
import { openComment } from 'services/comment/actions';
import { getIdeaThunk, likeIdeaThunk } from 'services/idea/thunks';
import './Post.scss';
import moment from 'moment';


const Post = (props) => {
  const {
    isOpened,
    idea,
    getIdea,
    match: { params },
  } = props;
  const [isOpen, setOpen] = useState(false);
  const portalContainer = useRef();
  const portalElement = document.getElementById('overlay-container');
  const [isRed, setIsRed] = useState(false);
  const likeIcon = <StyledIcon className="icon" icon={<Heart />} />;
  const redLikeIcon = (
    <StyledIcon className="icon" icon={<SolidHeart className="red-heart" />} />
  );
  const commentIcon = <StyledIcon className="icon" icon={<Comment />} />;

  const handleChange = () => {
    portalContainer.current.classList.add('overlay');
    props.openComment(true);
    setOpen(true);
  };

  const toggleLike = () => {
    setIsRed(!isRed);
    props.likeIdea(params.ideaID);
  };

  // const handleUnlike = () =>{
  //   setIsRed(!isRed)
  //   props.likeIdea(params.ideaID)
  // }

  if (
    isOpened === false &&
    portalContainer.current &&
    portalContainer.current.classList.contains('overlay')
  ) {
    portalContainer.current.classList.remove('overlay');
  }

  useEffect(() => {
    portalContainer.current = document.createElement('div');
    portalElement.appendChild(portalContainer.current);
    return () => {
      portalElement.removeChild(portalContainer.current);
    };
  }, [portalElement]);

  useEffect(() => {
    getIdea(params.ideaID);
  }, [getIdea, params.ideaID]);

  return (
    <div className="block">
      <div className="idea">
        <p className="idea__title">{idea.data && idea.data.title}</p>
        <div className="idea__author">
          <div className="avatar">{idea.data && idea.data.author.username.slice(0, 1)}</div>
          <div>
            <p className="person"> {idea.data && idea.data.author.username}</p>
            <p className="date"> {idea.data && moment(idea.data.author.created_at.substr(0, 10), "YYYYMMDD").fromNow()}</p>
          </div>
        </div>

        <div className="idea__content">
          <p>{idea.data && idea.data.description}</p>
        </div>
        <div className="icons">
          <div className=" like-icon">
            {idea.data && idea.data.is_liked ? (
              <div onClick={toggleLike}>{redLikeIcon}</div>
            ) : (
              <div onClick={toggleLike}>{likeIcon}</div>
            )}

            <p>{idea.data && idea.data.likes_count}</p>
          </div>
          <div className="comment-icon">
            <div onClick={handleChange}>{commentIcon}</div>
            <p>15</p>
          </div>
        </div>
      </div>
      {isOpened && isOpen && <Comments ideaID={params.ideaID}></Comments>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpened: state.comment.createdComment.isOpen,
    idea: state.idea.selectedIdea,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openComment: bindActionCreators(openComment, dispatch),
    getIdea: bindActionCreators(getIdeaThunk, dispatch),
    likeIdea: bindActionCreators(likeIdeaThunk, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
