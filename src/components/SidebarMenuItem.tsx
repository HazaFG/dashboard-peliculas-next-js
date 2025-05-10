'use client'
import Link from 'next/link';
import Image from 'next/image'
import React, { JSX } from "react";
import { usePathname } from 'next/navigation';

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
}

export const SidebarMenuItem = ({ path, icon, title }: Props) => {
  const currentPath = usePathname()
  return (
    <div>
      <ul className=" tracking-wide mt-4">
        <li>
          {/* Use Link component for internal navigation */}
          <Link href={path} aria-label="dashboard" className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl text-black hover:bg-gray-300 transition duration-300

            ${currentPath === path ? 'bg-[#2d2d2d] text-white' : ''}`}>
            {/* SVG Path adapted for JSX/React */}
            <div>{icon}</div>
            <span className="-mr-1 font-medium">{title}</span>
          </Link>
        </li>
      </ul>

    </div >
  )
}

