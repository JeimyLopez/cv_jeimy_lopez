import './App.css';
import Principal from './components/Principal.jsx'
import Informacion from './components/Informacion.jsx'
import Estudios from './components/Estudios.jsx'
import Experiencia from './components/Experiencia.jsx'
import Habilidades from './components/Habilidades.jsx'

function App() {
  return (
    <div className="App">
    <Principal/>
    <Informacion/>
    <Estudios/>
    <Experiencia/>
    <Habilidades/>
    </div>
    );
}
export default App;