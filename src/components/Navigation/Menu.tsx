"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "../Main/ClientSide/CartIcon";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  //   for users
  const user = false;
  return (
    <div className="z-40">
      {/* direct access public folder images */}
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Block will open when when open is true  */}
    { open && <div className="flex flex-col items-center justify-center gap-8 absolute left-0 top-28 bg-red-600 text-white w-full h-[calc(100vh-7rem)] z-40 ">
        {/* map.(callback)  -- callback-[(parameter,[index])=>( component key={index or paramerter.id} )]  */}
        {links.map((navlink) => (
          <Link href={navlink.url} key={navlink.id}  onClick={() => setOpen(false)}>
            {navlink.title}
          </Link>
        ))}
        {/* --------------------------------------------------------------------------- */}
        {/* user options : conditional rendering  - authenticated user can see only their orders*/}
        {/* { !variable/state ?() :()} */}
        {!user ? (
        <Link href="/login"  onClick={() => setOpen(false)}>Login</Link>
      ) : (
        <Link href="/orders"  onClick={() => setOpen(false)}>Orders</Link>
      )}

      <Link href="/cart" onClick={() => setOpen(false)}>
        <CartIcon/>
      </Link>
      </div>}
   
    </div>
  );
}
