import React, { useEffect, useState } from 'react';
import Tablee from './Tablee';

const Altoys = () => {
  const [datas, setDatas] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showLimit, setShowLimit] = useState(20);

  useEffect(() => {
    fetch('https://assignment-11-server-blue-rho.vercel.app/toyland')
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
        setSearchResults(data.slice(0, showLimit));
      });
  }, [showLimit]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const results = datas.filter((data) =>
      data.toy_name.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results.slice(0, showLimit));
  };

  const handleShowMore = () => {
    setShowLimit(showLimit + 20);
  };

  return (
    <div>
      <p className='text-center my-10 text-primary text-4xl'>ALL TOYS</p>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search by toy name..."
          value={searchQuery}
          onChange={handleSearch}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr className="text-white bg-purple-400">
              <th className="pl-16">Toy Name</th>
              <th>Seller Company Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available</th>
              <th>See Details</th>
            </tr>
          </thead>
         
            {searchResults.map((data) => (
              <Tablee data={data} key={data._id} />
            ))}
          
        </table>
      </div>
      {searchResults.length < datas.length && (
        <div className="flex justify-center mt-4">
          <button
            className="bg-primary text-white px-4 py-2 btn btn-outline border-none rounded-md focus:outline-none hover:bg-indigo-300 hover:text-white" 
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Altoys;
