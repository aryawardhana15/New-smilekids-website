'use client';

import PageHeader from "@/components/PageHeader";
// import PricingTable from "@/components/PricingTable";
import { motion } from 'framer-motion';
import { FaWhatsapp, FaRegFileAlt, FaBaby, FaChild, FaBookOpen, FaMoneyBillWave, FaIdCard, FaPhotoVideo } from 'react-icons/fa';

export default function HargaPage() {
  return (
    <main>
      <PageHeader
        title="Biaya & Pendaftaran"
        subtitle="Informasi lengkap mengenai biaya layanan dan persyaratan pendaftaran di Smile Kids."
      />
      <motion.section
        className="py-16 md:py-24 bg-gray-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">

          {/* Pricing Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">

            {/* Preschool Pricing */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <FaChild className="text-4xl text-blue-500 mr-4" />
                <h3 className="text-3xl font-bold text-gray-800">Biaya Preschool</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex justify-between items-center"><span><FaMoneyBillWave className="inline mr-2" /> Pendaftaran</span> <span className="font-bold text-lg">Rp 100.000</span></li>
                <li className="flex justify-between items-center"><span><FaBookOpen className="inline mr-2" /> Uang Gedung</span> <span className="font-bold text-lg">Rp 500.000</span></li>
                <li className="flex justify-between items-center"><span>👕 Baju Seragam</span> <span className="font-bold text-lg">Rp 700.000</span></li>
                <li className="flex justify-between items-center"><span>📚 Alat dan Buku</span> <span className="font-bold text-lg">Rp 200.000</span></li>
                <li className="flex justify-between items-center"><span>📅 SPP Bulanan</span> <span className="font-bold text-lg">Rp 150.000</span></li>
                <li className="flex justify-between items-center"><span>🚌 Outing Class</span> <span className="font-bold text-lg">Rp 500.000</span></li>
              </ul>
            </div>

            {/* Daycare Pricing */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <FaBaby className="text-4xl text-pink-500 mr-4" />
                <h3 className="text-3xl font-bold text-gray-800">Biaya Daycare</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex justify-between items-center"><span><FaMoneyBillWave className="inline mr-2" /> Pendaftaran</span> <span className="font-bold text-lg">Rp 100.000</span></li>
                <li className="flex justify-between items-center"><span><FaBookOpen className="inline mr-2" /> Uang Gedung</span> <span className="font-bold text-lg">Rp 1.000.000</span></li>
                <li className="pt-4"><strong className="text-gray-700">Biaya Bulanan:</strong></li>
                <li className="flex justify-between items-center pl-4"><span>Usia &lt; 1 tahun</span> <span className="font-bold text-lg">Rp 950.000</span></li>
                <li className="flex justify-between items-center pl-4"><span>Usia 12-24 bulan</span> <span className="font-bold text-lg">Rp 900.000</span></li>
                <li className="flex justify-between items-center pl-4"><span>Usia &gt; 24 bulan</span> <span className="font-bold text-lg">Rp 850.000</span></li>
                <li className="pt-4"><strong className="text-gray-700">Opsi Lain:</strong></li>
                <li className="flex justify-between items-center pl-4"><span>Biaya Mingguan (5 hari)</span> <span className="font-bold text-lg">Rp 450.000</span></li>
                <li className="flex justify-between items-center pl-4"><span>Biaya Harian</span> <span className="font-bold text-lg">Rp 75.000</span></li>
                <li className="text-center text-sm mt-2">Sabtu/Ahad sesuai kesepakatan.</li>
              </ul>
            </div>
          </div>

          {/* Registration Requirements Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Syarat Pendaftaran</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-600">
              <ul className="space-y-4">
                <li><FaRegFileAlt className="inline mr-3 text-green-500" />FC Akta Kelahiran (2 lbr)</li>
                <li><FaIdCard className="inline mr-3 text-green-500" />FC Kartu Keluarga (2 lbr)</li>
              </ul>
              <ul className="space-y-4">
                <li><FaIdCard className="inline mr-3 text-green-500" />FC KTP Wali Murid</li>
                <li><FaPhotoVideo className="inline mr-3 text-green-500" />Pas Foto Anak (2 lbr)</li>
              </ul>
            </div>
            <div className="text-center mt-8">
              <p className="mb-4">Isi formulir pendaftaran online melalui link berikut:</p>
              <a href="https://forms.gle/CWHqbx2wjBwpQUXA7" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block mb-6">
                Buka Formulir Pendaftaran
              </a>
              <p className="text-lg">Untuk informasi lebih lanjut, hubungi kami:</p>
              <a href="https://wa.me/6281346438704" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-green-600 hover:text-green-700 inline-flex items-center">
                <FaWhatsapp className="mr-3" /> +62 813-4643-8704
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
} 