

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedRedirect from '../components/AnimatedRedirect';
import AuthLogo from '../components/AuthLogo';
import ValidationMessage from '../components/ValidationMessage';
import ThemedInput from '../components/ThemedInput';
import '../App.css';

export default function SignIn() {
  const [animating, setAnimating] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = { email: '' };
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return !newErrors.email;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || !formData.password) return;
    
    setIsLoading(true);
    setSuccessMessage('');
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage('🌱 Welcome back to your sustainable journey! Ready to make a positive impact?');
      // Just show success message, no redirect
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (name === 'email' && errors.email) {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const handleSignupClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setAnimating(true);
    setTimeout(() => {
      navigate('/signup');
    }, 1200);
  };

  if (animating) return <AnimatedRedirect to="/signup" />;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <div className="auth-bg">
        <div className="auth-bg-shape" style={{ width: 280, height: 280, top: 30, left: -70, background: 'linear-gradient(120deg, #82C92C 60%, #4696D2 100%)', opacity: 0.3 }} />
        <div className="auth-bg-shape" style={{ width: 160, height: 160, bottom: 80, right: 60, background: 'linear-gradient(120deg, #4696D2 0%, #82C92C 100%)', opacity: 0.25 }} />
        <div className="auth-bg-shape" style={{ width: 120, height: 120, top: 180, right: 120, background: 'linear-gradient(120deg, #82C92C 0%, #4696D2 100%)', opacity: 0.22 }} />
      </div>
      <div style={{ position: 'absolute', top: 40, left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 2 }}>
        <AuthLogo />
      </div>
      <div style={{ maxWidth: 380, width: '100%', background: '#fff', borderRadius: 16, boxShadow: '0 6px 32px rgba(70,150,210,0.13)', padding: '2rem 1.8rem', zIndex: 1, marginTop: 140, position: 'relative' }}>
        <h2 style={{
          fontWeight: 700,
          fontSize: '2rem',
          fontFamily: 'DM Sans, Segoe UI, Arial, sans-serif',
          background: 'linear-gradient(90deg, #82C92C 0%, #4696D2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          marginBottom: 6,
          textAlign: 'center',
          letterSpacing: 1,
          lineHeight: 1.4,
        }}>
          Sign In
        </h2>
        <p style={{ color: '#666', marginBottom: 24, textAlign: 'center', fontSize: 15 }}>Welcome back! Please sign in to your account.</p>
        <form onSubmit={handleSubmit} noValidate>
          <ThemedInput
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"
            label="Email"
            customError={errors.email}
            hasError={!!errors.email}
          />
          <ThemedInput
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            placeholder="Enter your password"
            label="Password"
          />
          {isLoading && (
            <ValidationMessage message="Signing you in..." type="loading" />
          )}
          {successMessage && (
            <ValidationMessage message={successMessage} type="success" />
          )}
          <button 
            type="submit" 
            className="btn-primary" 
            disabled={isLoading || !!successMessage}
            style={{ 
              width: '100%', 
              marginBottom: 16,
              opacity: (isLoading || !!successMessage) ? 0.7 : 1,
              cursor: (isLoading || !!successMessage) ? 'not-allowed' : 'pointer'
            }}
          >
            {isLoading ? 'Signing In...' : successMessage ? 'Sign In Successful!' : 'Sign In'}
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <span style={{ color: '#666' }}>Don't have an account? </span>
          <a href="#" onClick={handleSignupClick} style={{ color: 'var(--brand-blue)', fontWeight: 600, textDecoration: 'none' }}>Sign Up</a>
        </div>
      </div>
    </div>
  );
}
