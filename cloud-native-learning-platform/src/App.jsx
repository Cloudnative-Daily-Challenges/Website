import React, { useState } from "react";
import { FaGithub, FaSlack } from "react-icons/fa";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const contributors = [
    { name: "Alice Johnson", role: "Cloud Engineer" },
    { name: "Bob Smith", role: "DevOps Specialist" },
    { name: "Charlie Brown", role: "Kubernetes Expert" },
  ];

  const leaderboard = [
    { name: "David Wilson", score: 150 },
    { name: "Sophia Martinez", score: 140 },
    { name: "Liam Anderson", score: 130 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white font-sans flex flex-col">
      {/* Navbar */}
      <nav className="bg-black bg-opacity-75 text-white p-4 flex justify-between items-center md:px-12 relative">
        <h1 className="text-xl font-bold">Cloud Native Challenges</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#challenges" className="hover:underline">Challenges</a></li>
          <li><a href="#how-to-participate" className="hover:underline">How to Participate</a></li>
          <li><a href="#leaderboard" className="hover:underline">Leaderboard</a></li>
          <li><a href="#contributors" className="hover:underline">Contributors</a></li>
          <li><a href="#community" className="hover:underline">Community</a></li>
        </ul>

        {/* Icons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <a href="https://github.com/Cloudnative-Daily-Challenges" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://join.slack.com/t/leetcodeforcl-oag1351/shared_invite/zt-32h2bqz7r-QTpx6YgKGTHDTJnOqHImIA" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
            <FaSlack />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

        {/* Mobile Menu */}
        <ul className={`absolute md:hidden top-16 left-0 w-full bg-black text-center ${menuOpen ? "block" : "hidden"}`}>
          <li className="py-2"><a href="#challenges" onClick={() => setMenuOpen(false)}>Challenges</a></li>
          <li className="py-2"><a href="#leaderboard" onClick={() => setMenuOpen(false)}>Leaderboard</a></li>
          <li className="py-2"><a href="#how-to-participate" onClick={() => setMenuOpen(false)}>How to Participate</a></li>
          <li className="py-2"><a href="#contributors" onClick={() => setMenuOpen(false)}>Contributors</a></li>
          <li className="py-2"><a href="#community" onClick={() => setMenuOpen(false)}>Community</a></li>
        </ul>
      </nav>

      {/* Header Section */}
      <header className="text-center py-10 px-4">
        <h1 className="text-4xl font-extrabold">🚀 Cloud Native Daily Challenges</h1>
        <p className="text-lg mt-2 max-w-2xl mx-auto">
          No prerequisites, just bring your curiosity! Solve daily cloud-native problems just like LeetCode.
        </p>
      </header>

      <div className="container mx-auto px-6 py-12 md:px-12 flex-grow">
        {/* Today's Challenge Section */}
        <section id="challenges" className="bg-white text-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-blue-700">📌 Today's Challenge</h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Explore Cloud Native & CNCF</h3>
            <p className="text-gray-700">Imagine you're explaining cloud-native tech to a curious time traveler from the 90s. What is this "Cloud Native" thing, and why is everyone so obsessed with it? Oh, and what's this CNCF club—some secret society for developers? Convince your skeptical friend why learning Cloud Native is worth their time!</p>
            <a href="https://github.com/Cloudnative-Daily-Challenges/Daily-challenges/blob/main/Questions/2025-03-29.md" className="text-blue-500 hover:underline">
              View on GitHub
            </a>
          </div>
        </section>

        {/* How to Participate Section */}
        <section id="how-to-participate" className="bg-white text-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-blue-700">🚀 How to Participate</h2>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Read today's challenge above.</li>
            <li>Solve the problem and submit your solution on GitHub.</li>
            <li>If you have any doubts or issues while solving the challenge, please reach out on Slack.</li>
          </ul>
        </section>

        {/* Leaderboard Section */}
        <section id="leaderboard" className="bg-white text-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-blue-700">🏆 Leaderboard</h2>
          <p className="text-gray-700 mt-2">Top contributors solving challenges!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {leaderboard.map((player, index) => (
              <div key={index} className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold text-blue-800">{player.name}</h3>
                <p className="text-gray-600">Score: {player.score}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contributors Section */}
        <section id="contributors" className="bg-white text-gray-900 shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-blue-700">✨ Contributors</h2>
          <p className="text-gray-700 mt-2">Meet the awesome people submitting new problems daily!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {contributors.map((contributor, index) => (
              <div key={index} className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold text-blue-800">{contributor.name}</h3>
                <p className="text-gray-600">{contributor.role}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Join Community Section */}
        <section id="community" className="bg-white text-gray-900 shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-700">💬 Join the Discussion</h2>
          <p className="text-gray-700 mt-2">Have questions or want to discuss? Join our Slack community!</p>
          <a href="https://join.slack.com/t/leetcodeforcl-oag1351/shared_invite/zt-32h2bqz7r-QTpx6YgKGTHDTJnOqHImIA"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800 transition">
            Join Slack 🚀
          </a>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4 mt-6">
        <p className="text-sm px-4">
          This initiative is taken by <span className="font-bold">Achanandhi</span> to bring cloud-native enthusiasts together and solve challenges daily.
        </p>
      </footer>
    </div>
  );
};

export default App;
