import React from 'react';
import Button from './shared/Button';
import Dropdown, { Options } from './shared/Dropdown';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <Button>Get Started</Button>
      <Dropdown>
        <Options>New Idea</Options>
        <Options>Edit</Options>
      </Dropdown>
    </div>
  );
}

export default App;
