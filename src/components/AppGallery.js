import React from 'react';

function AppGallery() {
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 dark:text-gray-100">My Gallery</h2>
      <div className="container mx-auto px-6 sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly">
        <div className="rounded-lg shadow-lg overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 bg-white">
          <img src="https://source.unsplash.com/600x400" alt="Caption gambar 1" className="w-full"></img>
          <div className="px-5 py-3">
            <h5 className="font-bold text-2xl mb-1 font-playfairDisplay">Image Title</h5>
            <p className="font-poppins">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 bg-white">
          <img src="https://source.unsplash.com/600x400" alt="Caption gambar 1" className="w-full"></img>
          <div className="px-5 py-3">
            <h5 className="font-bold text-2xl mb-1 font-playfairDisplay">Image Title</h5>
            <p className="font-poppins">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 bg-white">
          <img src="https://source.unsplash.com/600x400" alt="Caption gambar 1" className="w-full"></img>
          <div className="px-5 py-3">
            <h5 className="font-bold text-2xl mb-1 font-playfairDisplay">Image Title</h5>
            <p className="font-poppins">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 bg-white">
          <img src="https://source.unsplash.com/600x400" alt="Caption gambar 1" className="w-full"></img>
          <div className="px-5 py-3">
            <h5 className="font-bold text-2xl mb-1 font-playfairDisplay">Image Title</h5>
            <p className="font-poppins">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="rounded-lg shadow-lg overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72 bg-white">
          <img src="https://source.unsplash.com/600x400" alt="Caption gambar 1" className="w-full"></img>
          <div className="px-5 py-3">
            <h5 className="font-bold text-2xl mb-1 font-playfairDisplay">Image Title</h5>
            <p className="font-poppins">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppGallery;