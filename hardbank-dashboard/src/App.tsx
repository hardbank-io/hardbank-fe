import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
        <Nav></Nav>
        <Main></Main>
    </div>
  );
}

export default App;
