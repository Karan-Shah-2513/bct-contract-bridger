"use client";

import React, { useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useAccount } from "wagmi";

import { Navbar as MaterialTailwindNavbar } from "@material-tailwind/react";
const Navbar = ({ setIsConn }) => {
  const { isConnected } = useAccount();

  useEffect(() => {
    setIsConn(isConnected);
  }, [isConnected]);

  return (
    <MaterialTailwindNavbar className="w-full flex justify-between items-center p-0 bg-white sticky top-0 h-max max-w-full rounded-none py-4 lg:py-8 shadow-none z-50">
      <Link href="/" className="text-black text-3xl font-black">
        Logo
      </Link>
      <ConnectButton showBalance={false} />
    </MaterialTailwindNavbar>
  );
};

export default Navbar;
