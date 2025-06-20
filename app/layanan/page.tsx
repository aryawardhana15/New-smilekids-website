'use client';

import PageHeader from '@/components/PageHeader';
import ServiceCard from '@/components/ServiceCard';
import { motion } from 'framer-motion';
import { GiCastle, GiPersonInBed, GiMusicalNotes, GiOpenBook } from "react-icons/gi";

const services = [
  {
    icon: <GiCastle />,
    title: "Pendidikan Anak Usia Dini (PAUD)",
    description: "Program pendidikan yang dirancang untuk merangsang perkembangan kognitif, sosial, dan emosional anak melalui permainan dan kurikulum yang menyenangkan.",
  },
  {
    icon: <GiPersonInBed />,
    title: "Penitipan Anak (Daycare)",
    description: "Layanan penitipan anak harian di lingkungan yang aman, nyaman, dan penuh perhatian, memungkinkan orang tua bekerja dengan tenang.",
  },
  {
    icon: <GiMusicalNotes />,
    title: "Kelas Ekstrakurikuler",
    description: "Berbagai pilihan kelas tambahan seperti musik, seni, dan olahraga untuk menggali dan mengembangkan bakat unik setiap anak.",
  },
  {
    icon: <GiOpenBook />,
    title: "Konsultasi Parenting",
    description: "Sesi konsultasi dengan para ahli kami untuk membantu orang tua dalam memahami dan mendukung tahap perkembangan anak.",
  },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

export default function LayananPage() {
  return (
    <main>
      <PageHeader 
        title="Layanan Kami" 
        subtitle="Kami menyediakan berbagai program untuk mendukung tumbuh kembang anak Anda secara optimal."
      />
      <motion.section 
        className="py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
} 