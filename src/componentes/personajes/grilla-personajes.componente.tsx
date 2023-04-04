import { useEffect, useState } from 'react';
import './grilla-personajes.css';
import data from './tarjeta-personaje.componente';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getPersonaje } from '../../redux/personajeSlice';


/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {


    const [page, setPage] = useState(1)
    const dispatch = useAppDispatch()
    const data = useAppSelector(state => state.personaje.tarjetas)

   /*  useEffect(() => {
        buscarPokemons(name).then((data) => {
            dispatch(setPokemons(data));
        });
    },[name]) */

    console.log(data)



    return <div className="grilla-personajes">
       <TarjetaPersonaje />
       <TarjetaPersonaje />
       <TarjetaPersonaje />
    </div>
}
    
 
export default GrillaPersonajes;



/* const GrillaPersonajes = () => {
  
    const data = useAppSelector(state => state.personaje.tarjetas)

    return (<div className="grilla-personajes">

       {data.map((personaje: any) => (
        <div key={personaje.id}>
            <TarjetaPersonaje/>
        </div>
        
       )) 
       
       }
        </div>)
} */