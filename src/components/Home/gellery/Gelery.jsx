
import React from 'react';
import GeleryCard from '../GeleryCard/GeleryCard';

const toys = [
   {
      id: 1,
      name: 'Toy 1',
      description: 'This is a description for Toy 1.',
      rating: 4.5,
      image: 'https://i.ibb.co/n6Jfjth/istockphoto-1322274556-612x612.jpg',
   },
   {
      id: 2,
      name: 'Toy 2',
      description: 'This is a description for Toy 2.',
      rating: 3.8,
      image: 'https://i.ibb.co/HxmKSM2/stock-photo-kids-toys-collection-teddy-bear.jpg',
   },
   {
      id: 3,
      name: 'Toy 2',
      description: 'This is a description for Toy 2.',
      rating: 3.8,
      image: 'https://i.ibb.co/27X6MMy/360-F-475829656-6cy29m7-UPXL4k7-EVUE0-GV2s-N8lffk6dm.jpg',
   },
   {
      id: 4,
      name: 'Toy 2',
      description: 'This is a description for Toy 2.',
      rating: 3.8,
      image: 'https://i.ibb.co/FWHFRs6/depositphotos-83924492-stock-photo-pile-of-toys-on-blue.webp',
   },
   {
      id: 5,
      name: 'Toy 2',
      description: 'This is a description for Toy 2.',
      rating: 3.8,
      image: 'https://i.ibb.co/LtKKgg5/pile-toys-isolated-on-white-260nw-321375317.webp',
   },
   {
      id: 6,
      name: 'Toy 2',
      description: 'Meet our adorable Cuddly Teddy Bear! Soft and huggable, this plush companion will be your little ones best friend. Perfect for cuddles and comforting moments.',
      rating: 3.8,
      image: 'https://i.ibb.co/mGRNfnk/depositphotos-246705248-stock-photo-wooden-cart-stuffed-toys-constructor.webp',
   },
   
];

const Gallery = () => {
   return (
      <div className='my-16 '>


         <h1 className="text-4xl font-bold text-center text-primary mb-4">Toys Gallery</h1>
         <p className="text-lg text-center mb-8 px-6 sm:px-10">
            Welcome to our Toy Gallery, where you'll find a curated selection of the most popular toys from our shop. Each toy is carefully chosen to provide endless fun and entertainment for children of all ages. From exciting cars and action figures to cuddly plush companions, our gallery showcases a wide variety of toys that are loved by kids everywhere.
         </p>

         <div className=" md:grid grid-cols-3 gap-4">
            {
               toys.map(toy => <GeleryCard toy={toy} key={toy.id}></GeleryCard>)
            }
         </div>
      </div>
   );
};

export default Gallery;














