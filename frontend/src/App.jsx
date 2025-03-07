
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const getGreeting = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/greet?name=${name}`);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || "An error occurred.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Greeting App</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
      />
      <button
        onClick={getGreeting}
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
      >
        Get Greeting
      </button>
      {message && (
        <h2 className="mt-6 text-2xl font-semibold text-gray-700">{message}</h2>
      )}
    </div>
  );
}

export default App;