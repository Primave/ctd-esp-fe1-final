import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { getPersonaje } from '../../redux/personajeSlice';
import { AppState } from '../../redux/store'


/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = () => {


    return <div className="tarjeta-personaje">
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt={"rick"}/>
        <div className="tarjeta-personaje-body">
            <span>Rick</span>
            <BotonFavorito esFavorito={false} onClick={true} />
        </div>
    </div>
}

export default TarjetaPersonaje;



/* const TarjetaPersonaje = () => {

    const [page, setPage] = useState(1)
    const dispatch = useAppDispatch()
    const data = useAppSelector(state => state.personaje.tarjetas)

  useEffect(() => {
    dispatch(getPersonaje(page))
  }, [page])

    return (
    <div className="tarjeta-personaje">
        <>
            {data.map((data) => (
            <><img src={data.image} alt={data.name} />
            <div className="tarjeta-personaje-body">
                <span>{data.name}</span><BotonFavorito esFavorito={false} onClick={true} /></div></>
            )) 
            }</>
     </div> )
    
} */