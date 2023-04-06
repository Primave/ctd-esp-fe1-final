import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Personaje } from "../types/types";



const apiPersonaje = async (name: string) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/`);
  const data = await response.json();
  return data
}

export const getPersonajes = createAsyncThunk(
  '/getPersonajes',
  async (page: number) => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      const parseRes = await res.json()
      return parseRes.results
  }
)

export const getPersonaje = createAsyncThunk(
  '/getPersonaje',
  async (name: string) => {
    const response = await apiPersonaje(`https://rickandmortyapi.com/api/character/`)
    return response
  }
)

interface InitialType {
  tarjetas: Personaje[],
  loading: boolean,
  busqueda: string,
  esFavorito: boolean
} 

const initialState: InitialType = {
  tarjetas: [],
  loading: false,
  busqueda: "",
  esFavorito: false,
}



 export const personajeSlice = createSlice({
    name: 'personaje',
    initialState,
    reducers: {
      actionBusqueda: (state, action)=> {
        state.busqueda = action.payload
      }
    },
        extraReducers: (builder)=> {
          builder.addCase(getPersonajes.fulfilled, (state, action) => {
            state.tarjetas = action.payload
          })
    }
})

export const { actionBusqueda } = personajeSlice.actions
export default personajeSlice.reducer



/* d: 1,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {
      name: "",
      url: "",
    },
    location: {
      name: "",
      url: "",
    },
    image: "",
    episode: [
      "",
      "",
    ],
    url: "",
    created: "", */