import { useEffect, useState } from 'react';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import {getPersonajes} from "../../redux/personajeSlice";
import { Personaje } from '../../types/types';
;



/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {


    const dispatch = useAppDispatch()
    const data = useAppSelector(state => state.personaje)

    useEffect(() => {
        dispatch(getPersonajes(1))
    },[])

    console.log(data);



    return (
    <div className="grilla-personajes">

      {data.tarjetas.map((tarjeta: Personaje) => (
            <TarjetaPersonaje {...tarjeta} />
       )) }

    </div>
    );
}
    
 
export default GrillaPersonajes;



/* const GrillaPersonajes = () => {
  
    const data = useAppSelector(state => state.personaje.tarjetas)

    return (<div className="grilla-personajes">

       {data.map((personaje: Personaje) => (
            <TarjetaPersonaje personaje={personaje} key={personaje.url}/>
       )) }
        </div>)
} */