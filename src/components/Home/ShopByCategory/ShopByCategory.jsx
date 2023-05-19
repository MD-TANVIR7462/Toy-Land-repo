import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SingleShopByCetegory from './SingleShopByCetegory';

const ShopByCategory = () => {
  const [categories,setcategories] = useState([])
useEffect(()=>{
fetch('http://localhost:5000/subcetgory')
.then(res=>res.json())
.then(data=>setcategories(data))
},[])

  return (
    <div className="py-20 ">
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
              <div className="grid justify-items-center md:grid-cols-3 md:gap-6">
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

