import './App.css';import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';


function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <></>
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

       <Footer />
      </div>
    </>
  )

}

export default App;

