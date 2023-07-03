import React from "react";
import "../css/formulario.css";
import { Logo1 } from "../pages/Imagenes";
import "../css/inicioseccion.css";

class FormularioPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombreEmp: "",
      direccionEmp: "",
      responsableEmp: "",
      areaEmp: "",
      cargoEmp: "",
      telefonoEmp: "",
      correoEmp: "",
      onjetoEmp: "",
      actividadesEmp: "",
      carrerasEmp: "",
      observacionesEmp: "",
    };
  }
  cambioValor = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  enviarDatos = (e) => {
    e.preventDefault();
    window.alert("Formulario enviado");
    const {
      nombreEmp,
      direccionEmp,
      responsableEmp,
      areaEmp,
      cargoEmp,
      telefonoEmp,
      correoEmp,
      onjetoEmp,
      actividadesEmp,
      carrerasEmp,
      observacionesEmp,
    } = this.state;

    const datosEnviar = {
      nombreEmp,
      direccionEmp,
      responsableEmp,
      areaEmp,
      cargoEmp,
      telefonoEmp,
      correoEmp,
      onjetoEmp,
      actividadesEmp,
      carrerasEmp,
      observacionesEmp,
    };
    fetch("http://localhost/convenios/Index.php/?insertar=1", {
      method: "POST",
      body: JSON.stringify(datosEnviar),
    })
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        this.setState({
          nombreEmp: "",
          direccionEmp: "",
          responsableEmp: "",
          areaEmp: "",
          cargoEmp: "",
          telefonoEmp: "",
          correoEmp: "",
          onjetoEmp: "",
          actividadesEmp: "",
          carrerasEmp: "",
          observacionesEmp: "",
        });
      })
      .catch(console.log);
  };
  render() {
    const {
      nombreEmp,
      direccionEmp,
      responsableEmp,
      areaEmp,
      cargoEmp,
      telefonoEmp,
      correoEmp,
      onjetoEmp,
      actividadesEmp,
      carrerasEmp,
      observacionesEmp,
    } = this.state;
    return (
      <div className="Papa">
        <div className="informacionIzquierda">
          <Logo1 />
          <h2>En Chicoloapan construimos resultados</h2>
        </div>
        <div className="xd"></div>
        <form className="formulario" onSubmit={this.enviarDatos}>
          <h1>Formulario para Registro de Convenio</h1>
          <div className="form-group">
            <input
              className="form_input"
              type="text"
              id="nombreEmp"
              name="nombreEmp"
              placeholder=" "
              value={nombreEmp}
              onChange={this.cambioValor}
            />
            <label className="form_label" htmlFor="nombreEmp">
              Nombre de la empresa o escuela:
            </label>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form_input"
              id="direccionEmp"
              name="direccionEmp"
              placeholder=" "
              value={direccionEmp}
              onChange={this.cambioValor}
            />
            <label className="form_label" htmlFor="direccionEmp">
              Dirección de la institución:
            </label>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form_input"
              id="responsableEmp"
              name="responsableEmp"
              placeholder=" "
              value={responsableEmp}
              onChange={this.cambioValor}
            />
            <label className="form_label" htmlFor="responsableEmp">
              Responsable directo:
            </label>
          </div>
          <div className="form-group">
            <input
              className="form_input"
              type="text"
              id="areaEmp"
              name="areaEmp"
              placeholder=" "
              value={areaEmp}
              onChange={this.cambioValor}
            />
            <label className="form_label" htmlFor="areaEmp">
              Área:
            </label>
          </div>
          <div className="form-group">
            <input
              className="form_input"
              type="text"
              id="cargoEmp"
              name="cargoEmp"
              placeholder=" "
              value={cargoEmp}
              onChange={this.cambioValor}
            />
            <label className="form_label" htmlFor="cargoEmp">
              Cargo:
            </label>
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form_input"
              id="telefonoEmp"
              name="telefonoEmp"
              placeholder=" "
              value={telefonoEmp}
              onChange={this.cambioValor}
            />
            <label className="form_label" htmlFor="telefonoEmp">
              Teléfono:
            </label>
          </div>
          <div className="form-group">
            <input
              className="form_input"
              type="email"
              id="correoEmp"
              name="correoEmp"
              placeholder=" "
              value={correoEmp}
              onChange={this.cambioValor}
            />
            <label className="form_label" htmlFor="correoEmp">
              Correo:
            </label>
          </div>
          <div className="form-group">
            <input
              className="form_input"
              type="text"
              id="onjetoEmp"
              name="onjetoEmp"
              placeholder=" "
              value={onjetoEmp}
              onChange={this.cambioValor}
            />
            <label className="form_label" htmlFor="onjetoEmp">
              Objeto del convenio:
            </label>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form_input"
              id="actividadesEmp"
              name="actividadesEmp"
              placeholder=" "
              value={actividadesEmp}
              onChange={this.cambioValor}
            />
            <label className="form_label" htmlFor="actividadesEmp">
              Actividades a desarrollar por los alumnos:
            </label>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form_input"
              id="carrerasEmp"
              name="carrerasEmp"
              placeholder=" "
              value={carrerasEmp}
              onChange={this.cambioValor}
            />
            <label className="form_label" htmlFor="carrerasEmp">
              Carreras:
            </label>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form_input"
              id="observacionesEmp"
              name="observacionesEmp"
              placeholder=" "
              value={observacionesEmp}
              onChange={this.cambioValor}
            />
            <label className="form_label" htmlFor="observacionesEmp">
              Observaciones:
            </label>
          </div>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}

export default FormularioPage;
