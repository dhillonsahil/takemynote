import './App.css';
import NotesState from "./context/notes/NotesState"
import React from 'react'
import Navbar from './components/Navbar';
import Home from "./components/Home"
import About from "./components/About"
import Alert from "./components/Alert"
import Login from './components/Login';
import Signup from './components/Signup';
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
          <Alert message={"This is a alert"}/>
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
          </Routes>
          </div>
        </Router>
      </NotesState>
    </>
  );
}

export default App;
