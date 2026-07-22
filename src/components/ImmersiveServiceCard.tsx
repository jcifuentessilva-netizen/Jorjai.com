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
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col justify-between transform transition duration-500 hover:scale-105">
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
      </div>
      <div>
        <p className="text-3xl font-extrabold text-blue-400 mt-4">{price}</p>
        <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          Consultar sobre este servicio
        </button>
      </div>
    </div>
  );
};

export default ImmersiveServiceCard;
