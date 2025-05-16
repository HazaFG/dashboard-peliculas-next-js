import Image from "next/image"
import { PeliculaSimple, PeliculasResponse } from "@/peliculas"
import Link from 'next/link'

{
  //Aqui lo que haras sera basicamente traerte como arreglo la estructura de las peliculas
}
const getPeliculas = async (): Promise<PeliculaSimple[]> => {
  const api_key = '4e72051e3bc2c615ed21d74e9a55ac50'


  const dataPostman: PeliculasResponse = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
  ).then(res => res.json())

  //Revisa la imagen que se llama 'tatuate esto si quieres entender las apis' para entender esto que haras Aqui
  const peliculas = dataPostman.results.map(pelicula => ({
    adult: pelicula.adult,
    backdrop_path: pelicula.backdrop_path,
    genre_ads: pelicula.genre_ads,
    id: pelicula.id,
    original_language: pelicula.original_language,
    original_title: pelicula.original_title,
    overview: pelicula.overview,
    popularity: pelicula.popularity,
    poster_path: pelicula.poster_path,
    release_date: pelicula.release_date,
    title: pelicula.title,
  }))

  return peliculas;
}


export default async function PeliculasPage() {
  const peliculas = await getPeliculas()
  return (
    <>
      <div className="flex flex-wrap ml-80">
        {peliculas.map(pelicula => (
          <div key={pelicula.id} className="p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link href={'/pepe'}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                  alt={pelicula.title}
                  width={300}
                  height={450}
                  className="w-full object-cover"
                />
              </Link>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-black">{pelicula.title}</h2>
                <p className="text-sm text-black">{pelicula.release_date}</p>
              </div>
            </div>
          </div>
        ))}

      </div >
    </>
  )
}








