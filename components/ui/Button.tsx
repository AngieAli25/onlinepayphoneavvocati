'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  href, 
  className = '', 
  disabled = false 
}: ButtonProps) {
  const baseClasses = 'font-inter font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 interactive';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary/50 shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary/50 shadow-lg hover:shadow-xl',
    accent: 'bg-accent text-white hover:bg-accent/90 focus:ring-accent/50 shadow-lg hover:shadow-xl transform hover:scale-105',
    gradient: 'bg-logo-gradient hover:bg-logo-gradient-hover text-white focus:ring-primary/50 shadow-lg hover:shadow-xl transform hover:scale-105',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="block"
    >
      {children}
    </motion.span>
  );
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {buttonContent}
      </a>
    );
  }
  
  return (
    <button 
      onClick={onClick} 
      className={classes}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
}