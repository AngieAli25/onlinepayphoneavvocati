'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerMaxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  background?: 'white' | 'gray' | 'primary' | 'secondary' | 'dark';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

export default function Section({ 
  children, 
  className = '', 
  containerMaxWidth = 'xl',
  background = 'white',
  padding = 'lg',
  id
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    dark: 'bg-dark text-white',
  };
  
  const paddingClasses = {
    sm: 'py-8',
    md: 'py-16',
    lg: 'py-20',
    xl: 'py-24',
  };

  return (
    <motion.section 
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      <Container maxWidth={containerMaxWidth}>
        {children}
      </Container>
    </motion.section>
  );
}