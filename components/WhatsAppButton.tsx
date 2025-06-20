import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20untuk%20mendaftar%20di%20Smile%20Kids."
      className="btn-primary inline-flex items-center gap-3"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={24} />
      <span>Hubungi via WhatsApp</span>
    </a>
  );
} 