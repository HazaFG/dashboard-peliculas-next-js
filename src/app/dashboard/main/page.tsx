import { SimpleWidget } from "@/components/SimpleWidget"

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
