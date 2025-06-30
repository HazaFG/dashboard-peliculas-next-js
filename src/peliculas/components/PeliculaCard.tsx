'use client'


import Link from 'next/link'
import Image from 'next/image'
import { PeliculaSimple } from '../interfaces/pelicula-simple'
import { IoHeart, IoHeartOutline, } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleFavorites } from '@/store/peliculas/peliculas';

interface Props {
  //Aqui es solo la estructura, no el arreglo, el arreglo lo ocupas en la Grid, ya que en la grid es donde van los arreglos por el fetch de page  
  pelicula: PeliculaSimple;
}


export const PeliculaCard = ({ pelicula }: Props) => {
  const { id, title, release_date, poster_path } = pelicula;

  const isFavorite = useAppSelector(state => state.favoritos[id.toString()] !== undefined)
  const dispatch = useAppDispatch()


  const toggleFavoriteMovie = () => {
    dispatch(toggleFavorites(pelicula))
  }

  console.log({ isFavorite })

  return (
    <>
      <div key={id} className="p-4">
        <div className='bg-white rounded-lg shadow-md overflow-hidden'>
          <div className="relative w-70 h-110">
            <Link href={`/dashboard/pelicula/${id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                fill
                className=" object-cover"
              />
            </Link>
          </div>
          <div className="p-4 max-w-[200px]">
            <h2 className="text-lg font-semibold text-black truncate">
              {title}
            </h2>
            <p className="text-sm text-black">{release_date}</p>
            <div onClick={toggleFavoriteMovie} className='text-red-600'>
              {
                isFavorite ? (<IoHeart></IoHeart>) : (<IoHeartOutline></IoHeartOutline>)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

