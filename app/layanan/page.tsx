'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import ServiceCard from '@/components/ServiceCard';
import { GiCastle, GiPersonInBed, GiMusicalNotes, GiOpenBook } from "react-icons/gi";

const KB = [
  {
    icon: <GiCastle />,
    title: "Baby Class (3-12 Bulan)",
    description: "Program Kelompok Bermain untuk bayi usia 3 hingga 12 bulan, dirancang untuk merangsang perkembangan sensorik dan motorik melalui aktivitas yang aman dan menyenangkan.",
  },
  {
    icon: <GiOpenBook />,
    title: "Toddler (1-3 Tahun)",
    description: "Program untuk anak usia 1 hingga 3 tahun, fokus pada pengembangan keterampilan dasar, sosial, dan bahasa melalui permainan kreatif dan interaktif.",
  },
  {
    icon: <GiMusicalNotes />,
    title: "Kelas A (4-5 Tahun)",
    description: "Program untuk anak usia 4 hingga 5 tahun, mempersiapkan kesiapan sekolah melalui kurikulum yang mendukung perkembangan kognitif, sosial, dan emosional.",
  },
  {
    icon: <GiPersonInBed />,
    title: "Kelas B (5-6 Tahun)",
    description: "Program untuk anak usia 5 hingga 6 tahun, menekankan pada keterampilan prasekolah seperti membaca, menulis, dan berhitung dalam lingkungan yang mendukung.",
  },
];

const daycare = [
    {
    icon: <GiPersonInBed />,
    title: "Daycare (3 Bulan-7 Tahun)",
    description: "Layanan penitipan anak untuk usia 3 bulan hingga 7 tahun, menyediakan lingkungan yang aman, nyaman, dan penuh perhatian untuk mendukung orang tua yang bekerja.",
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
        title="Program Kami" 
        subtitle="Kami menyediakan program Kelompok Bermain dan penitipan anak untuk mendukung tumbuh kembang anak Anda secara optimal."
      />
      <motion.section 
        className="py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <h2 className="text-4xl font-semibold text-center mb-8">Kelas Kelompok Bermain</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {KB.map((KB, index) => (
              <ServiceCard
                key={index}
                icon={KB.icon}
                title={KB.title}
                description={KB.description}
              />
            ))}
          </div>
        </div>
      </motion.section>
   
      <motion.section 
        className="py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <h2 className="text-4xl font-semibold text-center mb-8">Daycare</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 my-auto ">
            {daycare.map((daycare, index) => (
              <ServiceCard
                key={index}
                icon={daycare.icon}
                title={daycare.title}
                description={daycare.description}
              />
            ))}
          </div>
        </div>
      </motion.section>
      
    </main>
  );
}