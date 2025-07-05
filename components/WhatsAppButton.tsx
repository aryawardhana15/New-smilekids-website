import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6281346438704?text=Halo%2C%20saya%20tertarik%20untuk%20mendaftar%20di%20Smile%20Kids."
      className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 btn inline-flex items-center gap-3"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={24} />
      <span>Hubungi via WhatsApp</span>
    </a>
  );
} 