"use client";
import React from 'react';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: { label: string; included: boolean }[];
  highlight?: boolean;
  actionText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  price,
  description,
  features,
  highlight = false,
  actionText,
}) => {
  const handleAction = () => {
    const msg = encodeURIComponent(`Hola Jordan, me interesa el plan "${title}" (${price}).`);
    window.open(`https://wa.me/56930973700?text=${msg}`, '_blank');
  };

  return (
    <div className={`bg-lacquer-raised rounded-lg border p-6 flex flex-col ${highlight ? 'border-kinpaku' : 'border-gold-hairline'}`}>
      <h3 className="text-2xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-4xl font-extrabold mb-4 text-center text-kinpaku">{price}</p>
      <p className="text-text-muted text-center mb-6 flex-grow">{description}</p>
      <ul className="text-text-warm mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            {feature.included ? (
              <svg className="w-5 h-5 text-verdigris mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            )}
            {feature.label}
          </li>
        ))}
      </ul>
      <button onClick={handleAction} className="mt-auto bg-kinpaku text-lacquer-deep hover:opacity-90 font-bold py-3 px-6 rounded-lg transition-opacity duration-300">
        {actionText}
      </button>
    </div>
  );
};

export default ServiceCard;
