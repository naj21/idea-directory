import React, { useState } from 'react';
import Card from 'shared/Card';
import styled from 'styled-components';
import { Close } from '@styled-icons/evil/Close';
import StyledIcon from 'shared/StyledIcon';
import './Post.scss';
import { openComment } from 'services/comment/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const CommentCard = styled(Card)`
  position: absolute;
  width: 407px;
  height: 950px;
  left: 1078px;
  top: 0px;
  z-index: 1;
  background: #ffffff;
`;

const CloseIcon = styled(StyledIcon)`
  margin-left: 227px;
`;

const Comments = (props) => {
  const handleClose = () => props.openComment(false);

  return (
    <CommentCard>
      <div class="header">
        <p class>Comments</p>
        <CloseIcon onClick={handleClose} icon={<Close />}></CloseIcon>
      </div>

      <textarea
        // onChange={handleTitleChange}
        type="text"
        name="title"
        class="comment-textbox"
        placeholder="Input comment to share thought or declare interest"
        required="required"
      ></textarea>
    </CommentCard>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    openComment: bindActionCreators(openComment, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Comments);
