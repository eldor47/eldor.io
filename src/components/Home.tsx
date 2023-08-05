import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-4">About Me</h1>
        <p className="text-gray-600 mb-6">
          Hi there! I'm <span className="text-blue-600">[Your Name]</span>, a passionate [Your Occupation] based in [Your Location]. I love [Your Interests/Hobbies] and enjoy [Your Activities].
        </p>
        <p className="text-gray-600">
          Feel free to reach out to me at <a href="mailto:[Your Email]" className="text-blue-600 hover:underline">[Your Email]</a> for any inquiries or just to say hello!
        </p>
      </div>
    </div>
  );
};

export default Home;