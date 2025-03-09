import React, { useState } from 'react';
import './NewsletterSignup.scss';

export const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="newsletter-signup">
      <h3>Stay Connected</h3>
      <p>Sign up for updates on new works, exhibitions, and events.</p>
      
      <form onSubmit={handleSubmit} className="newsletter-form">
        <div className="input-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === 'submitting'}
          />
          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className={status === 'submitting' ? 'loading' : ''}
          >
            {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        
        {status === 'success' && (
          <div className="message success">
            Thank you for subscribing!
          </div>
        )}
        
        {status === 'error' && (
          <div className="message error">
            There was an error. Please try again.
          </div>
        )}
      </form>
    </div>
  );
};

export default NewsletterSignup;
