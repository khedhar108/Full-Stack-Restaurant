"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    // avoiding memory leaks 
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-5rem)] lg:flex-row z-10">
      {/* Text-Container  lg:w-1/2 lg:h-full = flex-1  */}
      <div className=" flex items-center justify-center flex-col gap-8 bg-fuchsia-100 flex-1">
        <h1 className="text-4xl md:6xl lg:7xl p-4 md:p-10 text-center uppercase">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 py-4 text-white px-8">Order Now</button>
      </div>
      {/* Image-Container  */}
      {/*  css- relative   lg:w-1/2 lg:h-full = flex-1 ??? */}
      <div className=" relative w-full flex-1 ">
        <Image src={data[currentSlide].image} alt="siderPicture" fill />
      </div>
    </div>
  );
}
