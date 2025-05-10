export default async function PeliculasPage() {
  const api_key = '4e72051e3bc2c615ed21d74e9a55ac50'

  const peliculas = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
  const dataPostman = await peliculas.json()
  return (
    <>
      <div className="flex">
        {JSON.stringify(dataPostman, null, 2)}
      </div>
    </>
  )
}
