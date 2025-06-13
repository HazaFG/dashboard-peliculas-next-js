import { CastMember, CastResponse } from "@/peliculas/interfaces/pelicula-credits";
import { PeliculaIndividual } from "@/peliculas/interfaces/pelicula-individual";
import { notFound } from "next/navigation";
import Image from 'next/image'


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

//Aqui nos vamos a traer nuestras peliculas jaja, aun estoy intentando entender esta fregada
const getPelicula = async (id: string): Promise<PeliculaIndividual> => {
  const api_key = '4e72051e3bc2c615ed21d74e9a55ac50'

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

const getActores = async (id: string): Promise<CastMember> => {
  const api_key = '4e72051e3bc2c615ed21d74e9a55ac50'

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

export default async function PeliculaPage({ params }: Props) {

  const pelicula = await getPelicula(params.id);
  const actores: CastMember = await getActores(params.id)

  return (
    <>
      <div className="bg-gray-900 min-h-screen text-gray-100 p-8 ml-80">
        {/* Sección superior: Banner con imagen de Superman y detalles */}
        <div className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden flex items-center p-6 mb-8">
          <div className="w-1/4 pr-6 flex-shrink-0">
            {pelicula.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                alt={`Póster de ${pelicula.title}`}
                className="w-full h-auto rounded-lg object-cover"
              />
            ) : (
              <div className="bg-gray-700 h-96 w-full rounded-lg flex items-center justify-center text-gray-400 text-sm">
                Póster no disponible
              </div>
            )}
            <div className="text-center mt-2 font-bold text-lg">{pelicula.title.toUpperCase()}</div>
          </div>
          <div className="w-3/4">
            <h1 className="text-4xl font-bold mb-2">{pelicula.title} ({pelicula.release_date ? new Date(pelicula.release_date).getFullYear() : 'N/A'})</h1>
            <div className="text-gray-400 text-sm mb-4">
              {pelicula.release_date ? new Date(pelicula.release_date).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }) : 'Fecha desconocida'} • {pelicula.genres.map(genre => genre.name).join(', ')} • {pelicula.runtime ? `${Math.floor(pelicula.runtime / 60)}h ${pelicula.runtime % 60}m` : 'N/A'}
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                <span className="text-xl font-bold mr-2">{pelicula.vote_average.toFixed(1)}</span>
                <span className="text-gray-400">/ 10</span>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.185A1 1 0 0111 8v4a1 1 0 01-1.445.815L7.5 10.5 9.555 7.185z" clipRule="evenodd"></path></svg>
                Reproducir tráiler
              </button>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Resumen</h2>
              <p className="text-gray-300 leading-relaxed">
                {pelicula.overview || pelicula.tagline || 'No hay resumen disponible.'}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-semibold">Escritor:</span>
                <p className="text-gray-400">
                  James Gunn, Jerry Siegel
                </p>
              </div>
              <div>
                <span className="font-semibold">Director:</span>
                <p className="text-gray-400">
                  James Gunn
                </p>
              </div>
              <div>
                <span className="font-semibold">Productores:</span>
                <p className="text-gray-400">
                  {pelicula.production_companies.length > 0
                    ? pelicula.production_companies.map(company => company.name).join(', ')
                    : 'N/A'}
                </p>
              </div>
            </div>
          </div>

          {/* Aquí iría la imagen del actor en el banner superior derecho o el backdrop */}
          {pelicula.backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${pelicula.backdrop_path}`}
              alt={`Imagen de fondo de ${pelicula.title}`}
              className="absolute top-0 right-0 w-1/4 h-full object-cover opacity-70"
            />
          ) : (
            <div className="absolute top-0 right-0 w-1/4 h-full bg-gray-700 flex items-center justify-center text-gray-400 text-sm opacity-70">
              Imagen de fondo no disponible
            </div>
          )}
        </div>

        {/* Sección de Actores Principales */}
        <div className="overflow-x-auto max-w-410 bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Actores Principales</h2>
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {
              actores.map(actor => (
                < div key={actor.id} className="flex-shrink-0 w-32 text-center" >
                  <div className="relative bg-gray-700 h-32 w-32 rounded-full mx-auto mb-2 flex items-center justify-center text-gray-400 text-sm">
                    <Image
                      src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                      fill
                      alt="imagen del actor"
                    />

                  </div>
                  <p className="font-semibold text-sm">{actor.name}</p>
                  <p className="text-gray-400 text-xs">{actor.character}</p>
                </div>
              ))
            }
          </div>
        </div>

        {/* Sección inferior: Reporte, Social, Reseñas, Discusión y detalles */}
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Social</h2>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300">"¡Amo el mundo, necesito Superman!"</p>
                  <p className="text-gray-500 text-xs mt-2">17 Ago 2024</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300">"¡Alicea Gale y Tráilers 'Hey buddy, eyes up here!'"</p>
                  <p className="text-gray-500 text-xs mt-2">23 May 2024</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300">"¡Noticias de CGI y La Joven Clark Kent / Superman de 4 años!"</p>
                  <p className="text-gray-500 text-xs mt-2">09 Ene 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna lateral derecha */}
          <div className="col-span-1">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Detalles</h2>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold">Estado:</span>
                  <p className="text-gray-400">{pelicula.status}</p>
                </div>
                <div>
                  <span className="font-semibold">Idioma original:</span>
                  <p className="text-gray-400">
                    {pelicula.spoken_languages.find(lang => lang.iso_639_1 === pelicula.original_language)?.english_name || pelicula.original_language}
                  </p>
                </div>
                <div>
                  <span className="font-semibold">Presupuesto:</span>
                  <p className="text-gray-400">{pelicula.budget > 0 ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(pelicula.budget) : 'N/A'}</p>
                </div>
                <div>
                  <span className="font-semibold">Ingresos:</span>
                  <p className="text-gray-400">{pelicula.revenue > 0 ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(pelicula.revenue) : 'N/A'}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Palabras clave</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">DC</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">Superhéroe</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">Aventura</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">Cómic</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Calificación del contenido</h2>
              <div className="bg-gray-700 text-white font-bold text-center py-2 rounded-lg text-lg">
                {pelicula.adult ? 'Adulto (+18)' : 'Para todo público'} {/* Inferencia básica */}
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Colaboradores Destacados</h2>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300">Usuario 1</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300">Usuario 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
