
import React from 'react';
import SingleFetured from './SingleFetured';

const FeaturedSection = () => {
  const featuredToys = [
    {
      id: 1,
      name: 'Super Robot',
      image: 'https://i.ibb.co/fdHm8Bp/71-VQii2-LJHL-SL1500.jpg',
      description: 'This awesome robot toy can transform into a car and a spaceship. Perfect for imaginative play!',
      price: 29.99,
    },
    {
      id: 2,
      name: 'Adventure Playset',
      image: 'https://i.ibb.co/VDzzyDS/images-1.jpg',
      description: 'Embark on thrilling adventures with this playset that includes action figures, vehicles, and more.',
      price: 49.99,
    },
    {
      id: 3,
      name: 'Creative Building Blocks',
      image: 'https://i.ibb.co/x7BSXK4/0001196450398.webp',
      description: 'Let your childs creativity soar with these colorful building blocks. Endless possibilities await!',
      price: 19.99,
    },

  ];

  return (
    <div className="py-10 ">
      <div className=" mx-auto">
        <h2 className="text-4xl  font-bold text-center text-primary mb-3 ">Featured Toys</h2>
        <h2 className='text-center mb-8'>Those Three Toys Are Most Populer and Atractive to childrens.. </h2>
        <div className="grid justify-items-center grid-cols-1  md:grid-cols-3 gap-5">
          {featuredToys.map(toy =><SingleFetured toy={toy}></SingleFetured> )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;

