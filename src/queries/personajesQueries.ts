import { getBuscar } from "../redux/personajeSlice";
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

/* export const getPokemon = async (page: number): Promise<Personaje[]> => {
     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${page}/`);
     return await response.json();
}; */