import React from 'react'

function UserStory({data}) {
   
  return (
    <div className=" h-3/2 w-3/2  m-3 justify-center bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative ">
        <img src={data.avatar} className="object-cover object-center"  alt="User Avatar" />
        <div className="absolute bottom-0 left-0 p-4">
          <h2 className="text-xl font-bold text-white">{data.name}</h2>
          <p className="text-sm text-white">{data.email}</p>
        </div>
      </div>
      <div className="">
        <p className="text-gray-700 text-base ">Role: {data.role}</p>
        <p className="text-gray-700 text-base">Created At: {new Date(data.creationAt).toLocaleDateString()}</p>
      </div>
    </div>
  )
}

export default UserStory
