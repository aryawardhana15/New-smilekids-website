import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  { href: 'https://instagram.com', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://facebook.com', icon: FaFacebookF, label: 'Facebook' },
  { href: 'https://wa.me/6281234567890', icon: FaWhatsapp, label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white mt-16">
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
            <h3 className="text-2xl font-bold mb-2 text-white">Smile Kids</h3>
            <p className="text-sm text-gray-200 max-w-xs">
              Tempat bermain dan belajar anak dengan suasana ceria, aman, dan penuh kasih sayang.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-white">Link Cepat</h3>
            <ul className="space-y-3">
              <li><Link href="/layanan" className="hover:text-brand-secondary transition-colors duration-300">Layanan</Link></li>
              <li><Link href="/harga" className="hover:text-brand-secondary transition-colors duration-300">Harga</Link></li>
              <li><Link href="/tentang-kami" className="hover:text-brand-secondary transition-colors duration-300">Tentang Kami</Link></li>
              <li><Link href="/kontak" className="hover:text-brand-secondary transition-colors duration-300">Kontak</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-bold text-xl mb-4 text-white">Hubungi Kami</h3>
            <address className="not-italic text-sm text-gray-200 space-y-3">
              <p>Jl. Ceria No. 123, Jakarta</p>
              <p>+62 812 3456 7890</p>
            </address>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-white hover:text-brand-secondary transition-colors duration-300"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Smile Kids. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 