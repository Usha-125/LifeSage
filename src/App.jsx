import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-600">🧘‍♀️ LifeSage</h1>
        <nav>
          <ul className="flex gap-4">
            <li><a href="/" className="hover:text-teal-500">Home</a></li>
            <li><a href="/dashboard" className="hover:text-teal-500">Dashboard</a></li>
            <li><a href="/login" className="hover:text-teal-500">Login</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center py-20 px-6">
        <h2 className="text-4xl font-extrabold mb-4 text-center">
          Your Holistic Wellness Companion
        </h2>
        <p className="text-lg text-gray-600 max-w-xl text-center mb-6">
          Empowering you through personalized fitness, mental health support, Indian classical music therapy, and real-time posture correction.
        </p>
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full transition">
          Get Started
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-6 text-center text-sm text-gray-500 mt-auto">
        © {new Date().getFullYear()} LifeSage • Built with ❤️ for holistic well-being
      </footer>
    </div>
  );
}

export default App;