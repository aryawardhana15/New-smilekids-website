import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTiktok } from 'react-icons/fa';

const socialLinks = [
  { href: 'https://www.instagram.com/kb_smilekids?utm_source=ig_web_button_share_sheet&igsh=MXBhOHdvb2UxZXY2MQ==', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://www.tiktok.com/@kb.smile.kids?_t=ZS-8xPPsyawKaQ&_r=1', icon: FaTiktok, label: 'Tiktok' },
  { href: 'https://wa.me/6281346438704', icon: FaWhatsapp, label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="bg-yellow-100 text-yellow-900 mt-16 border-t border-yellow-200">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* About Section */}
          <div className="flex flex-col items-center md:items-start">
            {/* Using a placeholder for the white logo, as it's not provided */}
            {/* <Image
              src="/images/logo-white.png"
              alt="Smile Kids Logo"
              width={150}
              height={50}
              className="mb-4"
            /> */}
            <h3 className="text-2xl font-bold mb-2 text-yellow-700">Smile Kids</h3>
            <p className="text-sm text-yellow-800 max-w-xs">
              Tempat bermain dan belajar anak dengan suasana ceria, aman, dan penuh kasih sayang.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-blue-500">Link Cepat</h3>
            <ul className="space-y-3">
              <li><Link href="/layanan" className="hover:text-yellow-500 transition-colors duration-300">Layanan</Link></li>
              <li><Link href="/harga" className="hover:text-yellow-500 transition-colors duration-300">Harga</Link></li>
              <li><Link href="/tentang-kami" className="hover:text-yellow-500 transition-colors duration-300">Tentang Kami</Link></li>
              <li><Link href="/kontak" className="hover:text-yellow-500 transition-colors duration-300">Kontak</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-pink-500">Hubungi Kami</h3>
            <address className="not-italic text-sm text-yellow-800 space-y-3">
              <p>Jl. MT Haryono Griya Tumaritis 1 no 16, Balikpapan</p>
              <p>+62 813 4643 8704</p>
            </address>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-yellow-500 hover:text-pink-400 transition-colors duration-300"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-yellow-200 pt-6 text-center text-sm text-yellow-700">
          <p>&copy; {new Date().getFullYear()} Smile Kids. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 