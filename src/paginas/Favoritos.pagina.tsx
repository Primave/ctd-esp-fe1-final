import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { deletarTodosFavoritos } from "../redux/personajeSlice";
import { useEffect, useState } from 'react';
import { Personaje } from "../types/types";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {

    const dispatch = useAppDispatch();
    const personajesFavoritos = useAppSelector((state) => state.personaje.Favorito)
    const [listaFav, setListaFav] = useState<Personaje[]>([]);

 

    //Botton limpiar
    const limpiarFavoritos = () => {
        dispatch(deletarTodosFavoritos())
    }

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={() => limpiarFavoritos()}>Eliminar Favoritos</button>
        </div>
        {personajesFavoritos.length > 0 ? (
        <GrillaPersonajes />
      ) : (
        <p>Ningun favoritos seleccionado</p>
      )}
      
    </div>
}

export default PaginaFavoritos

