'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-yellow-50 via-white to-yellow-100 py-20 md:py-32">
      <div className="container relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-black text-yellow-600 mb-4 flex items-center justify-center md:justify-start gap-2">
              <span role="img" aria-label="sparkles">✨</span>
              Tempat Ceria untuk Tumbuh & Belajar
              <span role="img" aria-label="balloon">🎈</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-yellow-800 mb-8 max-w-md mx-auto md:mx-0">
              Di Smile Kids, kami menciptakan lingkungan yang aman, menyenangkan, dan penuh inspirasi bagi putra-putri Anda.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/kontak" className="btn-primary inline-block animate-bounce hover:scale-110 transition-transform duration-300">
                Daftar Sekarang
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="relative w-full h-80 md:h-96 rounded-extra-large shadow-soft-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Note to user: Please replace this with a real image */}
            <Image
              src="/images/hero-bg.jpg"
              alt="Anak-anak bermain ceria di Smile Kids"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </motion.div>
        </motion.div>
      </div>
      {/* Decorative Shapes */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-200/60 rounded-full filter blur-md animate-pulse z-0" style={{animationDuration: '4s'}}></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-200/40 rounded-full filter blur-lg animate-spin-slow z-0" style={{animationDuration: '12s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-10 h-10 bg-blue-100/80 rounded-full shadow-lg animate-bounce-slow z-0 flex items-center justify-center text-2xl" style={{animationDuration: '6s'}}>340</div>
      <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-yellow-100/80 rounded-full shadow-lg animate-bounce-slow z-0 flex items-center justify-center text-xl" style={{animationDuration: '7s'}}>31f</div>
    </section>
  );
} 