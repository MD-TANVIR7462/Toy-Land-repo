import React from 'react';

const SingleFetured = ({toy}) => {
  console.log(toy)
   return (
    
    
      
    <div className="container mx-auto px-4">
    <h2 className="text-2xl font-bold mb-4">Featured Toys</h2>
    <TransitionGroup className="grid grid-cols-3 gap-8">
      {featuredToys.map((toy) => (
        <CSSTransition key={toy.id} timeout={500} classNames="fade">
          <div className="flex flex-col items-center">
            <img className="w-40 h-40 object-cover rounded" src={toy.image} alt={toy.name} />
            <h3 className="text-lg font-bold mt-2">{toy.name}</h3>
            <p className="text-gray-500">{toy.description}</p>
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  </div>
    
   

   );
};

export default SingleFetured;