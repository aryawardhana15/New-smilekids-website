'use client'

import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialSlider from '@/components/TestimonialSlider';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaPaintBrush, FaChild } from 'react-icons/fa';
import { GiCastle, GiMusicalNotes, GiPersonInBed } from "react-icons/gi";

const features = [
  {
    icon: <FaChild />,
    title: "Lingkungan Ceria",
    description: "Suasana penuh warna dan mainan edukatif untuk anak.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Pengajar Berpengalaman",
    description: "Guru-guru ramah dan bersertifikasi dalam pendidikan anak.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Program Kreatif",
    description: "Kegiatan seni, musik, dan permainan untuk perkembangan anak.",
  },
];

const services = [
    {
      icon: <GiCastle />,
      title: "PAUD",
      description: "Pendidikan anak usia dini dengan kurikulum menyenangkan.",
    },
    {
      icon: <GiPersonInBed />,
      title: "Penitipan Anak",
      description: "Penitipan harian dengan pengawasan penuh kasih.",
    },
    {
      icon: <GiMusicalNotes />,
      title: "Kelas Ekstrakurikuler",
      description: "Kelas seni, musik, dan olahraga untuk anak.",
    },
  ];

const sectionVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 30,
      staggerChildren: 0.2,
    },
  },
};

const Section = ({ children, className = '' } : { children: React.ReactNode, className?: string }) => (
    <motion.section 
      className={`py-16 md:py-24 ${className}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container">
        {children}
      </div>
    </motion.section>
  );


export default function Home() {
  return (
    <main>
      <Hero />
      
      <Section>
        <motion.h2 variants={sectionVariants} className="text-center mb-12">
          Keunggulan Smile Kids
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ServiceCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-brand-primary/10">
        <motion.h2 variants={sectionVariants} className="text-center mb-12">
          Layanan Kami
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <ServiceCard 
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                />
            ))}
        </div>
      </Section>

      <TestimonialSlider />
      
      <Section className="bg-brand-accent text-center text-white">
        <motion.h2 variants={sectionVariants} className="text-3xl mb-6 !text-white">
          Siap Bergabung dengan Keluarga Smile Kids?
        </motion.h2>
        <motion.p variants={sectionVariants} className="max-w-2xl mx-auto mb-8">
            Kami siap menyambut putra-putri Anda dengan tangan terbuka di lingkungan yang penuh kehangatan. Hubungi kami untuk informasi lebih lanjut!
        </motion.p>
        <motion.div variants={sectionVariants}>
            <WhatsAppButton />
        </motion.div>
      </Section>
    </main>
  );
} 