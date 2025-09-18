import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLogo from '../components/AuthLogo';
import ValidationMessage from '../components/ValidationMessage';
import '../App.css';

interface VerificationProps {
  email: string;
  onResendCode: () => void;
}

export default function VerificationCode({ email, onResendCode }: VerificationProps) {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();
    
    // Start resend timer
    const timer = setInterval(() => {
      setResendTimer(prev => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return; // Prevent multiple characters
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setErrorMessage(''); // Clear error when user types

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      // Focus previous input on backspace
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text').slice(0, 6);
    const newCode = [...code];
    
    for (let i = 0; i < pastedText.length && i < 6; i++) {
      if (/\d/.test(pastedText[i])) {
        newCode[i] = pastedText[i];
      }
    }
    setCode(newCode);
    
    // Focus next empty input or last input
    const nextEmptyIndex = newCode.findIndex(digit => !digit);
    const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
    inputRefs.current[focusIndex]?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const verificationCode = code.join('');
    
    if (verificationCode.length !== 6) {
      setErrorMessage('Please enter the complete 6-digit verification code');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage('Email verified successfully! Welcome to Neutrawise!');
      
      // Redirect to sign-in after verification
      setTimeout(() => {
        navigate('/signin');
      }, 2000);
    }, 2000);
  };

  const handleResendCode = () => {
    if (!canResend) return;
    
    setCanResend(false);
    setResendTimer(60);
    onResendCode();
    
    // Restart timer
    const timer = setInterval(() => {
      setResendTimer(prev => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <div className="auth-bg">
        <div className="auth-bg-shape" style={{ width: 300, height: 300, top: 50, left: -80, background: 'linear-gradient(135deg, #82C92C 30%, #4696D2 100%)', opacity: 0.25 }} />
        <div className="auth-bg-shape" style={{ width: 180, height: 180, bottom: 100, right: 40, background: 'linear-gradient(135deg, #4696D2 0%, #82C92C 100%)', opacity: 0.2 }} />
        <div className="auth-bg-shape" style={{ width: 140, height: 140, top: 200, right: 140, background: 'linear-gradient(135deg, #82C92C 0%, #4696D2 100%)', opacity: 0.18 }} />
      </div>
      
      <div style={{ position: 'absolute', top: 40, left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 2 }}>
        <AuthLogo />
      </div>

      <div style={{ maxWidth: 420, width: '100%', background: '#fff', borderRadius: 16, boxShadow: '0 6px 32px rgba(70,150,210,0.13)', padding: '2.5rem 2rem', zIndex: 1, marginTop: 140, position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{
            fontWeight: 700,
            fontSize: '2rem',
            fontFamily: 'DM Sans, Segoe UI, Arial, sans-serif',
            background: 'linear-gradient(90deg, #82C92C 0%, #4696D2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 8,
            letterSpacing: 1,
            lineHeight: 1.4,
          }}>
            Verify Your Email
          </h2>
          <p style={{ color: '#666', fontSize: 15, lineHeight: 1.5, margin: 0 }}>
            We've sent a 6-digit verification code to
          </p>
          <p style={{ color: '#4696D2', fontSize: 15, fontWeight: 600, margin: '4px 0 0 0' }}>
            {email}
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: 12, 
              fontWeight: 600, 
              color: '#333',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 14
            }}>
              Enter Verification Code
            </label>
            <div style={{ 
              display: 'flex', 
              gap: 12, 
              justifyContent: 'center',
              marginBottom: 16
            }}>
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={el => inputRefs.current[index] = el}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]"
                  maxLength={1}
                  value={digit}
                  onChange={e => handleInputChange(index, e.target.value)}
                  onKeyDown={e => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  style={{
                    width: 48,
                    height: 56,
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    border: `2px solid ${digit ? '#82C92C' : '#e1e5e9'}`,
                    borderRadius: 8,
                    outline: 'none',
                    transition: 'all 0.2s ease',
                    fontFamily: 'DM Sans, monospace',
                    background: digit ? 'rgba(130, 201, 44, 0.05)' : '#fff'
                  }}
                  onFocus={e => {
                    e.target.style.borderColor = '#4696D2';
                    e.target.style.boxShadow = '0 0 0 3px rgba(70, 150, 210, 0.1)';
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = digit ? '#82C92C' : '#e1e5e9';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              ))}
            </div>
          </div>

          {errorMessage && (
            <ValidationMessage message={errorMessage} type="error" />
          )}

          {isLoading && (
            <ValidationMessage message="Verifying your code..." type="loading" />
          )}

          {successMessage && (
            <ValidationMessage message={successMessage} type="success" />
          )}

          <button 
            type="submit" 
            className="btn-primary" 
            disabled={isLoading || !!successMessage || code.join('').length !== 6}
            style={{ 
              width: '100%', 
              marginBottom: 20,
              opacity: (isLoading || !!successMessage || code.join('').length !== 6) ? 0.7 : 1,
              cursor: (isLoading || !!successMessage || code.join('').length !== 6) ? 'not-allowed' : 'pointer'
            }}
          >
            {isLoading ? 'Verifying...' : successMessage ? 'Verified!' : 'Verify Email'}
          </button>

          <div style={{ textAlign: 'center' }}>
            <span style={{ color: '#666', fontSize: 14 }}>Didn't receive the code? </span>
            {canResend ? (
              <button
                type="button"
                onClick={handleResendCode}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: '#4696D2', 
                  fontWeight: 600, 
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontSize: 14
                }}
              >
                Resend Code
              </button>
            ) : (
              <span style={{ color: '#999', fontSize: 14 }}>
                Resend in {resendTimer}s
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}