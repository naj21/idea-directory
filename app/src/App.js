import React from 'react';
import withMenu from './globals/utils/withMenu';
import SignUp from './scenes/signup/SignUp';

function App() {
  return (
    <div className="App">
      <SignUp></SignUp>;
    </div>
  );
}

export default withMenu(App);
