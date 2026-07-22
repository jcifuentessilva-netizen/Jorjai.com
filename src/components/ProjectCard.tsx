"use client";

import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  services: string[];
  imageUrl?: string;
  projectLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  services,
  imageUrl = 'https://via.placeholder.com/400x250?text=Project+Image',
  projectLink,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden hover:scale-105 transition-all duration-500">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {services.map((service, index) => (
            <span key={index} className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
              {service}
            </span>
          ))}
        </div>
        {projectLink && (
          <Link href={projectLink} className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            Ver Proyecto
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;