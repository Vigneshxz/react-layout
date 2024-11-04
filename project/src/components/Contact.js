import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState(''); // 'success' or 'error'

  const contactStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL}/images/contact.jpeg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: '#0a0742',
    display: 'flex',
    flexDirection: 'column',
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Clear previous messages
    setFormMessage('');
    setFormStatus('');

    const formData = new FormData(event.target);

    try {
      // Make the request to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setFormMessage('Thank you for your message. I will get back to you shortly!');
          setFormStatus('success');
          event.target.reset();
        } else {
          throw new Error(result.message || 'Error sending message.');
        }
      } else {
        throw new Error('Failed to send the message.');
      }
    } catch (error) {
      setFormMessage('There was an error submitting the form. Please try again.');
      setFormStatus('error');
    }
  };

  return (
    <div style={contactStyle}>
      <section className="content">
        <h1>Contact Me</h1>
        <p>If you have any questions or feedback, feel free to get in touch!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="3977a03d-7be8-4436-82e4-2b9a4a48398b" />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {formMessage && (
          <p className={`form-message ${formStatus === 'success' ? 'success' : 'error'}`}>
            {formMessage}
          </p>
        )}
      </section>
    </div>
  );
};

export default Contact;
