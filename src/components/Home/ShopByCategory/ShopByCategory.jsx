import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SingleShopByCetegory from './SingleShopByCetegory';

const ShopByCategory = () => {
  const categories = [
    {
      name: 'Teddy Bear Toys',
      subCategories: [
        {
          id: 1,
          name: 'Fluffy Bears',
          price: '$19.99',
          rating: 4.5,
          image: 'https://i.ibb.co/BZp32cf/download-1.jpg',
        },
        {
          id: 2,
          name: 'Talking Bears',
          price: '$24.99',
          rating: 4.2,
          image: 'https://i.ibb.co/jHRWp85/download-2.jpg',
        },
      ],
    },
    {
      name: 'Dinosaur Toys',
      subCategories: [
        {
          id: 3,
          name: 'T-Rex',
          price: '$29.99',
          rating: 4.8,
          image: 'https://i.ibb.co/rd08pZF/Brachiosaurus-Dinosaur-Soft-Toy-16-Inch-Plush-by-Zappi-98-X015-FRSP.webp',
        },
        {
          id: 4,
          name: 'Triceratops',
          price: '$27.99',
          rating: 4.6,
          image: 'https://i.ibb.co/DgMTczt/HTB1-AUttdjfguu-Rj-Sspaq6y-XVXXa-H-jpg-300x300.webp',
        },
      ],
    },
    {
      name: 'Butterfly Toys',
      subCategories: [
        {
          id: 5,
          name: 'Fluttering Butterflies',
          price: '$14.99',
          rating: 4.0,
          image: 'https://i.ibb.co/GCVG6sX/Butterfly-Fleece-Pillow-1200x1200.webp',
        },
        {
          id: 6,
          name: 'Colorful Butterflies',
          price: '$16.99',
          rating: 4.3,
          image: 'https://i.ibb.co/FJjz4WJ/Colour-Change-Pop-It-Butterfly1-d8d548ee-a8d7-4e2f-8a70-7bceb47b1c0c.webp',
        },
      ],
    },
  ];

  return (
    <div className="py-10 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Shop by Category</h2>
        <Tabs>
          <TabList className="flex justify-center mb-6">
            {categories.map((category, index) => (
              <Tab
                key={index}
                className="mx-2 py-2 px-4 text-lg font-medium border-b-2 border-transparent hover:border-indigo-500 focus:outline-none text-gray-500 hover:text-indigo-500"
                selectedClassName="border-indigo-500 text-indigo-500"
              >
                {category.name}
              </Tab>
            ))}
          </TabList>

          {categories.map((category, index) => (
            <TabPanel key={index}>
              <div className="grid justify-items-center md:grid-cols-2 md:gap-6">
                {category.subCategories.map(subCategory => <SingleShopByCetegory subCategory={subCategory} key={subCategory.id}></SingleShopByCetegory> )}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;


