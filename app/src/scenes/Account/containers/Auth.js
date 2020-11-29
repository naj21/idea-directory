import React from 'react';
import Card from 'shared/Card';
import '../Account.scss';

const Auth = (props) => {
  const { hero, header, content, onSubmit } = props;

  return (
    <article className="auth">
      <div className="auth__hero">{hero()}</div>
      <Card rounded className="auth__card">
        <div className="auth__form-header">{header()}</div>
        <form className="auth__form" onSubmit={onSubmit}>
          {content()}
        </form>
      </Card>
    </article>
  );
};

export default Auth;
