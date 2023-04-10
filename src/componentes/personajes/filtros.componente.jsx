import { actionBusqueda, getBuscar } from '../../redux/personajeSlice';
import { useAppDispatch } from "../../hooks/hooks";
import React, { useState, useEffect } from "react";
import './filtros.css';
import { on } from 'events';
import TarjetaPersonaje from './tarjeta-personaje.componente';

const Filtros = () => {

    const [buscar, setBuscar] = useState("")
    const dispatch = useAppDispatch()

    const onBuscar = () => {
        
     dispatch(actionBusqueda(buscar))
     dispatch(getBuscar(buscar))
    }

    
   console.log(buscar)

    return <div className="filtros">
        <label for="nombre">Filtrar por nombre:</label>
        <input type="text" id="submit" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" 
        onChange={(e) => setBuscar(e.target.value)} onkeypress={onBuscar()}/>
    </div>
}

export default Filtros;