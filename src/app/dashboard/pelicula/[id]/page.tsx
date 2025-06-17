import { CastMember, CastResponse } from "@/peliculas/interfaces/pelicula-credits";
import { PeliculaIndividual } from "@/peliculas/interfaces/pelicula-individual";
import { notFound } from "next/navigation";
import Image from 'next/image'
import { CreditsGrid } from "@/peliculas/components/CreditsGrid";
import { ActorPelicula } from "@/peliculas/interfaces/pelicula-castmember";
import { Keyword, KeywordsResponse } from "@/peliculas/interfaces/pelicula-keywords";


//Sigue leyendo esto cada vez que no lo entiendas, con el tiempo entenderas mejor
//
//  [Página principal]
//    └─ PeliculasPage(fetch de todas las películas)
//          ├─ PeliculaGrid(renderiza lista)
//                ├─ PeliculaCard(1 por película)
//                    └─ Link href = "/dashboard/pelicula/123"
//
// [Al hacer click en una tarjeta]
//    └─ Navega a: /dashboard/pelicula / 123
//          ├─[id] / page.tsx detecta que id = 123
//          ├─ getPelicula(123)
//          ├─ Renderiza detalles de la película 123


interface Props {
  params: { id: string };
}

const api_key = process.env.NEXT_PUBLIC_TMDB_API_KEY


//Aqui nos vamos a traer nuestras peliculas jaja, aun estoy intentando entender esta fregada
const getPelicula = async (id: string): Promise<PeliculaIndividual> => {
  try {
    const pelicula = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`, {
      cache: "force-cache", // TODO: cambiar esto en un futuro
    }).then((resp) => resp.json());

    // Si la película no se encuentra, TMDB devuelve un objeto con 'success: false' o un 'status_code'
    if (pelicula.success === false || pelicula.status_code === 34) { // 34 es 'The resource you requested could not be found.'
      notFound();
    }

    return pelicula;
  } catch (error) {
    console.error("Error al obtener la película:", error);
    notFound(); // Redirige a la página 404 si hay un error de red o de parsing
  }
};

const getActores = async (id: string): Promise<ActorPelicula> => {
  try {
    const credits: CastResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`, {
      cache: "force-cache",
    }).then((resp) => resp.json())

    const creditos = credits.cast.map(actor => ({
      adult: actor.adult,
      gender: actor.gender,
      id: actor.id,
      known_for_department: actor.known_for_department,
      name: actor.name,
      original_name: actor.original_name,
      popularity: actor.popularity,
      profile_path: actor.profile_path,
      cast_id: actor.cast_id,
      character: actor.character,
      credit_id: actor.credit_id,
      order: actor.order
    }))

    return creditos;

  } catch (error) {
    console.error("Error al obtener los creditos de la pelicula", error)
    notFound()
  }
}

