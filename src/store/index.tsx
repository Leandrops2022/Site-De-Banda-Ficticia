import { configureStore } from '@reduxjs/toolkit';
import ativadoSlice from './reducers/ativado';

const store = configureStore({
  reducer: {
    ativado: ativadoSlice
  }
});

export default store;