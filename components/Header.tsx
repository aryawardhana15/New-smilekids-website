'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/layanan', label: 'Program Kami' },
  { href: '/harga', label: 'Harga' },
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/kontak', label: 'Kontak' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-brand-white/80 backdrop-blur-md shadow-soft">
      <div className="container py-4 flex justify-between items-center">
        <Link href="/" className="z-50">
          <Image
            src="/images/logo.jpg"
            alt="Smile Kids Logo"
            width={120}
            height={40}
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "font-bold transition-colors duration-300 relative",
                pathname === link.href ? "text-brand-primary" : "text-brand-text-secondary hover:text-brand-primary"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-brand-accent rounded-full"
                  layoutId="underline"
                  initial={false}
                />
              )}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link href="/kontak" className="btn-primary">
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <HiX size={28} className="text-brand-primary" /> : <HiMenu size={28} className="text-brand-primary" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute top-0 left-0 w-full h-screen bg-brand-background pt-24 px-8 md:hidden"
            >
              <nav className="flex flex-col items-center space-y-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={toggleMenu}
                    className={clsx(
                      "text-2xl font-bold transition-colors duration-300",
                      pathname === link.href ? "text-brand-primary" : "text-brand-text-secondary hover:text-brand-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/kontak" className="btn-primary mt-8" onClick={toggleMenu}>
                  Hubungi Kami
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
} 