import { ActorPelicula } from "../interfaces/pelicula-castmember"
import Image from 'next/image'

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
            <div key={actor.id} className="flex-shrink-0 w-32 text-center">
              <div className="relative overflow-hidden bg-gray-300 w-32 h-32 rounded-full mx-auto mb-2 flex items-center justify-center text-gray-500 text-sm shadow-md">
                <Image
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  fill
                  alt={`Foto de ${actor.name}`}
                  className="object-cover"
                />
              </div>
              <p className="font-semibold text-sm text-gray-800">{actor.name}</p>
              <p className="text-gray-600 text-xs">{actor.character}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

