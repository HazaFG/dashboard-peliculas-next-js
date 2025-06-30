import { configureStore } from '@reduxjs/toolkit'
//Aqui le puedo poner el nombre que yo quiera, pero ese nombre es para identificar que es el reducer del counter
import counterSlice from './counter/counterSlice'
import favoriteMovieState from './peliculas/peliculas'
import { useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  //esta mierda exporta los slices, nuestros pedazos
  reducer: {
    //y esto a su vez tambien lo que hace es que, estas son las funciones que realmente tienen el poder de cambiar el state
    contador: counterSlice,
    favoritos: favoriteMovieState
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

//hooks

//vamos a usar useDispatch para lanzar los disparadores y ejecutar acccionesAdd commentMore actions
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

//Aqui vamos a poder leer nuestro estado
export const useAppSelector = useSelector.withTypes<RootState>()
