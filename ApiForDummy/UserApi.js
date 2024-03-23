'use client'
import React, {useEffect, useState } from 'react'
import UserStory from '../components/UserStory';

function UserApi() {
  const [user, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/users");
        const data = await response.json();
        // Set only the first 5 products
        setProducts(data.slice(0, 2));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="">
      <h1 className="m-0 ">User Stories</h1>
      <div className=" ">
        {user.map(product => (
          <UserStory key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default UserApi;
