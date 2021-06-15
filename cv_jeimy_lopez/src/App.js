import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Foto from './pages/Foto/Foto.jsx'
import Soy from './pages/soy/Soy.jsx'
import Study from './pages/study/Study.jsx'
import Expe from './pages/expe/Expe.jsx'
import Habi from './pages/habi/Habi.jsx'

function App() {
  return (
    <Router>
      <Switch >
        <Route path="/" exact component={Foto} />
        <Route path="/informacion" exact component={Soy} />
        <Route path="/estudios" exact component={Study} />
        <Route path="/experiencia" exact component={Expe} />
        <Route path="/habilidades" exact component={Habi} />
      </Switch>
    </Router>
    );
}
export default App;