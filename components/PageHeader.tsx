'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <motion.section 
      className="bg-brand-primary/10 py-16 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-primary">{title}</h1>
        <p className="mt-4 text-lg text-brand-text-secondary max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </motion.section>
  );
} 