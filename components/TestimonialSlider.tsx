'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Image from 'next/image';

const testimonials = [
  { 
    name: 'Ibu Ani', 
    text: 'Anak saya sangat senang di Smile Kids, guru-gurunya sangat perhatian dan sabar! Lingkungannya juga sangat bersih dan aman.',
    avatar: '/images/avatar1.png' // Placeholder
  },
  { 
    name: 'Bapak Budi', 
    text: 'Fasilitasnya luar biasa dan program kreatifnya benar-benar membantu anak saya lebih percaya diri dan mudah bergaul.',
    avatar: '/images/avatar2.png' // Placeholder
  },
  { 
    name: 'Ibu Cita', 
    text: 'Saya sangat merekomendasikan Smile Kids. Perkembangan anak saya pesat, baik dari segi akademis maupun sosial.',
    avatar: '/images/avatar3.png' // Placeholder
  },
];

const sliderVariants = {
    incoming: (direction: 'next' | 'prev') => ({
      x: direction === 'next' ? '100%' : '-100%',
      opacity: 0
    }),
    active: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' }
    },
    outgoing: (direction: 'next' | 'prev') => ({
      x: direction === 'next' ? '-100%' : '100%',
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut' }
    })
  };

export default function TestimonialSlider() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 'next']);

  const nextTestimonial = () => {
    setActiveIndex(([prevIndex]) => 
        prevIndex === testimonials.length - 1 ? [0, 'next'] : [prevIndex + 1, 'next']
    );
  };
  
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 7000);
    return () => clearInterval(interval);
  }, []);

  const { name, text, avatar } = testimonials[activeIndex];

  return (
    <section className="py-16 md:py-24 bg-brand-background">
      <div className="container">
        <h2 className="text-center mb-12">Apa Kata Orang Tua?</h2>
        <div className="card max-w-3xl mx-auto text-center !rounded-extra-large overflow-hidden">
            <div className="relative h-48 w-full">
                 <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={activeIndex}
                        custom={direction}
                        variants={sliderVariants}
                        initial="incoming"
                        animate="active"
                        exit="outgoing"
                        className="absolute w-full h-full p-8 flex flex-col items-center justify-center"
                    >
                        <FaQuoteLeft className="absolute top-4 left-4 text-brand-accent/30 text-3xl" />
                        <p className="text-lg italic text-brand-text-secondary mb-4">
                            "{text}"
                        </p>
                        <div className="flex items-center mt-4">
                            <Image src={avatar} alt={name} width={48} height={48} className="rounded-full mr-4" />
                            <p className="font-bold text-brand-primary">{name}</p>
                        </div>
                        <FaQuoteRight className="absolute bottom-4 right-4 text-brand-accent/30 text-3xl" />
                    </motion.div>
                 </AnimatePresence>
            </div>
            <div className="flex justify-center pb-4">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex([index, index > activeIndex ? 'next' : 'prev'])}
                        className={`w-3 h-3 rounded-full mx-1 transition-colors ${activeIndex === index ? 'bg-brand-accent' : 'bg-gray-300 hover:bg-gray-400'}`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
} 