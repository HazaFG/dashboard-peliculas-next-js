import { ActorPelicula } from "../interfaces/pelicula-castmember"
import { CreditsCard } from "./CreditsCard"

interface Props {
  actoresArray: ActorPelicula[]
}

export const CreditsGrid = ({ actoresArray }: Props) => {
  return (
    <>
      <div className="max-w-full bg-white rounded-lg shadow-lg p-6 mb-8 overflow-hidden">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Actores Principales</h2>
        <div className="flex flex-wrap justify-center gap-6 pb-4">
          {actoresArray.map(actor => (
            <CreditsCard actoresArray={actor} key={actor.id} />
          ))}
        </div>
      </div>
    </>
  )
}

