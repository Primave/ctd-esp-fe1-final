import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Personaje } from "../types/types";



export const apiPersonaje = async (name: string) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/`);
  const data = await response.json();
  return data.results.filter((tarjeta: Personaje) => tarjeta.name.toLowerCase().match(name.toLowerCase()))
}

export const getBuscar = createAsyncThunk(
  '/getBuscar',
  async (name: string) => {
    const response = await apiPersonaje(name)
    return response
  }
)

export const getPersonajes = createAsyncThunk (
  '/getPersonajes',
async (page: number) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
  const data= await response.json()
  return data.results
  }
);


/* export const getPersonajes = createAsyncThunk(
  '/getPersonajes',
  async (page: number) => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      const data= await response.json()
      return data.results
  }
) */



interface InitialType {
  tarjetas: Personaje[],
  loading: boolean,
  busqueda: string,
 
} 

const initialState: InitialType = {
  tarjetas: [],
  loading: false,
  busqueda: "",
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
          builder.addCase(getBuscar.fulfilled, (state, action) => {
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