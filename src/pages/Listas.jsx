import React from "react";
import { Link } from "react-router-dom";
import "../css/listas.css";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Listas extends React.Component {
  cerrarSesion = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("user", { path: "/" });
    window.location.href = "./";
  };

  constructor(props) {
    super(props);
    this.state = {
      datosCargados: false,
      convenios: [],
    };
  }

  borrarDatos = (id) => {
    fetch("http://localhost/convenios/Index.php/?borrar=" + id)
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        this.cargarDatos();
      });
  };

  cargarDatos() {
    fetch("http://localhost/convenios/Index.php")
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        this.setState({ datosCargados: true, convenios: datosRespuesta });
      });
  }
  componentDidMount() {
    this.cargarDatos();
    if (!cookies.get("user")) {
      window.location.href = "./";
    }
  }

  render() {
    const { datosCargados, convenios } = this.state; // Corregido: se debe utilizar 'this.state' en lugar de 'this.setState'
    if (!datosCargados) {
      return <div>cargando</div>;
    } else {
      return (
        <div className="padre">
          <div className="subPadre">
            <div className="hijo1">
              <button id="zzz1">
                <Link to="/FormularioPage">Agregar nuevo convenio</Link>
              </button>
              <button id="zz">Agrega o elimina</button>
              <button onClick={() => this.cerrarSesion()}>Cerrar Sesion</button>
            </div>
            <div className="hijos">
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre Emp</th>
                    <th>Direccion</th>
                    <th>Responsable</th>
                    <th>Area</th>
                    <th>Cargo</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                    <th>Objetivivo del convenio</th>
                    <th>Actividades a realizar</th>
                    <th>Carreras</th>
                    <th>Observaciones</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {convenios.map((convenio) => (
                    <tr key={convenio.id}>
                      <td>{convenio.id}</td>
                      <td>{convenio.nombre_empresa_escuela}</td>
                      <td>{convenio.direccion_institucion}</td>
                      <td>{convenio.responsable_directo}</td>
                      <td>{convenio.area}</td>
                      <td>{convenio.cargo}</td>
                      <td>{convenio.telefono}</td>
                      <td>{convenio.correo}</td>
                      <td>{convenio.objeto_convenio}</td>
                      <td>{convenio.actividades_alumnos}</td>
                      <td>{convenio.carreras}</td>
                      <td>{convenio.observaciones}</td>
                      <td>
                        <div>
                          <button id="btn1">
                            <Link to={"/Editar/" + convenio.id}>Editar</Link>
                          </button>
                          <button
                            id="btn2"
                            onClick={() => this.borrarDatos(convenio.id)}
                          >
                            Borrar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Listas;
