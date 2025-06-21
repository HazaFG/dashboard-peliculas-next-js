'use client';

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, substractOne } from "@/store/counter/counterSlice";
// import { useState } from "react";

export const Counter = () => {
  // const [contador, setContador] = useState(10)
  const count = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch();

  // const toggleSumar = () => {
  //   setContador(contador + 1);
  // }

  return (
    <>
      <div className="flex w-full items-center justify-center mt-8 flex-col">
        <h1 className="text-4xl mb-8">Counter</h1>
        <h1 className="text-6xl">{count} </h1>
        <div className="mt-8 flex">
          <button onClick={() => dispatch(addOne())} className="text-3xl mr-12 bg-blue-500 rounded px-4 py-2 cursor-pointer">+1</button>
          <button onClick={() => dispatch(substractOne())} className="text-3xl bg-red-500 rounded px-4 py-2">-1</button>
        </div>
      </div>
    </>
  )
}

