import React from 'react';

const Home = () => {
    return (
        <div  className=''>
                <h1 className='text-xl text-center'>
                Welcome to My portfolio</h1>
        
           <div className='flex flex-wrap'>
               <div className='h-60 w-96 rounded ml-10 border-spacing-1 shadow mt-5 mb-5 cursor-pointer'>
                  <img src="./drink.jpg" alt=" drink" />
                  <p className='ml-7 text-xl text-gray-500'>price: $10</p>
               </div>
               <div className='h-60 w-80 rounded ml-10 border-spacing-1 shadow mt-5 mb-5 cursor-pointer'>
                  <img src="./cofee.jpg" alt="coffee" />
                  <p className='ml-7 text-xl text-gray-500'>price: $10</p>
               </div>
               <div className='h-50 w-96 rounded ml-10 border-spacing-1 shadow mt-5 mb-5 cursor-pointer'>
                  <img src="./rest.jpg" alt="restaurant" />
                  <p className='ml-7 text-xl text-gray-500'>price: $10</p>
               </div>
               <div className='h-60 w-96 rounded ml-10 border-spacing-1 shadow mt-5 mb-5 cursor-pointer'>
                  <img src="./drink.jpg" alt=" drink" />
                  <p className='ml-7 text-xl text-gray-500'>price: $10</p>
               </div>
               <div className='h-60 w-80 rounded ml-10 border-spacing-1 shadow mt-5 mb-5 cursor-pointer'>
                  <img src="./cofee.jpg" alt="coffee" />
                  <p className='ml-7 text-xl text-gray-500'>price: $10</p>
               </div>
               <div className='h-50 w-96 rounded ml-10 border-spacing-1 shadow mt-5 mb-5 cursor-pointer'>
                  <img src="./rest.jpg" alt="restaurant" />
                  <p className='ml-7 text-xl text-gray-500'>price: $10</p>
               </div>
           </div>
        </div>
    );
}

export default Home;
