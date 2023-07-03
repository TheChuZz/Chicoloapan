import { Logo1 } from "../pages/Imagenes";
import "../css/inicioseccion.css";
import "../css/admin.css";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import React from "react";

import agregar from "../assets/agregar.png";
import buscar from "../assets/buscar.png";
import editar from "../assets/editar.png";
import eliminar from "../assets/eliminar.png";

const cookies = new Cookies();

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (!cookies.get("user")) {
      window.location.href = "./";
    }
  }
  
  render() {
    return (
      <div className="adminPadre">
        <div id="logo" className="informacionIzquierda">
          <Logo1 />
          <h2>En Chicoloapan construimos resultados</h2>
        </div>
        <div className="section">
          <h2>
            Desde esta página podrás consultar, editar y agregar convenios
          </h2>
          <div className="categorias">
            <div className="seleccionH">
              <h3>Consulta Convenios</h3>
              <Link id="Link" to="/Listas">
                <button>Consultar</button>
              </Link>
              <img src={buscar} alt="lupa" />
            </div>
            <div className="seleccionH">
              <h3>Agregar nuevo convenio</h3>
              <Link id="Link" to="/FormularioPage">
                <button>Consultar</button>
              </Link>
              <img src={agregar} alt="lupa" />
            </div>
          </div>
          <div className="categorias">
            <div className="seleccionH">
              <h3>Editar convenio existente</h3>
              <Link id="Link" to="/Listas">
                <button>Consultar</button>
              </Link>
              <img src={editar} alt="lupa" />
            </div>
            <div className="seleccionH">
              <h3>Eliminar convenio</h3>
              <Link id="Link" to="/Listas">
                <button>Consultar</button>
              </Link>
              <img src={eliminar} alt="lupa" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
