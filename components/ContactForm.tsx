'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Gagal mengirim pesan.');
      }

      console.log('Form data submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      // Reset status after a few seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Submit error:', error);
      setStatus('error');
    }
  };

  return (
    <motion.div 
        className="card w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-brand-primary">Kirim Pesan kepada Kami</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-brand-text-secondary mb-2 font-bold">Nama</label>
          <input
            id="name"
            type="text"
            className="w-full p-3 rounded-large border border-gray-300 focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none transition-all"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            placeholder="Nama Lengkap Anda"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-brand-text-secondary mb-2 font-bold">Email</label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded-large border border-gray-300 focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none transition-all"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            placeholder="email@anda.com"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-brand-text-secondary mb-2 font-bold">Pesan</label>
          <textarea
            id="message"
            className="w-full p-3 rounded-large border border-gray-300 focus:ring-2 focus:ring-brand-secondary focus:border-transparent outline-none transition-all"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
        {status === 'success' && <p className="text-green-600 mt-4 text-center">Pesan Anda telah berhasil terkirim! Kami akan segera menghubungi Anda.</p>}
        {status === 'error' && <p className="text-red-600 mt-4 text-center">Maaf, terjadi kesalahan. Silakan coba lagi.</p>}
      </form>
    </motion.div>
  );
} 