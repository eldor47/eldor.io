import React, { useState } from 'react';

const Home: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="font-semibold text-xl text-gray-800">About Me</span>
            </div>
            <div className="flex items-center">
              <button
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={toggleChat}
              >
                Open Chat
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-md mx-auto p-8 mt-8 bg-white rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-4">About Me</h1>
        <p className="text-gray-600 mb-6">
          Hi there! I'm <span className="text-blue-600">[Your Name]</span>, a passionate [Your Occupation] based in [Your Location]. I love [Your Interests/Hobbies] and enjoy [Your Activities].
        </p>
        <p className="text-gray-600">
          Feel free to reach out to me at <a href="mailto:[Your Email]" className="text-blue-600 hover:underline">[Your Email]</a> for any inquiries or just to say hello!
        </p>
      </div>

      {/* Chat Bar */}
      {isChatOpen && (
        <div className="fixed bottom-0 right-4 p-4 bg-white rounded-tl-lg shadow-md w-64">
          {/* Your chat content goes here */}
          <p className="text-gray-600">Chat with me!</p>
        </div>
      )}
    </div>
  );
};

export default Home;
