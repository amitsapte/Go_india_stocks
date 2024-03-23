'use client'
import React, {useEffect, useState } from 'react'
import DiscussionFourm from '../components/DiscussionFourm'

function Shoping() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        // Set only the first 5 products
        setProducts(data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-1/2 h-1/2">
      <h1 className="p-1 ">Disscussion Fourm</h1>
      <div className="w-1/4 h-1/3  ">
        {products.map(product => (
          <DiscussionFourm key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};


export default Shoping;
