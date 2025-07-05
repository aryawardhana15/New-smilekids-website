'use client';

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChild, FaGraduationCap, FaHeart, FaLaugh, FaUsers, FaStar } from 'react-icons/fa';
import { BsStars, BsBalloon } from 'react-icons/bs';

const galleryImages = [
    { src: '/images/kegiatan1.jpg', alt: 'Kegiatan Ceria di Smile Kids 1' },
    { src: '/images/kegiatan2.jpg', alt: 'Kegiatan Ceria di Smile Kids 2' },
    { src: '/images/kegiatan3.jpg', alt: 'Kegiatan Ceria di Smile Kids 3' },
    { src: '/images/kegiatan4.jpg', alt: 'Kegiatan Ceria di Smile Kids 4' },
    { src: '/images/kegiatan5.jpg', alt: 'Kegiatan Ceria di Smile Kids 5' },
    { src: '/images/kegiatan7.jpg', alt: 'Kegiatan Ceria di Smile Kids 6' },
];

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const galleryVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
    hover: { scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }
};

const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5
        }
    })
};

export default function TentangKamiPage() {
    const features = [
        {
            icon: <FaChild className="text-4xl" />,
            title: "Pendidikan Holistik",
            description: "Mengembangkan semua aspek tumbuh kembang anak secara seimbang"
        },
        {
            icon: <FaHeart className="text-4xl" />,
            title: "Pengasuhan Penuh Kasih",
            description: "Staf pengajar yang penuh perhatian dan penyayang"
        },
        {
            icon: <FaLaugh className="text-4xl" />,
            title: "Belajar Sambil Bermain",
            description: "Metode pembelajaran menyenangkan yang disukai anak-anak"
        },
        {
            icon: <FaGraduationCap className="text-4xl" />,
            title: "Kurikulum Berkualitas",
            description: "Program pendidikan terbaik untuk persiapan sekolah"
        },
        {
            icon: <FaUsers className="text-4xl" />,
            title: "Komunitas Orang Tua",
            description: "Dukungan dan kolaborasi dengan orang tua/wali"
        },
        {
            icon: <FaStar className="text-4xl" />,
            title: "Fasilitas Lengkap",
            description: "Lingkungan belajar yang aman dan nyaman"
        }
    ];

    return (
        <main className="bg-gradient-to-b from-blue-50 to-pink-50">
            {/* Floating decorations */}
            <div className="fixed top-20 left-10 opacity-20">
                <BsBalloon className="text-pink-300 text-6xl animate-float" />
            </div>
            <div className="fixed bottom-40 right-20 opacity-20">
                <FaStar className="text-yellow-300 text-7xl animate-spin-slow" />
            </div>

            <PageHeader 
                title="Tentang Smile Kids"
                subtitle="Mengenal lebih dekat visi, misi, dan lingkungan penuh ceria di Smile Kids."
            />

            {/* About Section */}
            <section className="py-16 md:py-24 bg-yellow-50">
                <div className="container">
                    <motion.div 
                        className="grid md:grid-cols-2 gap-12 items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={sectionVariants}
                    >
                        <div className="relative h-80 w-full rounded-extra-large overflow-hidden shadow-soft-lg border-2 border-yellow-100">
                            <Image src="/images/team.jpg" alt="Tim Pengajar Smile Kids" layout="fill" objectFit="cover" />
                        </div>
                        <div className="bg-white/90 rounded-2xl p-8 shadow-md border-2 border-yellow-100">
                            <h2 className="text-3xl font-bold text-yellow-600 mb-4">Visi & Misi Kami</h2>
                            <p className="text-yellow-800 mb-4">
                                <strong>Visi:</strong> Menjadi mitra terpercaya orang tua dalam meletakkan pondasi terbaik untuk masa depan anak yang cerdas, kreatif, dan berakhlak mulia.
                            </p>
                            <p className="text-yellow-800">
                                <strong>Misi:</strong> Kami berkomitmen untuk menyediakan lingkungan belajar yang aman, merangsang, dan penuh kasih, dengan program pendidikan inovatif yang berpusat pada anak dan didukung oleh para pengajar profesional yang berdedikasi.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
                <div className="container mx-auto px-4 text-center">
                    <motion.h2 
                        className="text-4xl font-bold text-gray-800 mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Keunggulan Smile Kids
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={featureVariants}
                                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-white hover:border-pink-200 transition-all"
                                whileHover={{ y: -10 }}
                            >
                                <div className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-4 rounded-full inline-flex mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-pink-50 to-yellow-50">
                <div className="container text-center">
                    <motion.h2 
                        className="mb-12 text-yellow-600"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={sectionVariants}
                    >Galeri Ceria Kami</motion.h2>
                    <motion.div 
                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
                        variants={galleryVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {galleryImages.map((image, index) => (
                            <motion.div key={index} className="relative aspect-square overflow-hidden rounded-large shadow-soft group border-2 border-yellow-100" variants={imageVariants}>
                                <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" className="transform group-hover:scale-110 transition-transform duration-500 ease-in-out"/>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-pink-400 to-purple-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Yuk Kenalan Lebih Dekat!</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Jadwalkan kunjungan ke Smile Kids dan lihat langsung bagaimana kami menciptakan lingkungan belajar yang menyenangkan untuk anak Anda.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <motion.a
                                href="/kontak"
                                className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-bold text-lg shadow-md hover:shadow-lg transition-all"
                                whileHover={{ y: -3 }}
                            >
                                Hubungi Kami
                            </motion.a>
                            <motion.a
                                href="/pendaftaran"
                                className="bg-yellow-400 text-gray-800 hover:bg-yellow-300 px-8 py-3 rounded-full font-bold text-lg shadow-md hover:shadow-lg transition-all"
                                whileHover={{ y: -3 }}
                            >
                                Daftar Sekarang
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Add some global styles for animations */}
            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-spin-slow {
                    animation: spin 10s linear infinite;
                }
            `}</style>
        </main>
    );
}