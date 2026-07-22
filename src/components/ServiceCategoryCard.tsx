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
    <div className="bg-gray-800 rounded-lg shadow-xl p-8 text-center flex flex-col justify-between hover:scale-105 transition-transform duration-500">
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-gray-300 mb-6">{description}</p>
      </div>
      <Link href={link} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
        {buttonText}
      </Link>
    </div>
  );
};

export default ServiceCategoryCard;