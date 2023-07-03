import React, { Component } from "react";
import { Logo, Logo1 } from "../pages/Imagenes";
import "../css/inicioseccion.css";
import "../css/formulario.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Cookies from "universal-cookie";
import axios from "axios";
import md5 from "md5";
const baseUrl = "http://localhost:3001/usuarios";
const cookies = new Cookies();

class Registro extends Component {
  state = {
    form: {
      user: "",
      password: "",
    },
    showPassword: false,
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  iniciarSesion = async (e) => {
    e.preventDefault(); // Evitar la recarga de página

    try {
      const response = await axios.get(baseUrl, {
        params: {
          user: this.state.form.user,
          password: md5(this.state.form.password),
        },
      });

      if (response.data.length > 0) {
        const respuesta = response.data[0];
        cookies.set("id", respuesta.id, { path: "/" });
        cookies.set("user", respuesta.user, { path: "/" });
        alert(`Bienvenido ${respuesta.user}`);
        window.location.href = "./Admin";
      } else {
        alert("El usuario o la contraseña es incorrecto");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    if (cookies.get("user")) {
      window.location.href = "./Admin";
    }
  }

  render() {
    const { showPassword } = this.state;

    return (
      <div className="Padre">
        <div className="informacionIzquierda">
          <Logo1 />
          <h2>En Chicoloapan construimos resultados</h2>
        </div>
        <div className="inicioSeccionH">
          <h1>Inicio de sección</h1>
          <Logo />

          <div className="inicioSeccionP">
            <form onSubmit={this.iniciarSesion}>
              <div className="form-group">
                <input
                  name="user"
                  className="form_input"
                  placeholder=" "
                  type="text"
                  onChange={this.handleChange}
                />
                <label className="form_label" htmlFor="nombre">
                  Usuario
                </label>
              </div>
              <div className="form-group password-input">
                <input
                  name="password"
                  className="form_input"
                  placeholder=" "
                  type={showPassword ? "text" : "password"}
                  onChange={this.handleChange}
                />
                <label className="form_label" htmlFor="nombre">
                  Contraseña
                </label>
                {showPassword ? (
                  <FaEyeSlash
                    className="password-icon"
                    onClick={this.togglePasswordVisibility}
                  />
                ) : (
                  <FaEye
                    className="password-icon"
                    onClick={this.togglePasswordVisibility}
                  />
                )}
              </div>
              <button type="submit">Entrar</button>
              <a onClick={()=>{alert("comuniquese al siguiente correo:  arellanogarciarubenesteban@gmail.com")}}>Recuperar contraseña</a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Registro;
