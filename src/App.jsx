import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
<<<<<<< HEAD
import Home from './components/Home'; // ✅ This is your movie homepage
import MovieDetail from './components/MovieDetail';
=======
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import Profile from './components/Profile'; 
>>>>>>> Updated Frontend

const App = () => {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} /> 
      </Routes>
    </Router>
  );
};

export default App;
