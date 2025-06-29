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
      <section className="py-16 md:py-24">
        <div className="container">
            <motion.div 
                className="grid md:grid-cols-2 gap-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div variants={itemVariants}>
                    <h2 className="text-3xl font-bold text-brand-primary mb-6">Informasi Kontak</h2>
                    <div className="space-y-6 mb-8">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="flex items-center text-lg">
                                <span className="text-brand-accent text-2xl mr-4">{info.icon}</span>
                                <span className="text-brand-text-secondary">{info.text}</span>
                            </div>
                        ))}
                    </div>
                    <WhatsAppButton />
                    <div className="mt-8 rounded-extra-large overflow-hidden shadow-soft">
                        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9071157752824!2d116.8673329735002!3d-1.2245521355586975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1471af2ba9053%3A0x56906e6f07302d4f!2sPAUD%20Smile%20Kids!5e0!3m2!1sen!2sid!4v1750568472906!5m2!1sen!2sid" 
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <ContactForm />
                </motion.div>
            </motion.div>
        </div>
      </section>
    </main>
  );
} 