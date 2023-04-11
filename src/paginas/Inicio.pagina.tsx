import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch } from "../hooks/hooks";
import { actionBusqueda, getBuscar } from "../redux/personajeSlice";
import { useEffect, useState } from "react";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {

    const dispatch = useAppDispatch()

    //Limpiar buscar
    const onLimpiar = () => {
        
        dispatch(actionBusqueda(""))
        dispatch(getBuscar(""))
    }

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={()=> onLimpiar()}>Limpiar Filtro</button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes />
        <Paginacion />
    </div>
}

export default PaginaInicio