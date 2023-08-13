import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div className="overflow-hidden">
      <div className="w-screen overflow-x-scroll text-red-500">
        {/* Wrapper */}
        <div className="w-max flex">
          {/* Single Item */}
          {featuredProducts.map((item) => (
            <div
              key={item.id}
              className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50  md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
            >
              {/* IamgeContainter */}
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-300 ">
                <Image
                  src={item.img}
                  alt="product image"
                  fill
                  className="object-contain"
                />
                {/* <Image src="/temporary/p1.png" alt="product image" fill />    */}
                {/**static */}
              </div>
              {/*  InfoContainer */}
              <div className="flex flex-col items-center justify-center gap-2 mt-4">
                <h1 className="text-xl font-bold uppercase">{item.title} </h1>
                <p className="text-red"> {item.desc} </p>
                <span className="text-xl font-bold ">${item.price}</span>
                <button className="bg-red-500 hover:bg-green-500 text-white p-2 rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
