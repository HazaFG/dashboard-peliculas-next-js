import Image from 'next/image';
import Link from 'next/link';
import { IoHome, IoCalculatorOutline, IoVideocamOutline, IoHeartOutline } from "react-icons/io5"
import { SidebarMenuItem } from "./SidebarMenuItem";


const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoHome size={25}></IoHome>,
    title: 'HomePage'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculatorOutline size={25}></IoCalculatorOutline>,
    title: 'Counter Page'
  },
  {
    path: '/dashboard/peliculas',
    icon: <IoVideocamOutline size={25}></IoVideocamOutline>,
    title: 'Peliculas'
  },
  {
    path: '/dashboard/favorites',
    icon: <IoHeartOutline size={25}></IoHeartOutline>,
    title: 'Películas favoritas'
  }
]


export const Sidebar = () => {
  return (
    <>
      <aside className="hidden md:block md:w-[300px] fixed z-50 top-0 pb-3 px-6 flex flex-col justify-between h-screen border-r bg-white transition duration-300 lg:ml-0">
        <div className="mt-22">
          <div className="flex justify-center">
            <Link href="/pepe" title="home">
              <Image
                src="/logohazaeldev.png"
                className="w-32"
                alt="tailus logo"
                width={128} // Specify width and height for Next.js Image component
                height={32} />
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Hazael Flores</h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
          </div>

          {
            menuItems.map(item => (
              <SidebarMenuItem
                key={item.path}
                path={item.path}
                icon={item.icon}
                title={item.title}
              />
            ))
          }


        </div>
      </aside>
    </>
  )
}

