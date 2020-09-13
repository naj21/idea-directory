import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactDOM from 'react-dom';
import { Heart } from '@styled-icons/feather/Heart';
import { Heart as SolidHeart } from '@styled-icons/boxicons-solid/Heart';
import { Comment } from '@styled-icons/evil/Comment';
import StyledIcon from '../../shared/StyledIcon';
import Comments from './Comment';
import { openComment } from 'services/comment/actions';
import { getIdeaThunk } from 'services/idea/thunks';
import './Post.scss';
import Loader from 'shared/Loader';

const Post = (props) => {
  const {
    isOpened,
    idea,
    getIdea,
    match: { params },
  } = props;
  const [isOpen, setOpen] = useState(false);
  const portalContainer = useRef();
  const rightModalPortalContainer = document.createElement('div');
  const portalElement = document.getElementById('overlay-container');
  const rightModalPortalElement = document.getElementById('right-modal');
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
    isOpened &&
      isOpen &&
      rightModalPortalElement.appendChild(rightModalPortalContainer);
  }, [rightModalPortalElement, rightModalPortalContainer, isOpen, isOpened]);

  useEffect(() => {
    getIdea(params.ideaID);
  }, [getIdea, params.ideaID]);

  return (
    <div className="block">
      {!idea.loading ? (
        <>
          <div className="idea">
            <p className="idea__title">{idea.data && idea.data.title}</p>
            <div className="idea__author">
              <div className="avatar">bs</div>
              <div>
                <p className="person"> By Babatunde Sanya</p>
                <p className="date"> July 8th 2020</p>
              </div>
            </div>

            <div className="idea__content">
              <p>{idea.data && idea.data.description}</p>
            </div>
            <div className="icons">
              <div className=" like-icon">
                {!isRed && <div onClick={() => setIsRed(!isRed)}>{likeIcon}</div>}

                {isRed && <div onClick={() => setIsRed(!isRed)}>{redLikeIcon}</div>}

                <p>10</p>
              </div>
              <div className="comment-icon">
                <div onClick={handleChange}>{commentIcon}</div>
                <p>15</p>
              </div>
            </div>
          </div>
          {ReactDOM.createPortal(
            <Comments ideaID={params.ideaID} />,
            rightModalPortalContainer
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpened: state.comment.commentList.isOpen,
    idea: state.idea.selectedIdea,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openComment: bindActionCreators(openComment, dispatch),
    getIdea: bindActionCreators(getIdeaThunk, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
