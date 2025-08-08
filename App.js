import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [formStatus, setFormStatus] = useState('');

  const handleFormSubmit = async (formData) => {
    try {
      // Using Formspree for contact form (no backend required)
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Message sent successfully!');
      } else {
        setFormStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setFormStatus('Error sending message. Please try again.');
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact onSubmit={handleFormSubmit} formStatus={formStatus} />
      </main>
      <Footer />
    </div>
  );
}

export default App; 