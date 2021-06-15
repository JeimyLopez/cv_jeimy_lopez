import React from 'react' //Importar siempre react
import '../utils/css/Estudios.estilos.css'
import Alejandra from '../utils/images/Alejandra.jpg'

const Estudios = () => {
    return (
        <div className="Container_Estudios">
                <div className="ContainerImage">
                    <img src={Alejandra} alt="Hola" />
                </div>
             <div className="ContainerText">
                <h1 className="CuerpoTitle">Jeimy Alejandra López Martinez</h1>
                <p>+57 320 4247613</p>
                <p>alejita-17-17@hotmail.com</p>
                <p>Trv 18H #69-59 sur</p>   
            </div>
            <div className="Descripcion">
                <h2>*FrontEnd</h2>
                <p>Actualmente</p>
                <p>Instituto Kuepa</p>
                <h2>*Bachiller Academico</h2>
                <p>Noviembre 2020</p>
                <p>Colegio Rafael Uribe Uribe</p>
                <h2>*Curso en fortalecimiento de habilidades laborales 
                con enfoque en servicio al cliente,
                servicios hotelero y operación 
                de computadores.</h2>
                <p>Noviembre 2020</p>
                <p>Instituto Kuepa</p>
                <h2>*Ingles A2</h2>
                <p>Julio 2020</p>
                <p>Instituto Británico</p>
            </div>
        </div>
     )
}
export default Estudios;