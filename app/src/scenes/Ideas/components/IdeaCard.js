import React from 'react';
import Card from 'shared/Card';
import Link from 'shared/Link';
import '../Ideas.scss';

const IdeaCard = ({ idea }) => {
  return (
    <Card rounded className="ideas__card">
      <h4>{idea.title}</h4>
      <p>{idea.description.substr(0, 50)}..</p>
      <Link to={`/ideas/${idea.id}`}>View more</Link>
    </Card>
  );
};

export default IdeaCard;
