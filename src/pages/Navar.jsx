
import { Link } from "react-router-dom";
import "../css/nav.css";
import logo from '../assets/logoB.png'

const Navar = () => {
  return (
    <nav className="cabeza">
      <div className="logo">
        <img style={{width:'25px', borderRadius: '5px', boxShadow:'0 0 0 0.5px #903749'}} src={logo} alt="Logo"/>
        <h1 style={{marginLeft:'2%'}}>En Chicoloapan construimos resultados </h1>
      </div>
      <div className="logo1">
        <Link id="vinculos" to="/">Inicio</Link>
        <Link id="vinculos" to="/FormularioPage">Formulario </Link>
        <Link id="vinculos" to="/Registro">Administrar</Link>
      </div>
    </nav>
  );
};

export default Navar;
