'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import ServiceCard from '@/components/ServiceCard';
import { GiCastle, GiPersonInBed, GiMusicalNotes, GiOpenBook } from "react-icons/gi";
import { FaCloud, FaStar, FaBaby, FaChild } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';
import { useState } from 'react';

const KB = [
  {
    icon: <GiCastle className="text-4xl" />,
    title: "Baby Class (3-12 Bulan)",
    description: "Program Kelompok Bermain untuk bayi usia 3 hingga 12 bulan, dirancang untuk merangsang perkembangan sensorik dan motorik melalui aktivitas yang aman dan menyenangkan.",
    color: "bg-pink-100",
    iconColor: "text-pink-500",
    emoji: "👶"
  },
  {
    icon: <GiOpenBook className="text-4xl" />,
    title: "Toddler (1-3 Tahun)",
    description: "Program untuk anak usia 1 hingga 3 tahun, fokus pada pengembangan keterampilan dasar, sosial, dan bahasa melalui permainan kreatif dan interaktif.",
    color: "bg-blue-100",
    iconColor: "text-blue-500",
    emoji: "🧸"
  },
  {
    icon: <GiMusicalNotes className="text-4xl" />,
    title: "Kelas A (4-5 Tahun)",
    description: "Program untuk anak usia 4 hingga 5 tahun, mempersiapkan kesiapan sekolah melalui kurikulum yang mendukung perkembangan kognitif, sosial, dan emosional.",
    color: "bg-purple-100",
    iconColor: "text-purple-500",
    emoji: "🎨"
  },
  {
    icon: <GiPersonInBed className="text-4xl" />,
    title: "Kelas B (5-6 Tahun)",
    description: "Program untuk anak usia 5 hingga 6 tahun, menekankan pada keterampilan prasekolah seperti membaca, menulis, dan berhitung dalam lingkungan yang mendukung.",
    color: "bg-green-100",
    iconColor: "text-green-500",
    emoji: "📚"
  },
];

const daycare = [
  {
    icon: <FaChild className="text-4xl" />,
    title: "Daycare (3 Bulan-7 Tahun)",
    description: "Layanan penitipan anak untuk usia 3 bulan hingga 7 tahun, menyediakan lingkungan yang aman, nyaman, dan penuh perhatian untuk mendukung orang tua yang bekerja.",
    color: "bg-yellow-100",
    iconColor: "text-yellow-500",
    emoji: "🌟"
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

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300
    }
  }
};

const emojiVariants = {
  hover: {
    rotate: [0, 10, -10, 0],
    scale: [1, 1.2, 1.2, 1],
    transition: {
      duration: 0.5
    }
  }
};

