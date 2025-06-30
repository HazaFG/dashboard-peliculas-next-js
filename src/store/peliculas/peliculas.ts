import { PeliculaSimple } from '@/peliculas';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/*
 * vamos a usar un objeto de este tipo para hacer nuestras peliculas favoritas
 {
    "1": {id: 1, name: bulbasaur},
    "2": {id: 2, name: bulbasaur},
    "3": {id: 3, name: bulbasaur},
 }
*/


//Cabe aclarar que puedes traerte las cosas de diferente manera, no necesariamente esa que usaste en los pokemones, puedes hacer tambien: 
// interface FavoriteState {
//   movies: PeliculaSimple[]; // Un array de PeliculaSimple
// }
//
// const initialState: FavoriteState = {
//   movies: [
//     {
//       id: 605722,
//       title: 'Distant',
//       release_date: '2024',
//       poster_path: null,
//       adult: false,
//       backdrop_path: null,
//       genre_ids: [878, 35],
//       original_language: 'en',
//       original_title: 'Distant',
//       overview: 'Un astronauta varado en un planeta alienígena debe luchar por sobrevivir y encontrar el camino de regreso a casa.',
//       popularity: 0,
//       video: false,
//       vote_average: 0,
//       vote_count: 0
//     },
//     // Más películas aquí
//   ],
//   lastUpdated: new Date()
// };


interface FavoriteState {
  [id: string]: PeliculaSimple;
}

const initialState: FavoriteState = {
  '605722': {
    id: 605722,
    title: 'Distant',
    release_date: '2024',
    poster_path: null,
    adult: false,
    backdrop_path: null,
    genre_ids: [878, 35],
    original_language: 'en',
    original_title: 'Distant',
    overview: 'Un astronauta varado en un planeta alienígena debe luchar por sobrevivir y encontrar el camino de regreso a casa.',
    popularity: 0,
    video: false,
    vote_average: 0,
    vote_count: 0
  }
};

const favoriteMovieState = createSlice({
  name: 'sliceName',
  initialState,
  reducers: {
    toggleFavorites(state, action: PayloadAction<PeliculaSimple>) {
      const pelicula = action.payload;
      const { id } = pelicula;

      if (state[id]) {
        delete state[id]
        return
      }


      state[id] = pelicula
    }
  }
});

export const { toggleFavorites } = favoriteMovieState.actions;
export default favoriteMovieState.reducer;
