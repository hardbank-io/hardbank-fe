import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App h-screen flex">
        <Nav></Nav>
        <Main></Main>
    </div>
  );
}

export default App;
