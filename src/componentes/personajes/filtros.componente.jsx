import { getPersonaje, actionBusqueda } from '../../redux/personajeSlice';
import { useAppDispatch } from "../../hooks/hooks";
import React, { useState } from "react";
import './filtros.css';

const Filtros = () => {

    const [buscar, setBuscar] = useState("")
    const dispatch = useAppDispatch()

    const onBuscarClick = () => {
        // Aqui debemos guardar la entrada del usuario
        dispatch(actionBusqueda(buscar))
        dispatch(getPersonaje(buscar))
    } 
    
   console.log(buscar)

    return <div className="filtros">
        <label for="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" 
        onChange={(e) => setBuscar(e.target.value)} />
    </div>
}

export default Filtros;