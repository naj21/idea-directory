import React, { useEffect } from 'react';
import './Ideas.scss';
import Link from 'shared/Link';
import Button from 'shared/Button';
import Card from 'shared/Card';
import { bindActionCreators } from 'redux';
import { listIdeasThunk } from 'services/idea/thunks';
import { connect } from 'react-redux';

const Ideas = (props) => {
  const { loadIdeas, ideas, history } = props;

  useEffect(() => {
    !ideas.data.length && loadIdeas();
  }, [ideas.data.length, loadIdeas]);

  return (
    <article className="ideas">
      <nav>
        <Link to="" secondary>
          HOME
        </Link>
        <Link to="" secondary>
          TECH
        </Link>
        <Link to="" secondary>
          FRONTEND
        </Link>
        <Link to="" secondary>
          BACKEND
        </Link>
        <Link to="" secondary>
          IOS
        </Link>
        <Link to="" secondary>
          ANDROID
        </Link>
        <Link to="" secondary>
          DESIGN
        </Link>
        <Link to="" secondary>
          ILLUSTRATION
        </Link>
      </nav>
      <div className="ideas-notice">
        <h2>Hello Friend</h2>
        <p>Do you have an idea you want to share?</p>
        <Button onClick={() => history.push('/post')}>New Idea</Button>
      </div>
      <p>POPULAR POSTS</p>
      <section className="ideas-list">
        <Card rounded>
          <h4>Idea 1</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua...
          </p>
          <Link to="/ideas">View more</Link>
        </Card>
        {ideas.data.map((idea) => (
          <Card rounded>
            <h4>{idea.title}</h4>
            <p>{idea.description.substr(0, 50)}..</p>
            <Link to={`/ideas/${idea.id}`}>View more</Link>
          </Card>
        ))}
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
