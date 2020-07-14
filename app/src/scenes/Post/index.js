import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import './Post.scss';
import { Heart } from '@styled-icons/feather/Heart';
import { Heart as SolidHeart } from '@styled-icons/boxicons-solid/Heart';
import { Comment } from '@styled-icons/evil/Comment';
import StyledIcon from '../../shared/StyledIcon';

const Icon = styled(StyledIcon)`
  width: 26px;
  height: 25px;
`;

const RedHeart = styled(SolidHeart)`
  color: red;
`;

const Post = (props) => {
  const [isRed, setIsRed] = useState(false);
  const likeIcon = <Icon icon={<Heart />} />;
  const redLikeIcon = <Icon icon={<RedHeart />} />;
  const commentIcon = <Icon icon={<Comment />} />;
  return (
    <div className="post">
      <p className="topic"> Paper Making machine</p>
      <div className="avatar">bs</div>
      <p className="person"> By Babatunde Sanya</p>
      <p className="date"> July 8th 2020</p>

      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, sociis
          tellus a a, rhoncus ullamcorper bibendum a. Adipiscing ipsum quam orci
          risus, amet. Ipsum magna tellus quis tortor etiam hendrerit nunc. Vulputate
          semper sapien, enim porttitor tristique egestas at. Sit laoreet massa
          varius tellus duis vulputate ut ut placerat. Id eget nibh gravida malesuada
          vivamus dignissim quam sit praesent. Feugiat metus arcu viverra sit
          dignissim mi risus pharetr
        </p>
      </div>
      <div className="icons">
        <div className=" like-icon">
          {!isRed && <div onClick={() => setIsRed(!isRed)}>{likeIcon}</div>}

          {isRed && <div onClick={() => setIsRed(!isRed)}>{redLikeIcon}</div>}

          <p>10</p>
        </div>
        <div className="comment-icon">
          <div>{commentIcon}</div>
          <p>15</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
