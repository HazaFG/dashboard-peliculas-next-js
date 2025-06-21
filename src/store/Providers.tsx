// Esto basicamente lo que hace, es hacer que tu useSelector, tu dispatch, se puedan usar en cualquier parte de la aplicacion

'use client'

import { Provider } from "react-redux"
import { store } from "./index"

interface Props {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
