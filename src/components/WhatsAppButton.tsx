"use client";
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = "56930973700";
  const message = "Hola Jordan, vi sus servicios y me gustaría contactarlos";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-kinpaku animate-pulse-ring" />
      <span className="relative flex items-center justify-center w-14 h-14 bg-kinpaku hover:opacity-90 text-lacquer-deep rounded-full transition-all duration-300 hover:scale-110">
        <FaWhatsapp size={28} />
      </span>
    </a>
  );
};

export default WhatsAppButton;
