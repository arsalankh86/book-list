import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import CustomerForm from './components/CustomerForm';
import './App.css'; 
import BookList from './components/BookList';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <h1>Bookstore App </h1> <span onClick={logOut}>Logout</span>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/create-customer">Sign Up</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<p>Welcome to the Bookstore App</p>} />
          <Route path="/login" element={
            isLoggedIn ? (
              <BookList />
            ) : (
              <Login onLogin={handleLogin} />
            )
          } />
          <Route path="/create-customer" element={
              isLoggedIn ? (
                <BookList />
              ) : (
                <CustomerForm onLogin={handleLogin} />
              )
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
