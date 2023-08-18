"use client";
import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="flex flex-col">
      {/* PRODUCT CONTAINER */}
      <div className="flex flex-col text-red-500">
        <div className="flex">
          <Image
            src="/temporary/p1.png"
            alt="Product image"
            width={100}
            height={100}
          />
          {/* Details of product */}
          <div className="flex gap-4">
          <h1>title</h1>
          <span>Large</span>
          </div>
          <h2>33</h2>
          <span>X</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div></div>
    </div>
  );
};

export default CartPage;
