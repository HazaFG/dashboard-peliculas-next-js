//Esta mierda maneja la logica del counter, del slice

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
  isReady: boolean;
}

//Este es el state que realmente importa
const initialState: CounterState = {
  count: 5,
  isReady: false,
};


const counterSlice = createSlice({
  name: 'sliceName',
  initialState,
  reducers: {
    //Estas son las actions jeje
    initCounterState(state, action: PayloadAction<number>) {
      //Si esto ya esta ready, no hace absolutamente nada
      if (state.isReady) return;

      //🔧 ¿Qué es un payload otra vez?
      // El payload es información que tú le mandas a la acción para que el reducer sepa cómo actualizar el estado.
      state.count = action.payload;
      state.isReady = true
    },

    addOne(state) {
      state.count++;
    },

    substractOne(state) {
      if (state.count === 0) return;
      state.count--;
    },
  }
});

export const { addOne, substractOne, initCounterState } = counterSlice.actions;

export default counterSlice.reducer;
