import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Features />
            <FAQ />
            
            <Footer />
        </div>
    );
}

export default App;
