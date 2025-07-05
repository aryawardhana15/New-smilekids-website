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
    <section className="py-16 bg-yellow-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-yellow-600 mb-10 text-center">Testimoni Orang Tua</h2>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-200 text-yellow-700 rounded-full p-3 shadow hover:bg-yellow-300 transition-colors z-10"
            onClick={() => setActiveIndex([activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1, 'prev'])}
            aria-label="Sebelumnya"
          >
            &#8592;
          </button>
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              style={{ x: `calc(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  className="min-w-full px-4 md:px-8"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white/90 border-2 border-yellow-100 rounded-2xl shadow-md p-8 flex flex-col items-center">
                    <p className="text-lg text-yellow-800 mb-6 text-center">"{testimonial.text}"</p>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-yellow-700">{testimonial.name}</span>
                      <span className="text-yellow-500">{testimonial.role}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-200 text-yellow-700 rounded-full p-3 shadow hover:bg-yellow-300 transition-colors z-10"
            onClick={() => setActiveIndex([activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1, 'next'])}
            aria-label="Berikutnya"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
} 