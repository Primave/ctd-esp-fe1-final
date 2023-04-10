import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Personaje } from "../types/types";


//ASYNC
export const apiPersonaje = async (name: string) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/`);
  if(response.ok){
  const data = await response.json();
  return data.results
}else{
  throw new Error("No se encontro, intenta de nuevo.");
}
}

export const apiPaginas = async (page: number) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
  const data= await response.json()
  return data.results
};

export const apiBuscarPokemons = async (personajeName: string) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${personajeName}`);
  if(response.ok){
  const data = await response.json();
  return data.results;
}else{
  throw new Error("No hay personajes con el nombre que buscas, intenta otra cosa.");
}
};

export const apiBuscarDetalle = async (id: number) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data= await response.json()
  return data.results
};


//CREATE THUNK
export const getPersonajes = createAsyncThunk(
  '/getPersonajes',
  async (info: string) => {
    const response = await apiPersonaje(info)
    return response
  }
)

export const getBuscar = createAsyncThunk(
  '/getBuscar',
  async (name: string) => {
    const response = await apiBuscarPokemons(name)
    return response
  }
)

export const getPaginas = createAsyncThunk (
  '/getPaginacion',
async (page: number) => {
  const response = await apiPaginas(page);
  return response
  }
);

export const getBuscarDetalle = createAsyncThunk(
  '/getBuscar',
  async (idPersonaje: number) => {
    const response = await apiBuscarDetalle(idPersonaje)
    return response
  }
);


//Initial
interface InitialType {
  tarjetas: Personaje[],
  loading: boolean,
  busqueda: string,
  Favorito: number[],
} 

const initialState: InitialType = {
  tarjetas: [],
  loading: false,
  busqueda: "",
  Favorito: []
}


  export const personajeSlice = createSlice({
    name: 'personaje',
    initialState,
    reducers: {
      actionBusqueda: (state, action)=> {
        state.busqueda = action.payload
      },
      agregarFavorito: (state, action) => {
       state.Favorito.push(action.payload)
    },
    sacarFavorito: (state, action) => {
      state.Favorito = state.Favorito.filter((sacar) => sacar !== action.payload)
   },
    deletarTodosFavoritos: (state) => {
      state.Favorito = initialState.Favorito
    },
  },
        extraReducers: (builder)=> {
          builder.addCase(getPaginas.fulfilled, (state, action) => {
            state.tarjetas = action.payload
          })
          builder.addCase(getBuscar.fulfilled, (state, action) => {
            state.tarjetas = action.payload
           })
          /*  builder.addCase(getBuscarDetalle.fulfilled, (state, action) => {
            state.tarjetas = action.payload
           })
           builder.addCase(getBuscarDetalle.rejected, (state, action) => {
            state.errorBuscar = action.error.message
           }) */
           
          
        }
  })



export const { actionBusqueda, agregarFavorito,sacarFavorito ,deletarTodosFavoritos} = personajeSlice.actions
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

    /* import { getBuscar } from "../redux/personajeSlice";
import { Personaje } from "../types/types";

export const getPersonaje = async (): Promise<Personaje[]> => {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();
    return data.results;
};

export const buscarPokemons = async (personajeName: string): Promise<Personaje[]> => {
    const data = await getPersonaje();
    return data.filter(personaje => personaje.name.toLowerCase().match(personajeName.toLowerCase()));
};
 */
/* export const getPokemon = async (page: number): Promise<Personaje[]> => {
     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${page}/`);
     return await response.json();
}; */