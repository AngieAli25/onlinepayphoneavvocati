'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({ children, className = '', hover = true, padding = 'md' }: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.2 }}
      className={`
        bg-white rounded-xl shadow-lg border border-gray-100
        ${hover ? 'hover:shadow-xl' : ''} 
        ${paddingClasses[padding]} 
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}