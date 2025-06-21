import { SimpleWidget } from "@/components/SimpleWidget"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagina principal",
  description: "Pagina Principal peliculas",
};

export default function HomePage() {
  return (
    <div className="flex">
      <div className="text-black p-2">
        <div className="flex flex-wrap p-2 items-center justify-center">
          <SimpleWidget />
          <SimpleWidget />
          <SimpleWidget />
          <SimpleWidget />
        </div>
      </div>
    </div>
  )
}
