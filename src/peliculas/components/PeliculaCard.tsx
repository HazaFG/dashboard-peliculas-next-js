import Link from 'next/link'
import Image from 'next/image'
import { PeliculaSimple } from '../interfaces/pelicula-simple'

interface Props {
  //Aqui es solo la estructura, no el arreglo, el arreglo lo ocupas en la Grid, ya que en la grid es donde van los arreglos por el fetch de page  
  pelicula: PeliculaSimple;
}


export const PeliculaCard = ({ pelicula }: Props) => {
  const { id, title, release_date, poster_path } = pelicula;
  return (
    <>
      <div key={id} className="p-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Link href={'/pepe'}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              width={300}
              height={450}
              className=" object-cover"
            />
          </Link>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-black">{title}</h2>
            <p className="text-sm text-black">{release_date}</p>
          </div>
        </div>
      </div>
    </>
  )
}

