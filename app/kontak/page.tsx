'use client';

import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "Jl. MT Haryono Griya Tumaritis 1 No 16 Balikpapan" },
    { icon: <FaClock />, text: "Senin - Jumat, 07:00 - 17:00" },
    { icon: <FaPhoneAlt />, text: "+62 813 4643 8704" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function KontakPage() {
  return (
    <main>
      <PageHeader 
        title="Hubungi Kami"
        subtitle="Kami senang mendengar dari Anda! Silakan hubungi kami melalui informasi di bawah atau kirimkan pesan melalui formulir."
      />
      <section className="py-16 md:py-24 bg-yellow-50">
        <div className="container">
            <motion.div 
                className="grid md:grid-cols-2 gap-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div variants={itemVariants} className="bg-white/90 rounded-2xl p-8 shadow-md border-2 border-yellow-100">
                    <h2 className="text-3xl font-bold text-yellow-600 mb-6">Informasi Kontak</h2>
                    <div className="space-y-6 mb-8">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="flex items-center text-lg text-yellow-800">
                                <span className="text-yellow-400 text-2xl mr-4">{info.icon}</span>
                                <span>{info.text}</span>
                            </div>
                        ))}
                    </div>
                    <WhatsAppButton />
                </motion.div>
                <motion.div variants={itemVariants} className="bg-blue-50 rounded-2xl p-8 shadow-md border-2 border-blue-100">
                    <ContactForm />
                </motion.div>
            </motion.div>
        </div>
      </section>
    </main>
  );
} 