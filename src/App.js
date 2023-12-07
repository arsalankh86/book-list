// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import BookList from './components/BookList';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <BookList />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
