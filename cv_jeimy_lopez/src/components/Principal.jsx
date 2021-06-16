import React from 'react' //Importar siempre react
import '../utils/css/Principal.estilos.css'
import Alejandra from '../utils/images/Alejandra.jpg'
import {Link} from 'react-router-dom'

const Principal = () => {
    return (
        <div className="container_Principal">
                <div className="ContainerImage">
                <Link to="/">
                    <img src={Alejandra} alt="Alejandra" />
                </Link>
                </div>
            <div className="ContainerText">
                <h1 className="CuerpoTitle">Jeimy Alejandra López Martinez</h1>
                <p>+57 320 4247613</p>
                <p>alejita-17-17@hotmail.com</p>
                <p>Trv 18H #69-59 sur</p>   
            </div>
            <div className="containerBtn">
            <Link to="/informacion">
            <button className="primero"> Información </button>
            </Link>
            <Link to="/estudios">
            <button className="primero"> Estudios </button>
            </Link>
            <Link to="/experiencia">
            <button className="primero"> Experiencia </button>
            </Link>
            <Link to="/habilidades">
            <button className="primero"> Habilidades </button>
            </Link>
            </div>
        </div>
    )
}
export default Principal;