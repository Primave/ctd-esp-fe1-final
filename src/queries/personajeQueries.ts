import { createAsyncThunk } from "@reduxjs/toolkit"



const apiPersonaje = async () => {
 
        const response = await fetch("https://rickandmortyapi.com/api/character/?page=&limit=9")
        const data = await response.json()
        return data.results 
    }

export const getPersonaje = createAsyncThunk(
        '/getPersonaje',
        async (page: number) => {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&limit=9`)
            const parseRes = await res.json()
            return parseRes
        }
)   