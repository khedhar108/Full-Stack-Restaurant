import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CartIcon() {
  return (
    <Link href="/" className="flex items-center gap-1">
      {/* cartIcon Image */}
      <div className="">
        <Image src="/cart.png" alt="" width={20} height={20} />
      </div>
      <span>Cart (3) </span>
    </Link>
  );
}
