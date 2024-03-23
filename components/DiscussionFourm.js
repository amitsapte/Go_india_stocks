'use client'
import React from 'react'

function DiscussionFourm({data}) {
 
  return (
   <div className="w-full h-1/4 ml-2 mt-1 bg-white shadow-lg rounded-md overflow-hidden border border-gray-300">
  <div className="flex justify-between items-center">
    <img src={data.image} alt="T-shirt" className="w-11 h-20 rounded-md overflow-hidden shadow-md transition-transform duration-300 hover:scale-105" />
    <div className="label">
    </div>
  </div>
  <div className="p-4">
    <h2 className="text-lg font-bold text-gray-800 truncate">{data.title}</h2>
    <p className="text-sm text-gray-600 truncate">{data.description}</p>
    <div className="flex justify-between items-center">
      <span className="text-xl font-bold text-gray-800">{data.price}</span>
      <button className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded transition-colors duration-300 hover:bg-black">Add to Cart</button>
    </div>
  </div>
</div>

  );
}

export default DiscussionFourm
