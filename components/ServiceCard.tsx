import Image from 'next/image';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      }
    }
  };
  

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      className="card flex flex-col items-center text-center"
      variants={cardVariants}
    >
      <div className="p-4 bg-brand-secondary/20 rounded-full mb-4">
        <span className="text-4xl text-brand-secondary">{icon}</span>
      </div>
      <h3 className="font-bold text-brand-primary mb-2">{title}</h3>
      <p className="text-brand-text-secondary">{description}</p>
    </motion.div>
  );
} 