import { current } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../hooks/hooks';
import { getPaginas, getPersonajes } from '../../redux/personajeSlice';
import './paginacion.css';
import { useEffect, useState } from 'react';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {

  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(getPaginas(page))
  },[page])
 
    
  
    return <div className="paginacion">
        <button onClick={()=> setPage((prev) => prev -1)}
        // isLoading={isFetching}
        disabled={page === 1}  
        className={"primary"}>Anterior</button>

        <button onClick={() => setPage((prev) => prev +1)}
        //isLoading={isFetching}
        disabled={page===42? true : false} 
        className={"primary"}>Siguiente</button>
        
    </div>
    
}

export default Paginacion;

