import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
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
