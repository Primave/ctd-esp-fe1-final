import { actionBusqueda, getBuscar } from '../../redux/personajeSlice';
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import React, { useState, useEffect, useRef } from "react";
import './filtros.css';



const Filtros = () => {

    const [buscar, setBuscar] = useState("")
    const dispatch = useAppDispatch()    

    useEffect(() => {
        
     dispatch(actionBusqueda(buscar))
     dispatch(getBuscar(buscar))
    }, [buscar, dispatch]);

    
   console.log(buscar)

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" id="submit" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" 
        onChange={(e) => setBuscar(e.target.value)} /> 
    </div>
}


export default Filtros;