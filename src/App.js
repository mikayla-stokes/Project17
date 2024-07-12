// U99796912
import React from 'react';
import FancyText from './FancyText';
import TaskGenerator from './TaskGenerator';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <FancyText text="Task Management and Motivation App" title={true} />
      </header>
      <main>
        <TaskGenerator />
      </main>
      <footer className="App-footer">
        <p>© 2024 Task Management and Motivation App</p>
      </footer>
    </div>
  );
};

export default App;