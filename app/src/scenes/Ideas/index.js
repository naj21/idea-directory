import React, { useEffect } from 'react';
import Link from 'shared/Link';
import Button from 'shared/Button';
import Card from 'shared/Card';
import { bindActionCreators } from 'redux';
import { listIdeasThunk } from 'services/idea/thunks';
import { connect } from 'react-redux';
import IdeaCard from './components/IdeaCard';
import './Ideas.scss';
import Loader from 'shared/Loader';

const Ideas = (props) => {
  const { loadIdeas, ideas, history } = props;

  useEffect(() => {
    !ideas.data.length && loadIdeas();
  }, [ideas.data.length, loadIdeas]);

  return (
    <article className="ideas">
      <nav>
        <Link to="/ideas" secondary onClick={() => loadIdeas()}>
          HOME
        </Link>
        <Link to="/ideas" secondary onClick={() => loadIdeas('tech')}>
          TECH
        </Link>
        <Link to="/ideas" secondary onClick={() => loadIdeas('frontend')}>
          FRONTEND
        </Link>
        <Link to="/ideas" secondary onClick={() => loadIdeas('backend')}>
          BACKEND
        </Link>
        <Link to="/ideas" secondary onClick={() => loadIdeas('ios')}>
          IOS
        </Link>
        <Link to="/ideas" secondary onClick={() => loadIdeas('andriod')}>
          ANDROID
        </Link>
        <Link to="/ideas" secondary onClick={() => loadIdeas('design')}>
          DESIGN
        </Link>
        <Link to="/ideas" secondary onClick={() => loadIdeas('illustration')}>
          ILLUSTRATION
        </Link>
      </nav>
      <div className="ideas-notice">
        <h2>Hello Friend</h2>
        <p>Do you have an idea you want to share?</p>
        <Button onClick={() => history.push('/post')}>New Idea</Button>
      </div>
      <p>POPULAR POSTS</p>
      <section className="ideas__list">
        {!ideas.loading ? 
        ideas.data.map((idea) => (
          <IdeaCard idea={idea} />
        ))
      : <Loader />
      }
      </section>
    </article>
  );
};

function mapStateToProps(state) {
  return {
    ideas: state.idea.ideaList,
  };
}

function mapDispatchhToProps(dispatch) {
  return {
    loadIdeas: bindActionCreators(listIdeasThunk, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchhToProps)(Ideas);
