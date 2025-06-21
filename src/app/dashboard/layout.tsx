import type { Metadata } from "next";
import { Sidebar } from "@/components";
import { Providers } from "@/store/Providers";


export const metadata: Metadata = {
  title: "Main Page",
  description: "Main page dashboard paises",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex">

        {/*Bueno, aqui vamos a meter nuestro sidebar*/}
        <Sidebar></Sidebar>
        <div className="flex justify-center w-full">
          <Providers>
            <div>{children}</div>
          </Providers>
        </div>
      </div>
    </>
  )
}

