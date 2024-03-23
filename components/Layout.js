"use client"
import { BuildingStorefrontIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/16/solid'
import {  ChatBubbleBottomCenterIcon, ChatBubbleLeftEllipsisIcon, UserCircleIcon } from '@heroicons/react/16/solid'
import React, { useState } from 'react'

function Layout() {
  
 
   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Initial state of sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the state of sidebar
  };

  return (
    <div className={`h-screen w-1/5 bg-blue-400 inline-block ${isSidebarOpen ? '' : 'hidden'}`}>
      <div className="rounded-lg overflow-hidden">
        <div className="p-4 flex flex-col items-center">
          <UserCircleIcon className="w-6 h-6 mr-2 text-white" /> {/* Use the user icon */}
          <div>
            <p className="text-gray-800 font-semibold">Hello, User</p>
          </div>
        </div>
        <div className="w-full border-t-2 border-white"></div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center p-2">
          <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
          <div className="text-white text-sl p-1">Discussion Forum</div>
        </div>
        <div className="flex items-center p-2">
          <BuildingStorefrontIcon className="w-6 h-6 text-white" />
          <div className="text-white text-sl p-1">Market Stories</div>
        </div>
        <div className="ml-5 text-white text-sl p-3">Sentiment</div>
        <div className="ml-5 text-white text-sl p-3">Market</div>
        <div className="ml-5 text-white text-sl p-3">Sector</div>
      </div>
      <button className="block md:hidden fixed bottom-4 right-4 bg-white text-blue-400 rounded-full p-2">
        {isSidebarOpen ? 'Hide' : 'Show'} Sidebar
      </button>
    </div>
  );
  
}

export default Layout
     