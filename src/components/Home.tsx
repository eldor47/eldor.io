import React from 'react';
import ThreeScene from '../components/ThreeScene';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="fixed bottom-0 left-0 flex items-center justify-center min-h-screen bg-gray-100">
      <ThreeScene />
      </div>
      <div className="h-[calc(100vh+500px)]"></div>
    </>
  );
};

export default Home;
