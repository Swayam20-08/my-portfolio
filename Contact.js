import React, { useState } from 'react';

const Contact = ({ onSubmit, formStatus }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact" tabIndex="0">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        
        <button type="submit">Send</button>
        {formStatus && (
          <p id="form-status" aria-live="polite">{formStatus}</p>
        )}
      </form>
    </section>
  );
};

export default Contact; 