import React, { useState } from 'react';
import './scss/App.scss';
import Button from 'react-bootstrap/Button';
import data from './data';
import List from './components/List';

function App() {
  const [people, setPeople] = useState(data);
  function handleClearList() {
    setPeople([]);
  }
  return (
    <div className="App">      
      <div className="container">
        <div className="birthday-remider-list">
          <h5>{people.length} birthday today</h5>
          <List people={people} />
          <div className="clear-list">
            <Button onClick={handleClearList}>Clear all</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
