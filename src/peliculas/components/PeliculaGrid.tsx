import { PeliculaSimple } from '../interfaces/pelicula-simple'
import { PeliculaCard } from './PeliculaCard'


interface Props {
  //Estas van a ser las peliculas, con s, PELICULAS, en la PeliculaCard, ahi es por pelicula individual
  //Aqui si ocupas el arreglo, ya que en el fetch si te lo traes como un arreglo jeje
  peliculas: PeliculaSimple[];

}

export const PeliculaGrid = ({ peliculas }: Props) => {
  return (
    <>
      <div className="flex flex-wrap ml-80">
        {peliculas.map(pelicula =>

          <PeliculaCard key={pelicula.id} pelicula={pelicula}></PeliculaCard>)}
      </div >
    </>
  )
}

