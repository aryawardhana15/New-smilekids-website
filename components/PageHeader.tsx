'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <motion.section 
      className="bg-yellow-50 py-16 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-600">{title}</h1>
        <p className="mt-4 text-lg text-yellow-800 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </motion.section>
  );
} 