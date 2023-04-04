import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


interface Personaje {
  id: number,
  name: string,
  status: string,
  species: string,
  type: "",
  gender: string,
  origin: {
    name: string,
    url: string,
  },
  location: {
    name: string,
    url: string,
  },
  image: string,
  episode: [
    string,
    string,
  ],
  url: string,
  created: string,
}


interface initialType {
  tarjetas: Personaje[],
  loading: boolean
}

const apiPersonaje = async () => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?page=1`);
  const data = await response.json();
  return data
}

const getPersonajes = createAsyncThunk(
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
    const response = await apiPersonaje()
    return response
  }
)



const initialState: initialType = {
    tarjetas: [],
    loading: false
}

 const personajeSlice = createSlice({
    name: 'Personaje',
    initialState,
    reducers: {},
        extraReducers: (builder)=> {
          builder.addCase(getPersonajes.fulfilled, (state, action) => {
            state.tarjetas = action.payload
          })
    }
})

export default personajeSlice.reducer

