import React from 'react';

const LoginPage = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;