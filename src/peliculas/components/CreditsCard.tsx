import Image from 'next/image'
import { ActorPelicula } from '../interfaces/pelicula-castmember'

interface Props {
  //Aqui no se pasa el arreglo porque pues este es un actor individual, no un arreglo, asi que si, es por eso, ahora lo entiendo mejor
  actoresArray: ActorPelicula;
}

export const CreditsCard = ({ actoresArray }: Props) => {
  return (
    <>
      <div key={actoresArray.id} className="flex-shrink-0 w-32 text-center">
        <div className="relative overflow-hidden bg-gray-300 w-32 h-32 rounded-full mx-auto mb-2 flex items-center justify-center text-gray-500 text-sm shadow-md">
          <Image
            src={`https://image.tmdb.org/t/p/w200${actoresArray.profile_path}`}
            fill
            alt={`Foto de ${actoresArray.name}`}
            className="object-cover"
          />
        </div>
        <p className="font-semibold text-sm text-gray-800">{actoresArray.name}</p>
        <p className="text-gray-600 text-xs">{actoresArray.character}</p>
      </div>
    </>
  )
}

