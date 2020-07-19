import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './Post.scss';
import { Heart } from '@styled-icons/feather/Heart';
import { Heart as SolidHeart } from '@styled-icons/boxicons-solid/Heart';
import { Comment } from '@styled-icons/evil/Comment';
import StyledIcon from '../../shared/StyledIcon';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getIdeaThunk } from 'services/idea/thunks';

const RedHeart = styled(SolidHeart)`
  color: red;
`;

const Post = (props) => {
  const {
    idea,
    getIdea,
    match: { params },
  } = props;
  const [isRed, setIsRed] = useState(false);
  const likeIcon = <StyledIcon icon={<Heart />} size={26} />;
  const redLikeIcon = <StyledIcon icon={<RedHeart />} size={26} />;
  const commentIcon = <StyledIcon icon={<Comment />} size={26} />;

  useEffect(() => {
    getIdea(params.ideaID);
  }, [getIdea, params.ideaID]);

  return (
    <div className="idea">
      <p className="idea__title">{idea.data && idea.data.title}</p>
      <div className="idea__author">
        <div className="avatar">bs</div>
        <div>
          <p className="person"> By Babatunde Sanya</p>
          <p className="date"> July 13th 2020</p>
        </div>
      </div>
      <div className="idea__content">
        <p>{idea.data && idea.data.description}</p>
      </div>
      <div className="icons">
        <div className=" like-icon">
          {!isRed && <div onClick={() => setIsRed(!isRed)}>{likeIcon}</div>}

          {isRed && <div onClick={() => setIsRed(!isRed)}>{redLikeIcon}</div>}

          <p>0</p>
        </div>
        <div className="comment-icon">
          <div>{commentIcon}</div>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  const ideaList = state.idea.ideaList.data;
  const id = ownProps.match.params.ideaID;
  let idea;
  if (ideaList.length) {
    idea = ideaList.find((idea) => idea.id == id);
  }
  return {
    idea: state.idea.selectedIdea,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getIdea: bindActionCreators(getIdeaThunk, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
