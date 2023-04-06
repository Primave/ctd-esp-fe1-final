import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {

    /* const [page, setPage] = useState(1);
    const query = useQuery(["PERSONAJES", page], () => getPersonajess(page), {
    keepPreviousData: true,
  }); */

  /*  let handleDecrementPage = () => setPage((old) => Math.max(1, old - 1));
  let handleIncrementPage = () => setPage((old) => old + 1);
  
      
  onClick={handleDecrementPage}
  onClick={handleIncrementPage} */

    return <div className="paginacion">
        <button disabled={true} className={"primary"}>Anterior</button>
        <button disabled={false} className={"primary"}>Siguiente</button>
    </div>
}

export default Paginacion;