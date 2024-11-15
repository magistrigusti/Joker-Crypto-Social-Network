"use client"
import Link from 'next/link';
import { useState } from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="flex flex-col gap-[4.5] cursor-pointer"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <div className="w-6 h-1 bg-blue-500 rounded-sm" />
        <div className="w-6 h-1 bg-blue-500 rounded-sm" />
        <div className="w-6 h-1 bg-blue-500 rounded-sm" />
      </div>

      {isOpen && (
        <div className="">
          <Link href=""></Link>
        </div>
      )}
    </div>
  )
};

export default MobileMenu;