import React from 'react';
import Button from './shared/Button';
import Dropdown, { Options } from './shared/Dropdown';
import Input from './shared/Input';
import Cards from './shared/Cards';
import SearchIcon from './shared/SearchIcon';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>

      <Input></Input>
      <Button>Get Started</Button>
      <Dropdown>
        <Options>New Idea</Options>
        <Options>Edit</Options>
      </Dropdown>
      <Cards rounded></Cards>
      <SearchIcon></SearchIcon>
    </div>
  );
}

export default App;
