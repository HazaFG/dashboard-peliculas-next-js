import { PeliculaSimple, PeliculasResponse } from "@/peliculas"
import { PeliculaGrid } from "@/peliculas/components/PeliculaGrid"

{
  //Aqui lo que haras sera basicamente traerte como arreglo la estructura de las peliculas
}
const getPeliculas = async (): Promise<PeliculaSimple[]> => {
  const api_key = process.env.NEXT_PUBLIC_TMDB_API_KEY


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
  const peliculas = await getPeliculas() //wow, acabo de entender que aqui estare trayendo puras <PeliculaSimple>, no deja de ser una funcion getPeliculas()
  return (
    <>
      <div className="">
        <PeliculaGrid peliculas={peliculas}></PeliculaGrid>
      </div>
    </>
  )
}