const getKeywords = async (id: string): Promise<Keyword[]> => {
  try {
    const palabrasClave: KeywordsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${api_key}`, {
      cache: 'force-cache'
    }).then((respuesta) => respuesta.json())

    const data = palabrasClave.keywords.map(palabraClave => ({
      id: palabraClave.id,
      name: palabraClave.name
    }));

    return data;

  } catch (error) {
    console.error("Error al obtener los keyword de la pelicula, error")
    notFound()
  }
}

export default async function PeliculaPage({ params }: Props) {

  const pelicula = await getPelicula(params.id);
  const actores: ActorPelicula[] = await getActores(params.id)
  const keywords: Keyword[] = await getKeywords(params.id)

  return (
    <div className="flex min-h-screen overflow-x-hidden">


      {/* 'flex-1' lo hace crecer para ocupar el espacio restante. */}
      {/* 'md:ml-[300px]' crea el espacio para el sidebar cuando está visible. */}
      {/* 'overflow-x-hidden' se aplica aquí también para evitar desbordamientos internos. */}
      <div className="flex-1 md:ml-[300px] bg-white min-h-screen text-gray-900 p-8 overflow-x-hidden">

        {/* Sección superior: Banner con imagen y detalles - Ahora más flexible */}
        <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden flex flex-wrap items-center p-6 mb-8">
          {/* Contenedor del póster: permite que se ajuste al tamaño del contenido y se envuelva */}
          <div className="w-full sm:w-1/4 pr-0 sm:pr-6 flex-shrink-0 mb-4 sm:mb-0">
            {pelicula.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                alt={`Póster de ${pelicula.title}`}
                className="w-full h-auto rounded-lg object-cover shadow-md mx-auto"
              />
            ) : (
              <div className="bg-gray-300 h-96 w-full rounded-lg flex items-center justify-center text-gray-500 text-sm">
                Póster no disponible
              </div>
            )}
            <div className="text-center mt-2 font-bold text-lg text-gray-800">{pelicula.title.toUpperCase()}</div>
          </div>

          {/* Contenedor de detalles: permite que se ajuste al tamaño del contenido */}
          <div className="w-full sm:w-3/4">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-gray-900">{pelicula.title} ({pelicula.release_date ? new Date(pelicula.release_date).getFullYear() : 'N/A'})</h1>
            <div className="text-gray-600 text-sm mb-4">
              {pelicula.release_date ? new Date(pelicula.release_date).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }) : 'Fecha desconocida'} • {pelicula.genres.map(genre => genre.name).join(', ')} • {pelicula.runtime ? `${Math.floor(pelicula.runtime / 60)}h ${pelicula.runtime % 60}m` : 'N/A'}
            </div>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center">
                <span className="text-xl font-bold mr-2 text-gray-800">{pelicula.vote_average.toFixed(1)}</span>
                <span className="text-gray-600">/ 10</span>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.185A1 1 0 0111 8v4a1 1 0 01-1.445.815L7.5 10.5 9.555 7.185z" clipRule="evenodd"></path></svg>
                Reproducir tráiler
              </button>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Resumen</h2>
              <p className="text-gray-700 leading-relaxed">
                {pelicula.overview || pelicula.tagline || 'No hay resumen disponible.'}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-semibold text-gray-800">Escritor:</span>
                <p className="text-gray-600">
                  James Gunn, Jerry Siegel
                </p>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Director:</span>
                <p className="text-gray-600">
                  James Gunn
                </p>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Productores:</span>
                <p className="text-gray-600">
                  {pelicula.production_companies.length > 0
                    ? pelicula.production_companies.map(company => company.name).join(', ')
                    : 'N/A'}
                </p>
              </div>
            </div>
          </div>

          {/* Imagen de fondo del banner (ahora con hidden por defecto y solo visible en md para evitar conflictos en mobile) */}
          {pelicula.backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${pelicula.backdrop_path}`}
              alt={`Imagen de fondo de ${pelicula.title}`}
              className="absolute top-0 right-0 w-1/4 h-full object-cover opacity-70 hidden md:block"
            />
          ) : (
            <div className="absolute top-0 right-0 w-1/4 h-full bg-gray-300 flex items-center justify-center text-gray-500 text-sm opacity-70 hidden md:block">
              Imagen de fondo no disponible
            </div>
          )}
        </div>

        {/* Sección de Actores Principales - ando mandando el array por aqui */}
        <CreditsGrid actoresArray={actores} />

        {/* Sección inferior: esta es la parte de social */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Social</h2>
              <div className="space-y-4">
                <div className="bg-gray-200 p-4 rounded-lg">
                  <p className="text-gray-700">"¡Amo el mundo, necesito Superman!"</p>
                  <p className="text-gray-500 text-xs mt-2">17 Ago 2024</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">
                  <p className="text-gray-700">"¡Alicea Gale y Tráilers 'Hey buddy, eyes up here!'"</p>
                  <p className="text-gray-500 text-xs mt-2">23 May 2024</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">
                  <p className="text-gray-700">"¡Noticias de CGI y La Joven Clark Kent / Superman de 4 años!"</p>
                  <p className="text-gray-500 text-xs mt-2">09 Ene 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna lateral derecha - ahora es responsiva */}
          <div className="col-span-1 lg:col-span-1">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Detalles</h2>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold text-gray-800">Estado:</span>
                  <p className="text-gray-600">{pelicula.status}</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Idioma original:</span>
                  <p className="text-gray-600">
                    {pelicula.spoken_languages.find(lang => lang.iso_639_1 === pelicula.original_language)?.english_name || pelicula.original_language}
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Presupuesto:</span>
                  <p className="text-gray-600">{pelicula.budget > 0 ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(pelicula.budget) : 'N/A'}</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Ingresos:</span>
                  <p className="text-gray-600">{pelicula.revenue > 0 ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(pelicula.revenue) : 'N/A'}</p>
                </div>
              </div>
            </div>

            {/* Seccion de palabras clave             */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Palabras clave</h2>
              <div className="flex flex-wrap gap-2">
                {keywords.map(keyword =>
                  <div key={keyword.id}>
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">{keyword.name}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Clasificacion de contenido */}
            <div className="bg-gray-100 rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Calificación del contenido</h2>
              <div className="bg-gray-200 text-gray-800 font-bold text-center py-2 rounded-lg text-lg">
                {pelicula.adult ? 'Para adultos' : 'Para todo público'}
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Colaboradores Destacados</h2>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Usuario 1</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Usuario 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
