import React from 'react' //Importar siempre react
import '../utils/css/Habilidades.estilos.css'
import Alejandra from '../utils/images/Alejandra.jpg'
import Bolitas from'../utils/images/Habilidades.jpg'
import {Link} from 'react-router-dom'

const Habilidades = () => {
    return (
        <div className="container_Habilidades">
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
            <p>Habilidades</p>
            </div>
            <div className="bolitas">
            <img src={Bolitas} alt="Habilidades" />
            </div>
        </div>
    )
}
export default Habilidades;