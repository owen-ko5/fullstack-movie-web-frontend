import React, { useState } from 'react';
import axios from 'axios';
import '../style.css';

const Login = () => {
  const [form, setForm] = useState({ identifier: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/login', form);
      localStorage.setItem('token', res.data.access_token);
      localStorage.setItem('username', res.data.username || form.identifier);
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Login failed. Check your credentials.');
    }
  };
  