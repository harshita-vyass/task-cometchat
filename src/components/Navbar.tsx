"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
// import { BiCross, BiMenu } from "react-icons/bi";

export const navItems = [
  {
    label: "Platform",
    path: "/",
  },
  {
    label: "Solutions",
    path: "/",
  },

  {
    label: "Developers",
    path: "/",
  },
  {
    label: "Resources",
    path: "/",
  },
  {
    label: "Services",
    path: "/",
  },
  { label: "Contact", path: "/" },
];

const Navbar = () => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );

    const sentinel = sentinelRef.current;
    if (sentinel) observer.observe(sentinel);

    return () => {
      if (sentinel) observer.unobserve(sentinel);
    };
  }, []);


  return (
    <>
      <div
        ref={sentinelRef}
        className="absolute top-0 h-px w-full pointer-events-none z-50"
      />
      <nav
        className={`fixed w-full lg:px-6 py-2 z-50 transition-all duration-300 ${
          scrolled
            ? "shadow-lg backdrop:blur-3xl bg-[#0A0914] text-white"
            : "bg-transparent text-white"
        }`}
      >
        <div className="flex justify-between items-center px-5">
          {/* Logo */}
          <div className="font-bold text-xl">
            <Link href="/">
              <Image
                src={"/Combined-Shape-Copy-13.png"}
                alt="Logo"
                title="Logo"
                width={140}
                height={30}
              />
            </Link>
          </div>
       

          <ul className="md:flex hidden items-center space-x-6">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.path}
                  className={`relative text-base font-normal md:block hidden   p-1
    after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px]  after:bg-white
    after:transition-all after:duration-300 after:ease-in-out
    after:w-0 hover:after:w-full 
     
    }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="">
            <li className="">
              <div className="flex gap-[16px] py-2 items-center">
                <button className="text-[14px] text-white">Log in</button>
                <button className="bg-[#6852D6] hidden md:flex text-[14px] text-white px-6 py-2 rounded-xl transition relative hover:bg-[#5a42b3] cursor-pointer">
                  <div className="absolute top-0  z-5  ">
                    <Image
                      src={"/assets/cta/Highlight.png"}
                      width={100}
                      height={300}
                      alt="comet"
                    />
                  </div>
                  Submit application
                </button>
                <Image src={"/assets/moon-01.png"} alt="Vector" width={18} height={20} className="md:hidden block" />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
