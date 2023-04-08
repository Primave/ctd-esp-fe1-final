import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito = ({esFavorito, onClick}) => {

    /* const cambiarTema = document.querySelector('#cambiar-tema');
    cambiarTema.addEventListener("click", alternarColorTema);
    let nodoOscuro = document.getElementById("sitio");
    nodoOscuro.classList.toggle("dark"); */


    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={esFavorito? esFavorito=true : esFavorito=false}/>
    </div>
}

export default BotonFavorito;