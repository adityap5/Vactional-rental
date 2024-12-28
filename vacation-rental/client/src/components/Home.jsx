import React from 'react'
import Banner from './Banner';

const Home = () => {
  return (
    <>
      <Banner />
      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
      <div className="rounded-md shadow">
        <a
          href="/properties"
          className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
        >
          View Properties
        </a>
      </div>
      </div>
    </>
  );
}

export default Home;
