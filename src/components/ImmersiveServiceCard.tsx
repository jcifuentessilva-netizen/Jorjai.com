"use client";
import React from 'react';

interface ImmersiveServiceCardProps {
  title: string;
  price: string;
  description: string;
}

const ImmersiveServiceCard: React.FC<ImmersiveServiceCardProps> = ({
  title,
  price,
  description,
}) => {
  const handleConsult = () => {
    const msg = encodeURIComponent(`Hola Jordan, me interesa "${title}" (${price}).`);
    window.open(`https://wa.me/56930973700?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-lacquer-raised rounded-lg border border-gold-hairline p-6 flex flex-col justify-between transition duration-300">
      <div>
        <h3 className="text-2xl font-bold text-champagne mb-2">{title}</h3>
        <p className="text-text-warm mb-4">{description}</p>
      </div>
      <div>
        <p className="text-3xl font-extrabold text-kinpaku mt-4">{price}</p>
        <button onClick={handleConsult} className="mt-6 w-full bg-kinpaku text-lacquer-deep hover:opacity-90 font-bold py-3 px-6 rounded-lg transition-opacity duration-300">
          Consultar sobre este servicio
        </button>
      </div>
    </div>
  );
};

export default ImmersiveServiceCard;
