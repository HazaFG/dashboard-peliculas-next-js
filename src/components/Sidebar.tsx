import Image from 'next/image';
import Link from 'next/link';
import { IoHome, IoCalculatorOutline, IoVideocamOutline, IoEarthOutline } from "react-icons/io5"
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
    path: '/dashboard/actores',
    icon: <IoEarthOutline size={25}></IoEarthOutline>,
    title: 'Actores/Artistas'
  }
]


export const Sidebar = () => {
  return (
    <>
      <aside className="fixed top-0 pb-3 px-6 w-[300px] flex flex-col justify-between h-screen border-r bg-white transition duration-300 lg:ml-0
        ">
        <div className="mt-22">
          <div className="flex justify-center">
            <Link href="/" title="home">
              <Image
                src="/logohazaeldev.png"
                className="w-32"
                alt="tailus logo"
                width={128} // Specify width and height for Next.js Image component
                height={32} // Adjust as needed based on your image aspect ratio
              />
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

