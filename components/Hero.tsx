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
    <section className="relative overflow-hidden bg-brand-background py-20 md:py-32">
      <div className="container relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-black text-brand-primary mb-4">
              Tempat Ceria untuk Tumbuh & Belajar
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-brand-text-secondary mb-8 max-w-md mx-auto md:mx-0">
              Di Smile Kids, kami menciptakan lingkungan yang aman, menyenangkan, dan penuh inspirasi bagi putra-putri Anda.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/kontak" className="btn-primary inline-block">
                Daftar Sekarang
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="relative w-full h-64 md:h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Note to user: Please replace this with a real image */}
            <Image
              src="/images/hero-bg.jpg"
              alt="Anak-anak bermain ceria di Smile Kids"
              layout="fill"
              objectFit="cover"
              className="rounded-extra-large shadow-soft-lg"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-brand-secondary/50 rounded-full filter blur-xl opacity-50 -translate-x-10 -translate-y-10"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-accent/40 rounded-full filter blur-xl opacity-50 translate-x-10 translate-y-10"></div>
    </section>
  );
} 