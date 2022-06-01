import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouteProps,
} from 'react-router-dom';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
