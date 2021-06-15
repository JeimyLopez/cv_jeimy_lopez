import React from 'react' //Importar siempre react
import '../utils/css/Principal.estilos.css'
import Alejandra from '../utils/images/Alejandra.jpg'

const Principal = () => {
    return (
        <div className="container_Principal">
                <div className="ContainerImage">
                    <img src={Alejandra} alt="Alejandra" />
                </div>
            <div className="ContainerText">
                <h1 className="CuerpoTitle">Jeimy Alejandra López Martinez</h1>
                <p>+57 320 4247613</p>
                <p>alejita-17-17@hotmail.com</p>
                <p>Trv 18H #69-59 sur</p>   
            </div>
        </div>
    )
}
export default Principal;