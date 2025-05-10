import type { Metadata } from "next";
import { Sidebar } from "@/components";


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
        <Sidebar />
        <div className="flex ml-76">
          <div>{children}</div>
        </div>
      </div>
    </>
  )
}

