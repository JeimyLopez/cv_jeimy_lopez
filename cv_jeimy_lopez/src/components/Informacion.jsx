import React from 'react' //Importar siempre react
import '../utils/css/Informacion.estilos.css'
import Alejandra from '../utils/images/Alejandra.jpg'
import {Link} from 'react-router-dom'

const Informacion = () => {
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
            <p>Información</p>
            </div>
            <div className="Informacion">
            <p>Soy Jeimy Alejandra Lopez Martinez, tengo 17 años de edad y vivo en Bogotá, Colombia. 
            Actualmente soy estudiante de Frontend en el instituto Kuepa y estoy en busca de un lugar donde realizar mis practicas.
            Tengo pasión por el diseño y desarrollo web. Me considero una persona creativa.
            Tengo conocimientos basicos en HTML5, CSS y JavaScript, junto con librerias como React JS.</p>
            </div>
        </div>
    )
}
export default Informacion;