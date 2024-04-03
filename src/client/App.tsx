import React from 'react';
import './index.css';
import { io } from "socket.io-client";

const socket = io("http://localhost:8080/");

const App: React.FC = () => {
  return (
    <div className='bg-gray-100'>
      <h1 className='text-2xl'>Hello, Vite + React + Typescript</h1>
    </div>
  )
}

export default App;