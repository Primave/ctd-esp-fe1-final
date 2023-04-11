import './boton-favorito.css';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { agregarFavorito } from '../../redux/personajeSlice';
import { Personaje } from '../../types/types';

interface Props{
  esFavorito:boolean,
  onClick:() => void, 
}
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * @param {booblean} esFavorito - un booleano: si es true aparece la estrella amarilla si es false aparece la estrella vacia
 * @param {function} onClick - una funcion void que recibe el click
 * @param {object} Props - interface que tipea los componentes.
 * @returns {JSX.element} - boton favorito con la condicion de imagen en boolean y el click recibido por una function
 */

const BotonFavorito = ({esFavorito, onClick}: Props) => {     

    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";

    return <div id="fav" className="boton-favorito" onClick={onClick} >
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;


    /* const dispatch =useAppDispatch();

    const favoritoPersonaje = (tarjeta: Personaje)=>{
        dispatch(agregarFavorito(tarjeta))
    } */
    /* const PersonajeFavorito = document.querySelector('.boton-favorito');
     PersonajeFavorito.addEventListener(onClick, function() {
        PersonajeFavorito.classList.toggle(esFavorito);
      }) */
    /*cambiarTema.addEventListener("click", alternarColorTema);
    let nodoOscuro = document.getElementById("sitio");
    nodoOscuro.classList.toggle("dark"); */


   /*  this.state = {isToggleOn: true};
      // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this); */
    /* const [state, setState] = useState(true);
    function handleClick(e) {
        e.preventDefault();
      }
   
    setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    })); */
  