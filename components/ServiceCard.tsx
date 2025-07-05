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
    <div className="card group relative transition-transform duration-300 hover:scale-105 hover:rotate-1 cursor-pointer overflow-visible bg-yellow-50 border-2 border-yellow-100">
      <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl select-none pointer-events-none">
        🎉
      </div>
      <div className="text-4xl mb-4 flex justify-center text-yellow-400">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-yellow-700 flex items-center gap-1">
        <span role="img" aria-label="star">⭐</span> {title}
      </h3>
      <p className="text-yellow-800 text-center">{description}</p>
    </div>
  );
} 