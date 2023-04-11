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
 *@param {number} id - el id del personaje de tipo numero
 *@param {string} name - el nombre del personaje de tipo string
 *@param {string} image - la image del personaje en forma de url de tipo string
 * @param {array} Favorito - Array que continiene todos los favoritos de tipo number
 *@param {Object} Personaje - tipea los parametros de tipo Personaje
 * @returns {JSX.Element} - elemento tarjeta de personaje
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

    return <div className="tarjeta-personaje"  >
        <img src={image} alt={name} onClick={()=> navDetalle(id)}/>
        <div className="tarjeta-personaje-body">
            <span>{name}</span>
            <BotonFavorito esFavorito={personajeFav} onClick={handlerClick} />
        </div>
    </div>
}

export default TarjetaPersonaje;

