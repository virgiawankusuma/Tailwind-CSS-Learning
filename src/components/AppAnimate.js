import React from 'react';

function AppAnimate() {
  return (
    <div className="xl:flex lg:columns-4 md:columns-3 container mx-auto">
      <div className="w-40 h-40 bg-orange-500 mx-auto mb-20 rounded-md shadow-lg hover:rotate-180 hover:bg-pink-500 transition origin-top-left"></div>

      <div className="w-40 h-40 mx-auto mb-20 group">
        <div className="w-full h-full bg-orange-500 rounded-md shadow-lg group-hover:rotate-180 origin-top-left transition duration-500 ease-out"></div>
      </div>
      
      <div className="w-40 h-40 mx-auto bg-orange-500 mb-20 rounded-md shadow-lg animate-spin-fast flex">
        <p className="m-auto">animate-rotate</p>
      </div>

      <div className="w-40 h-40 mx-auto bg-orange-500 mb-20 rounded-full shadow-lg animate-ping flex">
        <p className="m-auto">animate-ping</p>
      </div>

      <div className="w-40 h-40 mx-auto bg-orange-500 mb-20 rounded-full shadow-lg animate-pulse flex">
        <p className="m-auto">animate-pulse</p>
      </div>
      
      <div className="w-40 h-40 mx-auto bg-orange-500 mb-20 rounded-full shadow-lg animate-bounce flex">
        <p className="m-auto">animate-bounce</p>
      </div>

      <div className="w-40 h-40 mx-auto bg-orange-500 mb-20 shadow-lg animate-wiggle flex">
        <p className="m-auto">animate-wiggle</p>
      </div>

      <div className="mb-96">

      </div>
    </div>
  )
}

export default AppAnimate;