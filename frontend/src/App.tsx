import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Subscribe from './pages/Subscribe';
import SolverPage from './pages/SolverPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/subscribe' element={<Subscribe />}/>
            <Route path='/solver' element={<SolverPage />}/>
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
