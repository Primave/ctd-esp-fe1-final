import { useEffect, useState } from 'react';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { getPaginas, getPersonajes } from "../../redux/personajeSlice";
import { Personaje } from '../../types/types';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 *@returns {JSX.Element} - un elemento con un map de personajes de tipo tarjetaPersonaje
 */
const GrillaPersonajes = () => {


    const dispatch = useAppDispatch()
    const data = useAppSelector(state => state.personaje)

    useEffect(() => {
        dispatch(getPaginas(1))
    },[])

    return (
    <div className="grilla-personajes">

      {data.tarjetas.map((tarjeta: Personaje) => (
            <TarjetaPersonaje {...tarjeta} />
       )) }

    </div>
    );
}
    
 
export default GrillaPersonajes;