export default function LayananPage() {
  const [activeTab, setActiveTab] = useState('playgroup');
  
  return (
    <main className="bg-gradient-to-b from-yellow-50 via-white to-yellow-100 min-h-screen">
      <PageHeader 
        title="Program Kami" 
        subtitle="Kami menyediakan program Kelompok Bermain dan penitipan anak untuk mendukung tumbuh kembang anak Anda secara optimal."
      />
      
      {/* Floating decorations */}
      <div className="fixed top-20 left-10 opacity-30">
        <FaCloud className="text-blue-100 text-6xl animate-float" />
      </div>
      <div className="fixed bottom-40 right-20 opacity-30">
        <FaStar className="text-yellow-300 text-7xl animate-float-delay" />
      </div>
      <div className="fixed top-1/2 right-10 opacity-20">
        <FaStar className="text-pink-200 text-5xl animate-float" />
      </div>
      
      {/* Tab navigation */}
      <div className="flex justify-center mt-8 mb-12">
        <div className="bg-yellow-100 rounded-full p-1 shadow-lg flex">
          <button
            onClick={() => setActiveTab('playgroup')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'playgroup' ? 'bg-yellow-400 text-yellow-900 shadow-md' : 'text-yellow-700'}`}
          >
            Kelompok Bermain
          </button>
          <button
            onClick={() => setActiveTab('daycare')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'daycare' ? 'bg-blue-100 text-blue-900 shadow-md' : 'text-blue-700'}`}
          >
            Daycare
          </button>
        </div>
      </div>
      
      {/* Playgroup section */}
      {activeTab === 'playgroup' && (
        <motion.section 
          className="py-12 md:py-16 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center justify-center bg-yellow-200 rounded-full p-3 mb-4">
                <FaStar className="text-yellow-500 text-2xl" />
              </div>
              <h2 className="text-4xl font-bold text-yellow-600 mb-3 drop-shadow">Kelas Kelompok Bermain</h2>
              <p className="text-lg text-yellow-700 max-w-2xl mx-auto">
                Bermain sambil belajar dengan metode yang menyenangkan dan edukatif!
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {KB.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="relative"
                >
                  <div className={`rounded-2xl p-6 h-full flex flex-col shadow-md hover:shadow-lg transition-shadow border-2
                    ${index % 4 === 0 ? 'bg-yellow-100 border-yellow-200' : ''}
                    ${index % 4 === 1 ? 'bg-blue-50 border-blue-100' : ''}
                    ${index % 4 === 2 ? 'bg-pink-50 border-pink-100' : ''}
                    ${index % 4 === 3 ? 'bg-white border-yellow-100' : ''}
                  `}>
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-lg shadow-sm
                        ${index % 4 === 0 ? 'bg-yellow-200 text-yellow-700' : ''}
                        ${index % 4 === 1 ? 'bg-blue-100 text-blue-700' : ''}
                        ${index % 4 === 2 ? 'bg-pink-100 text-pink-700' : ''}
                        ${index % 4 === 3 ? 'bg-yellow-50 text-yellow-600' : ''}
                      `}>
                        {service.icon}
                      </div>
                      <motion.span 
                        className="text-3xl"
                        variants={emojiVariants}
                      >
                        {service.emoji}
                      </motion.span>
                    </div>
                    <h3 className={`text-xl font-bold mb-2
                      ${index % 4 === 0 ? 'text-yellow-700' : ''}
                      ${index % 4 === 1 ? 'text-blue-700' : ''}
                      ${index % 4 === 2 ? 'text-pink-700' : ''}
                      ${index % 4 === 3 ? 'text-yellow-600' : ''}
                    `}>{service.title}</h3>
                    <p className={`mb-4 flex-grow
                      ${index % 4 === 0 ? 'text-yellow-800' : ''}
                      ${index % 4 === 1 ? 'text-blue-800' : ''}
                      ${index % 4 === 2 ? 'text-pink-800' : ''}
                      ${index % 4 === 3 ? 'text-yellow-700' : ''}
                    `}>{service.description}</p>
                    <button className={`mt-auto rounded-lg text-sm font-bold transition-colors self-start shadow px-4 py-2
                      ${index % 4 === 0 ? 'bg-yellow-300 text-yellow-900 hover:bg-yellow-400' : ''}
                      ${index % 4 === 1 ? 'bg-blue-100 text-blue-900 hover:bg-blue-200' : ''}
                      ${index % 4 === 2 ? 'bg-pink-100 text-pink-900 hover:bg-pink-200' : ''}
                      ${index % 4 === 3 ? 'bg-yellow-100 text-yellow-900 hover:bg-yellow-200' : ''}
                    `}>
                      Info Detail
                    </button>
                  </div>
                  <div className="absolute -top-3 -right-3">
                    <BsStars className="text-yellow-400 animate-spin-slow" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}
      
      {/* Daycare section */}
      {activeTab === 'daycare' && (
        <motion.section 
          className="py-12 md:py-16 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center justify-center bg-yellow-100 rounded-full p-3 mb-4">
                <FaBaby className="text-yellow-500 text-2xl" />
              </div>
              <h2 className="text-4xl font-bold text-yellow-600 mb-3 drop-shadow">Layanan Daycare</h2>
              <p className="text-lg text-yellow-700 max-w-2xl mx-auto">
                Tempat yang aman dan nyaman untuk si kecil saat Anda beraktivitas
              </p>
            </motion.div>
            
            <div className="max-w-2xl mx-auto">
              {daycare.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="relative"
                >
                  <div className={`rounded-2xl p-8 flex flex-col shadow-md hover:shadow-lg transition-shadow border-2 bg-yellow-50 border-yellow-100`}>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-4 rounded-lg bg-yellow-100 text-yellow-700 shadow-sm">
                        {service.icon}
                      </div>
                      <motion.span 
                        className="text-4xl"
                        variants={emojiVariants}
                      >
                        {service.emoji}
                      </motion.span>
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-700 mb-3">{service.title}</h3>
                    <p className="text-yellow-800 mb-6 text-lg">{service.description}</p>
                    <div className="flex gap-4">
                      <button className="bg-yellow-400 text-yellow-900 hover:bg-yellow-500 px-6 py-3 rounded-lg font-bold transition-colors shadow-md">
                        Daftar Sekarang
                      </button>
                      <button className="bg-white text-yellow-800 hover:bg-yellow-100 px-6 py-3 rounded-lg font-bold transition-colors">
                        Tanya-tanya Dulu
                      </button>
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-3">
                    <BsStars className="text-yellow-400 animate-spin-slow" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}
      
      {/* Testimonial/CTA section */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-yellow-100 via-white to-yellow-50 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-yellow-700 mb-6">Yuk Daftarkan Si Kecil Sekarang!</h3>
          <p className="text-xl text-yellow-800 mb-8 max-w-3xl mx-auto">
            Temukan program yang tepat untuk mendukung tumbuh kembang anak Anda dengan cara yang menyenangkan.
          </p>
          <button className="bg-yellow-400 text-yellow-900 hover:bg-yellow-500 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Hubungi Kami 💛
          </button>
        </div>
      </motion.section>
      
      {/* Add some global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite 2s;
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}