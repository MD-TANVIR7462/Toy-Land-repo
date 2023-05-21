
import React from 'react';
import SingleFetured from './SingleFetured';

const FeaturedSection = () => {
  const featuredToys = [
    {
      id: 1,
      name: 'Super ButterFly',
      image: 'https://i.ibb.co/fdHm8Bp/71-VQii2-LJHL-SL1500.jpg',
      description: 'This awesome butterfly toy can transform into a car and a spaceship. Perfect for imaginative play!',
      price: 29.99,
    },
    {
      id: 2,
      name: 'Adventure Embarkt',
      image: 'https://i.ibb.co/VDzzyDS/images-1.jpg',
      description: 'Embark on thrilling adventures with this playset that includes action figures, vehicles, and more.',
      price: 49.99,
    },
    {
      id: 3,
      name: 'Creative Octopus',
      image: 'https://i.ibb.co/x7BSXK4/0001196450398.webp',
      description: 'Let your childs creativity soar with these colorful Octopus. Endless possibilities await!',
      price: 19.99,
    },

  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-primary text-center">Featured Toys</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredToys.map((toy) => (
          <div key={toy.id} className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
            <div className="relative">
              <img className="w-40 h-40 mx-auto mb-4" src={toy.image} alt={toy.name} />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{toy.name}</h3>
            <p className="text-gray-600 text-sm">{toy.description}</p>
            <p className="text-gray-700 font-bold mt-2">${toy.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;

