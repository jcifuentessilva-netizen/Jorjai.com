"use client";

import React from 'react';
import Link from 'next/link';

interface ServiceCategoryCardProps {
  title: string;
  description: string;
  link: string;
  buttonText: string;
}

const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({
  title,
  description,
  link,
  buttonText,
}) => {
  return (
    <div className="bg-lacquer-raised rounded-lg border border-gold-hairline p-8 text-center flex flex-col justify-between transition duration-300">
      <div>
        <h2 className="text-3xl font-bold text-champagne mb-4 font-display">{title}</h2>
        <p className="text-lg text-text-warm mb-6">{description}</p>
      </div>
      <Link href={link} className="inline-block bg-kinpaku text-lacquer-deep hover:opacity-90 font-bold py-3 px-8 rounded-lg transition-opacity duration-300">
        {buttonText}
      </Link>
    </div>
  );
};

export default ServiceCategoryCard;
