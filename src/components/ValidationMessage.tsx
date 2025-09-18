import React from 'react';

interface ValidationMessageProps {
  message: string;
  type: 'error' | 'success' | 'loading' | 'info';
  className?: string;
}

export default function ValidationMessage({ message, type, className }: ValidationMessageProps) {
  const getIcon = () => {
    switch (type) {
      case 'error':
        return '●'; // Simple bullet point - always reliable
      case 'success':
        return '✓'; // Check mark for success
      case 'loading':
        return '↻'; // Simple rotation symbol
      case 'info':
        return '●'; // Bullet for info
      default:
        return '●';
    }
  };

  return (
    <div className={`validation-message ${type} ${className || ''}`}>
      <span className="validation-icon">{getIcon()}</span>
      <span className="validation-text">{message}</span>
    </div>
  );
}