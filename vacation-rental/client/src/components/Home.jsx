import React from 'react'
import Banner from './Banner';

const Home = () => {
  return (
    // <div className="min-h-screen bg-gray-50">
    //   <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    //     <div className="text-center">
    //       <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
    //         Find Your Perfect Vacation Home
    //       </h1>
    //       <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
    //         Discover amazing properties for your next getaway. Browse our selection of hand-picked vacation homes.
    //       </p>
    //       <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
    //         <div className="rounded-md shadow">
    //           <a
    //             href="/properties"
    //             className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
    //           >
    //             View Properties
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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

