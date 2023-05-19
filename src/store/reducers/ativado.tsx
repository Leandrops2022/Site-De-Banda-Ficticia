import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  estado: false
};

const ativadoSlice = createSlice({
  name: 'ativado',
  initialState,
  reducers: {
    mudarAtivado: (state) => {
      state.estado = !state.estado;
    }
  }
});

export const { mudarAtivado } = ativadoSlice.actions;
export default ativadoSlice.reducer;