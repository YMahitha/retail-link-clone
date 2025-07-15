import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 shadow-md rounded w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Retail Link Login</h1>
        <input type="text" placeholder="Username" className="mb-4 w-full border p-2 rounded" required />
        <input type="password" placeholder="Password" className="mb-4 w-full border p-2 rounded" required />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
