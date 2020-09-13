import React, { useEffect } from 'react';
import Button from 'shared/Button';
import IdeaCard from 'scenes/Ideas/components/IdeaCard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadUserIdeasThunk } from 'services/idea/thunks';
import '../Profile.scss';
import Loader from 'shared/Loader';

const ProfileView = (props) => {
  const {
    user,
    ideas,
    loadIdeas,
    history: { push },
  } = props;

  useEffect(() => {
    !ideas.data.length && loadIdeas();
  }, [ideas.data.length, loadIdeas]);

  return (
    <article className="profile">
      <section className="profile__header">
        <div className="profile__name">
          <h2>{user.data.username}</h2>
          <Button outline onClick={() => push('/profile/edit')} sm>
            Edit Profile
          </Button>
        </div>
        <div>{user.bio}</div>
      </section>
      <p>Posts</p>
      <section className="profile__ideas">
        {!ideas.loading ? (
          ideas.data.map((idea) => <IdeaCard idea={idea} />)
        ) : (
          <Loader />
        )}
      </section>
    </article>
  );
};

function mapStateToProps(state) {
  return {
    ideas: state.idea.userIdeas,
    user: state.account.auth,
  };
}

function mapDispatchhToProps(dispatch) {
  return {
    loadIdeas: bindActionCreators(loadUserIdeasThunk, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchhToProps)(ProfileView);
