import React from 'react' //Importar siempre react
import '../utils/css/Experiencia.estilos.css'
import Alejandra from '../utils/images/Alejandra.jpg'
import {Link} from 'react-router-dom'

const Experiencia = () => {
    return (
        <div className="container_Informacion">
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
            <div className="btnPaginaDos">
            <p>Experiencia</p>
            </div>
            <div className="Experiencia">
            <p>Mi experiencia como desarrolladora FrontEnd se basa en los proyectos entregados en el 
            Instituto en el que realizo mis estudios.
            En mi Git Hub se pueden observar algunos de los proyectos realizados por mi en el instituto.
            Mi Git Hub es LopezJeimy.</p> 
            </div>
        </div>
    )
}
export default Experiencia;