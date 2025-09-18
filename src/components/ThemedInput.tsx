import React, { useState } from 'react';
import ValidationMessage from './ValidationMessage';

interface ThemedInputProps {
  id: string;
  name: string;
  type: 'text' | 'email' | 'password';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  label: string;
  customError?: string;
  hasError?: boolean;
}

export default function ThemedInput({
  id,
  name,
  type,
  value,
  onChange,
  required = false,
  placeholder,
  label,
  customError,
  hasError = false
}: ThemedInputProps) {
  const [touched, setTouched] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const handleBlur = () => {
    setTouched(true);
    if (required && !value.trim()) {
      setShowValidation(true);
    } else if (type === 'email' && value.trim() && !/\S+@\S+\.\S+/.test(value)) {
      setShowValidation(true);
    } else {
      setShowValidation(false);
    }
  };

  const handleFocus = () => {
    setShowValidation(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    if (touched && e.target.value.trim()) {
      if (type === 'email' && !/\S+@\S+\.\S+/.test(e.target.value)) {
        setShowValidation(true);
      } else {
        setShowValidation(false);
      }
    }
  };

  const getValidationMessage = () => {
    if (customError) return customError;
    if (required && !value.trim()) return `Please fill out the ${label.toLowerCase()} field`;
    if (type === 'email' && value.trim() && !/\S+@\S+\.\S+/.test(value)) return `Please use correct email format`;
    return '';
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <label htmlFor={id} style={{ display: 'block', marginBottom: 6, fontWeight: 600 }}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onInvalid={(e) => e.preventDefault()} // Prevent default validation bubble
        className={hasError ? 'error-input' : ''}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '0.75em',
          borderRadius: 8,
          border: '1px solid #e0e0e0',
          fontSize: '1em',
          fontFamily: 'DM Sans, Segoe UI, Arial, sans-serif',
          transition: 'all 0.3s ease'
        }}
      />
      {(customError || (showValidation && getValidationMessage())) && (
        <ValidationMessage 
          message={customError || getValidationMessage()} 
          type={customError ? "error" : "info"} 
        />
      )}
    </div>
  );
}