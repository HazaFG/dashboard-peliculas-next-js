import Image from next / image

export default function PeliculaPage() {
  return (
    <>
      <div className="bg-gray-900 min-h-screen text-gray-100 p-8 ml-80">
        {/* Sección superior: Banner con imagen de Superman y detalles */}
        <div className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden flex items-center p-6 mb-8">
          <div className="w-1/4 pr-6 flex-shrink-0">
            <div className="bg-gray-700 h-96 w-full rounded-lg flex items-center justify-center text-gray-400 text-sm">
              {/* Espacio para la imagen de la película */}
              Póster de Superman
            </div>
            <div className="text-center mt-2 font-bold text-lg">SUPERMAN</div>
          </div>
          <div className="w-3/4">
            <h1 className="text-4xl font-bold mb-2">Superman (2025)</h1>
            <div className="text-gray-400 text-sm mb-4">
              Septiembre 2025 • Acción, Aventura, Ciencia Ficción • 2h 30m
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                <span className="text-xl font-bold mr-2">8.5</span>
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
                Mientras se establece en su nuevo hogar en Metrópolis y se embarca en un viaje para reconciliar su herencia kryptoniana con su educación humana como Clark Kent.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-semibold">Escritor:</span>
                <p className="text-gray-400">James Gunn, Jerry Siegel</p>
              </div>
              <div>
                <span className="font-semibold">Director:</span>
                <p className="text-gray-400">James Gunn</p>
              </div>
              <div>
                <span className="font-semibold">Productores:</span>
                <p className="text-gray-400">Charles Roven</p>
              </div>
            </div>
          </div>
          {/* Aquí iría la imagen del actor en el banner superior derecho */}
          <div className="absolute top-0 right-0 w-1/4 h-full bg-gray-700 flex items-center justify-center text-gray-400 text-sm">
            Imagen del actor en el banner
          </div>
        </div>

        {/* Sección de Actores Principales */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Actores Principales</h2>
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {/* Ejemplo de un actor */}
            <div className="flex-shrink-0 w-32 text-center">
              <div className="bg-gray-700 h-32 w-32 rounded-full mx-auto mb-2 flex items-center justify-center text-gray-400 text-sm">
                Foto
              </div>
              <p className="font-semibold text-sm">David Corenswet</p>
              <p className="text-gray-400 text-xs">Clark Kent / Superman</p>
            </div>
            {/* Repite este bloque para cada actor */}
            <div className="flex-shrink-0 w-32 text-center">
              <div className="bg-gray-700 h-32 w-32 rounded-full mx-auto mb-2 flex items-center justify-center text-gray-400 text-sm">
                Foto
              </div>
              <p className="font-semibold text-sm">Rachel Brosnahan</p>
              <p className="text-gray-400 text-xs">Lois Lane</p>
            </div>
            <div className="flex-shrink-0 w-32 text-center">
              <div className="bg-gray-700 h-32 w-32 rounded-full mx-auto mb-2 flex items-center justify-center text-gray-400 text-sm">
                Foto
              </div>
              <p className="font-semibold text-sm">Nicholas Hoult</p>
              <p className="text-gray-400 text-xs">Lex Luthor</p>
            </div>
            <div className="flex-shrink-0 w-32 text-center">
              <div className="bg-gray-700 h-32 w-32 rounded-full mx-auto mb-2 flex items-center justify-center text-gray-400 text-sm">
                Foto
              </div>
              <p className="font-semibold text-sm">Edi Gathegi</p>
              <p className="text-gray-400 text-xs">Mr. Terrific</p>
            </div>
            <div className="flex-shrink-0 w-32 text-center">
              <div className="bg-gray-700 h-32 w-32 rounded-full mx-auto mb-2 flex items-center justify-center text-gray-400 text-sm">
                Foto
              </div>
              <p className="font-semibold text-sm">Anthony Carrigan</p>
              <p className="text-gray-400 text-xs">Metamorpho</p>
            </div>
            <div className="flex-shrink-0 w-32 text-center">
              <div className="bg-gray-700 h-32 w-32 rounded-full mx-auto mb-2 flex items-center justify-center text-gray-400 text-sm">
                Foto
              </div>
              <p className="font-semibold text-sm">Isabela Merced</p>
              <p className="text-gray-400 text-xs">Hawkgirl</p>
            </div>
          </div>
        </div>

        {/* Sección inferior: Reporte, Social, Reseñas, Discusión y detalles */}
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Social</h2>
              <div className="space-y-4">
                {/* Ejemplo de un comentario */}
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
            {/* Puedes agregar más secciones como "Discusiones" aquí */}
          </div>

          {/* Columna lateral derecha */}
          <div className="col-span-1">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Detalles</h2>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold">Estado:</span>
                  <p className="text-gray-400">En Producción</p>
                </div>
                <div>
                  <span className="font-semibold">Idioma original:</span>
                  <p className="text-gray-400">Inglés</p>
                </div>
                <div>
                  <span className="font-semibold">Presupuesto:</span>
                  <p className="text-gray-400">$330,000,000</p>
                </div>
                <div>
                  <span className="font-semibold">Ingresos:</span>
                  <p className="text-gray-400">N/A</p>
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
                PG-13
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
      </div>
    </>
  )
}
