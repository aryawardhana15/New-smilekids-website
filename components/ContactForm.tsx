'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xeoklyop', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Gagal mengirim pesan');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setStatus('error');
    }
  };

  return (
    <motion.div 
        className="card w-full bg-white/90 border-2 border-yellow-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-yellow-600">Kirim Pesan kepada Kami</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-yellow-800 mb-2 font-bold">Nama</label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full p-3 rounded-large border border-yellow-200 focus:ring-2 focus:ring-yellow-300 focus:border-transparent outline-none transition-all"
            required
            placeholder="Nama Lengkap Anda"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-yellow-800 mb-2 font-bold">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full p-3 rounded-large border border-yellow-200 focus:ring-2 focus:ring-yellow-300 focus:border-transparent outline-none transition-all"
            required
            placeholder="email@anda.com"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-yellow-800 mb-2 font-bold">Pesan</label>
          <textarea
            id="message"
            name="message"
            className="w-full p-3 rounded-large border border-yellow-200 focus:ring-2 focus:ring-yellow-300 focus:border-transparent outline-none transition-all"
            rows={5}
            required
            placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="btn-primary w-full"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Mengirim...' : 'Kirim Pesan'}
        </button>
        {status === 'success' && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-large">
            <p className="text-green-700 text-center font-medium">
              ✅ Pesan Anda telah berhasil terkirim! Kami akan segera menghubungi Anda.
            </p>
          </div>
        )}
        {status === 'error' && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-large">
            <p className="text-green-700 text-center font-medium">
             ✅ Pesan Anda telah berhasil terkirim! Kami akan segera menghubungi Anda.
            </p>
          </div>
        )}
      </form>
    </motion.div>
  );
} 