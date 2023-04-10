import { useEffect, useState } from 'react';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { Personaje } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { agregarFavorito, sacarFavorito } from '../../redux/personajeSlice';


/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = ({id, name, image, Favorito}: Personaje) => {

    const dispatch = useAppDispatch();
    


    //Detalle
    const navigate = useNavigate();
    const navDetalle = (id: number)=>{
        navigate(`/detalle/${id}`)
    }

    //Favoritos
    const listaFav: number[] = useAppSelector((state) => state.personaje.Favorito);
    const [personajeFav, setPersonajeFav] = useState(true)
    useEffect(() => {
        setPersonajeFav(listaFav.includes(id));
      }, [listaFav]);

    const handlerClick: () => void = () => {
        if(!personajeFav){
            dispatch(agregarFavorito(id))
        } else{
            dispatch(sacarFavorito(id))
        }
    }
    /* const personajesFavoritos = useAppSelector(state => state.personaje.Favorito)
    const favOn = personajesFavoritos.find(info => info.id === tarjeta.id) */




    return <div className="tarjeta-personaje"  >
        <img src={image} alt={name} onClick={()=> navDetalle(id)}/>
        <div className="tarjeta-personaje-body">
            <span>{name}</span>
            <BotonFavorito esFavorito={personajeFav} onClick={handlerClick} />
        </div>
    </div>
}

export default TarjetaPersonaje;