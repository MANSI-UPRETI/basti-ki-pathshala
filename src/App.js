import React, { createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import VolunteerForm from './components/VolunteerForm';
import Footer from './components/Footer';

// Theme Context
export const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

function App() {
  return (
    <ThemeContext.Provider value={{ isDarkMode: false, toggleTheme: () => {} }}>
      <div className="App light-theme">
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/volunteer" element={<VolunteerForm />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
