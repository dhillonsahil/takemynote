import './App.css';
import NotesState from "./context/notes/NotesState"
import React from 'react'
import Navbar from './components/Navbar';
import Home from "./components/Home"
import About from "./components/About"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <NotesState>
        <Router>
          <Navbar />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
          </Routes>
          </div>
        </Router>
      </NotesState>
    </>
  );
}

export default App;
