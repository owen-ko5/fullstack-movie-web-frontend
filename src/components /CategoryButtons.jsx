import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/Login';
import Register from '.components/Register';
import Dashboard from '.components/Dashboard';
import Home from '.components/Home';
import MovieDetail from '.components/MovieDetail';

import Navbar from './components/MovieDetail';

const App = ()=> {
    const token = localStorage.getitem('token');

    return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route
      path="/dashboard"
      element={token ? <Dashboard /> : <Navigate to="/login" />}
    />
    <Route path="/home" element={<Home />} />
    <Route path="/movies/:id" element={<MovieDetail />} />
  </Routes>
</Router>
  );
};

export default App;
