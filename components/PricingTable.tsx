'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import clsx from "clsx";

const plans = [
    { 
      name: 'PAUD', 
      price: 'Rp 1.500.000',
      period: '/bulan',
      features: ['Kurikulum PAUD 2024', 'Makan Siang Sehat 2x', 'Kegiatan Kreatif & Seni', 'Laporan Perkembangan Bulanan'],
      isFeatured: true,
    },
    { 
      name: 'Penitipan', 
      price: 'Rp 100.000',
      period: '/hari',
      features: ['Pengawasan Penuh oleh Staf Ahli', 'Makan Siang Sehat 1x', 'Akses ke Area Bermain Indoor & Outdoor', 'Jam Tidur Siang Terjadwal'],
      isFeatured: false,
    },
    { 
      name: 'Ekstrakurikuler', 
      price: 'Rp 500.000',
      period: '/bulan',
      features: ['Pilihan Kelas (Seni/Musik/Olahraga)', 'Peralatan Disediakan', 'Instruktur Profesional', 'Pentas Seni di Akhir Semester'],
      isFeatured: false,
    },
  ];

const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    }
};
  

export default function PricingTable() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      {plans.map((plan, index) => (
        <motion.div 
            key={plan.name} 
            className={clsx(
                "card text-center relative overflow-hidden",
                { 'border-4 border-brand-accent transform lg:scale-105': plan.isFeatured, 'shadow-soft': !plan.isFeatured }
            )}
            variants={cardVariants}
        >
          {plan.isFeatured && (
            <div className="absolute top-0 right-0 bg-brand-accent text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                PALING POPULER
            </div>
          )}

          <h3 className="text-2xl font-bold text-brand-primary mb-2 mt-4">{plan.name}</h3>
          <div className="flex justify-center items-baseline my-4">
            <span className="text-4xl font-black text-brand-text-primary">{plan.price}</span>
            <span className="text-brand-text-secondary">{plan.period}</span>
          </div>
          
          <ul className="text-left space-y-4 my-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start">
                <FaCheckCircle className="text-green-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-brand-text-secondary">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <Link href="/kontak" className={clsx("w-full inline-block", plan.isFeatured ? "btn-primary" : "btn-secondary")}>
                Daftar Sekarang
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 