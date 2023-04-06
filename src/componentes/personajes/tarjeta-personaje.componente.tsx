import { useEffect, useState } from 'react';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { Personaje } from '../../types/types';


/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = (tarjeta: Personaje) => {


    return <div className="tarjeta-personaje">
        <img src={tarjeta.image} alt={tarjeta.name}/>
        <div className="tarjeta-personaje-body">
            <span>{tarjeta.name}</span>
            <BotonFavorito esFavorito={false} onClick={false} />
        </div>
    </div>
}

export default TarjetaPersonaje;