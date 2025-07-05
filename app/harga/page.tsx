'use client';

import PageHeader from "@/components/PageHeader";
import { motion } from 'framer-motion';
import { FaWhatsapp, FaRegFileAlt, FaBaby, FaChild, FaBookOpen, FaMoneyBillWave, FaIdCard, FaPhotoVideo, FaStar, FaCloud } from 'react-icons/fa';
import { BsStars, BsBalloon } from 'react-icons/bs';
import { useState } from 'react';

export default function HargaPage() {
  const [activeTab, setActiveTab] = useState('preschool');
  
  return (
    <main className="bg-gradient-to-b from-blue-50 to-pink-50">
      {/* Floating decorations */}
      <div className="fixed top-20 left-10 opacity-20">
        <FaCloud className="text-blue-300 text-6xl animate-float" />
      </div>
      <div className="fixed bottom-40 right-20 opacity-20">
        <BsBalloon className="text-pink-300 text-7xl animate-float-delay" />
      </div>
      
      <PageHeader 
        title="Harga"
        subtitle="Informasi biaya dan syarat pendaftaran di Smile Kids."
      />
      
      <motion.section 
        className="py-16 md:py-24 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          {/* Tab navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1 shadow-lg flex">
              <button
                onClick={() => setActiveTab('preschool')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'preschool' ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-md' : 'text-gray-600'}`}
              >
                Preschool
              </button>
              <button
                onClick={() => setActiveTab('daycare')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'daycare' ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-md' : 'text-gray-600'}`}
              >
                Daycare
              </button>
            </div>
          </div>

          {/* Preschool Pricing */}
          {activeTab === 'preschool' && (
            <motion.div 
              className="bg-white/90 p-8 rounded-lg shadow-lg border-2 border-yellow-100 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <FaChild className="text-4xl text-yellow-400 mr-4" />
                <h3 className="text-3xl font-bold text-yellow-700">Biaya Preschool</h3>
              </div>
              <ul className="space-y-4 text-yellow-800">
                <li className="flex justify-between items-center"><span><FaMoneyBillWave className="inline mr-2 text-yellow-400" /> Pendaftaran</span> <span className="font-bold text-lg">Rp 100.000</span></li>
                <li className="flex justify-between items-center"><span><FaBookOpen className="inline mr-2 text-yellow-400" /> Uang Gedung</span> <span className="font-bold text-lg">Rp 500.000</span></li>
                <li className="flex justify-between items-center"><span>👕 Baju Seragam</span> <span className="font-bold text-lg">Rp 700.000</span></li>
                <li className="flex justify-between items-center"><span>📚 Alat dan Buku</span> <span className="font-bold text-lg">Rp 200.000</span></li>
                <li className="flex justify-between items-center"><span>📅 SPP Bulanan</span> <span className="font-bold text-lg">Rp 150.000</span></li>
                <li className="flex justify-between items-center"><span>🚌 Outing Class</span> <span className="font-bold text-lg">Rp 500.000</span></li>
              </ul>
            </motion.div>
          )}

          {/* Daycare Pricing */}
          {activeTab === 'daycare' && (
            <motion.div 
              className="bg-blue-50 p-8 rounded-lg shadow-lg border-2 border-blue-100 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <FaBaby className="text-4xl text-blue-400 mr-4" />
                <h3 className="text-3xl font-bold text-blue-700">Biaya Daycare</h3>
              </div>
              <ul className="space-y-4 text-blue-800">
                <li className="flex justify-between items-center"><span><FaMoneyBillWave className="inline mr-2 text-blue-400" /> Pendaftaran</span> <span className="font-bold text-lg">Rp 100.000</span></li>
                <li className="flex justify-between items-center"><span><FaBookOpen className="inline mr-2 text-blue-400" /> Uang Gedung</span> <span className="font-bold text-lg">Rp 1.000.000</span></li>
                <li className="pt-4"><strong className="text-blue-700">Biaya Bulanan:</strong></li>
                <li className="flex justify-between items-center pl-4"><span>Usia &lt; 1 tahun</span> <span className="font-bold text-lg">Rp 950.000</span></li>
                <li className="flex justify-between items-center pl-4"><span>Usia 12-24 bulan</span> <span className="font-bold text-lg">Rp 900.000</span></li>
                <li className="flex justify-between items-center pl-4"><span>Usia &gt; 24 bulan</span> <span className="font-bold text-lg">Rp 850.000</span></li>
                <li className="pt-4"><strong className="text-blue-700">Opsi Lain:</strong></li>
                <li className="flex justify-between items-center pl-4"><span>Biaya Mingguan (5 hari)</span> <span className="font-bold text-lg">Rp 450.000</span></li>
                <li className="flex justify-between items-center pl-4"><span>Biaya Harian</span> <span className="font-bold text-lg">Rp 75.000</span></li>
                <li className="text-center text-sm mt-2">Sabtu/Ahad sesuai kesepakatan.</li>
              </ul>
            </motion.div>
          )}

          {/* Registration Requirements Section */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8 flex justify-center items-center">
              <BsStars className="text-yellow-400 mr-3 animate-spin-slow" />
              Syarat Pendaftaran
              <BsStars className="text-yellow-400 ml-3 animate-spin-slow" />
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg text-purple-700 mb-4">📝 Dokumen Wajib</h4>
                <ul className="space-y-4 text-gray-700">
                  <RequirementItem 
                    icon={<FaRegFileAlt className="text-blue-500" />}
                    text="FC Akta Kelahiran (2 lbr)"
                  />
                  <RequirementItem 
                    icon={<FaIdCard className="text-blue-500" />}
                    text="FC Kartu Keluarga (2 lbr)"
                  />
                  <RequirementItem 
                    icon={<FaIdCard className="text-blue-500" />}
                    text="FC KTP Wali Murid"
                  />
                  <RequirementItem 
                    icon={<FaPhotoVideo className="text-blue-500" />}
                    text="Pas Foto Anak (2 lbr)"
                  />
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-yellow-50 p-6 rounded-xl">
                <h4 className="font-bold text-lg text-pink-700 mb-4">ℹ️ Proses Pendaftaran</h4>
                <ol className="space-y-4 text-gray-700 list-decimal pl-5">
                  <li>Isi formulir pendaftaran online</li>
                  <li>Upload dokumen persyaratan</li>
                  <li>Konfirmasi via WhatsApp</li>
                  <li>Pembayaran biaya pendaftaran</li>
                  <li>Pengambilan seragam & perlengkapan</li>
                </ol>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <motion.a 
                href="https://forms.gle/CWHqbx2wjBwpQUXA7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-block mb-8 px-8 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📝 Buka Formulir Pendaftaran
              </motion.a>
              
              <div className=" p-6 rounded-xl inline-block">
                <p className="text-lg mb-4">Untuk informasi lebih lanjut, hubungi kami:</p>
                <motion.a 
                  href="https://wa.me/6281346438704" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-green-600 hover:text-green-700 inline-flex items-center bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
                  whileHover={{ y: -2 }}
                >
                  <FaWhatsapp className="mr-3 text-3xl" /> +62 813-4643-8704
                </motion.a>
              </div>
            </div>
          </motion.div>
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

function PriceItem({ icon, emoji, name, price, color, iconColor, small = false }) {
  return (
    <motion.div 
      className={`flex justify-between items-center p-4 rounded-lg ${color} border border-white`}
      whileHover={{ y: -3, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="flex items-center">
        {icon && (
          <div className={`p-2 rounded-full ${iconColor} bg-white mr-3`}>
            {icon}
          </div>
        )}
        {emoji && (
          <span className="text-2xl mr-3">{emoji}</span>
        )}
        <span className={small ? "text-gray-700" : "text-gray-700 font-medium"}>{name}</span>
      </div>
      <span className={`font-bold ${small ? "text-lg" : "text-xl"} text-gray-800`}>{price}</span>
    </motion.div>
  );
}

function RequirementItem({ icon, text }) {
  return (
    <motion.li 
      className="flex items-center"
      whileHover={{ x: 5 }}
    >
      <span className="mr-3 text-xl">{icon}</span>
      {text}
    </motion.li>
  );
}