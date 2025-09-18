

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedRedirect from '../components/AnimatedRedirect';
import AuthLogo from '../components/AuthLogo';
import ValidationMessage from '../components/ValidationMessage';
import ThemedInput from '../components/ThemedInput';
import '../App.css';

export default function SignUp() {
  const [animating, setAnimating] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = { name: '', email: '', password: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
    }
    
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.password;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    setSuccessMessage('');
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage(' Account created successfully! Welcome to Neutrawise - let\'s build a greener future together!');
      // Redirect to sign-in page after showing success message
      setTimeout(() => {
        navigate('/signin');
      }, 3000);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSigninClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setAnimating(true);
    setTimeout(() => {
      navigate('/signin');
    }, 1200);
  };

  if (animating) return <AnimatedRedirect to="/signin" />;

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
          Sign Up
        </h2>
        <p style={{ color: '#666', marginBottom: 24, textAlign: 'center', fontSize: 15 }}>Create your account to get started.</p>
        <form onSubmit={handleSubmit} noValidate>
          <ThemedInput
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Enter your full name"
            label="Name"
            customError={errors.name}
            hasError={!!errors.name}
          />
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
            placeholder="Create a strong password"
            label="Password"
            customError={errors.password}
            hasError={!!errors.password}
          />
          {isLoading && (
            <ValidationMessage message="Creating your account..." type="loading" />
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
            {isLoading ? 'Creating Account...' : successMessage ? 'Redirecting...' : 'Sign Up'}
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <span style={{ color: '#666' }}>Already have an account? </span>
          <a href="#" onClick={handleSigninClick} style={{ color: 'var(--brand-blue)', fontWeight: 600, textDecoration: 'none' }}>Sign In</a>
        </div>
      </div>
    </div>
  );
}
