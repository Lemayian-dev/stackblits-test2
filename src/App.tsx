import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyList from './components/PropertyList';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <PropertyList />
      <ConsultationForm />
      <Footer />
    </div>
  );
}

export default App;