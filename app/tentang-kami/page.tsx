'use client';

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
    { src: '/images/kegiatan1.jpg', alt: 'Kegiatan Ceria di Smile Kids 1' },
    { src: '/images/kegiatan2.jpg', alt: 'Kegiatan Ceria di Smile Kids 2' },
    { src: '/images/kegiatan3.jpg', alt: 'Kegiatan Ceria di Smile Kids 3' },
    { src: '/images/kegiatan4.jpg', alt: 'Kegiatan Ceria di Smile Kids 4' },
    { src: '/images/kegiatan5.jpg', alt: 'Kegiatan Ceria di Smile Kids 5' },
    { src: '/images/kegiatan7.jpg', alt: 'Kegiatan Ceria di Smile Kids 6' },
]

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const galleryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
};

export default function TentangKamiPage() {
  return (
    <main>
      <PageHeader 
        title="Tentang Smile Kids"
        subtitle="Mengenal lebih dekat visi, misi, dan lingkungan penuh ceria di Smile Kids."
      />
      <section className="py-16 md:py-24">
        <div className="container">
            <motion.div 
                className="grid md:grid-cols-2 gap-12 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="relative h-80 w-full rounded-extra-large overflow-hidden shadow-soft-lg">
                    <Image src="/images/team.jpg" alt="Tim Pengajar Smile Kids" layout="fill" objectFit="cover" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-brand-primary mb-4">Visi & Misi Kami</h2>
                    <p className="text-brand-text-secondary mb-4">
                        <strong>Visi:</strong> Menjadi mitra terpercaya orang tua dalam meletakkan pondasi terbaik untuk masa depan anak yang cerdas, kreatif, dan berakhlak mulia.
                    </p>
                    <p className="text-brand-text-secondary">
                        <strong>Misi:</strong> Kami berkomitmen untuk menyediakan lingkungan belajar yang aman, merangsang, dan penuh kasih, dengan program pendidikan inovatif yang berpusat pada anak dan didukung oleh para pengajar profesional yang berdedikasi.
                    </p>
                </div>
            </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-primary/10">
        <div className="container text-center">
            <motion.h2 
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={sectionVariants}
            >Galeri Ceria Kami</motion.h2>
            <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
                variants={galleryVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {galleryImages.map((image, index) => (
                    <motion.div key={index} className="relative aspect-square overflow-hidden rounded-large shadow-soft group" variants={imageVariants}>
                        <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" className="transform group-hover:scale-110 transition-transform duration-500 ease-in-out"/>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>
    </main>
  );
} 